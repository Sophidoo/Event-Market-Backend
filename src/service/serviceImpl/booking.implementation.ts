
import { StatusCodes } from "http-status-codes";
import { BookingStatus, BookingRequest, PaymentStatus, BookingType } from "../../../generated/prisma";
import prisma from "../../lib/prisma";
import HttpException from "../../utils/exception";
import { sendEmail } from "../../utils/email";
import { CreateTransactionDto } from "../../dtos/createTransaction.dto";
import PaystackServiceImpl from "./paystack.implementation";
import TransactionServiceImpl from "./transaction.implementation";
import ValidateDto from "../../utils/ValidateDto";
import BookingService from "../booking.service";
import { CreateBookingDto } from "../../dtos/createBooking.dto";
import { IPaginatedBookingResponse } from "../../interface/paginatedbooking.interface";
import { BookingResponseDto } from "../../dtos/bookingResponse.dto";
import { IPaginatedBookingGroupResponse } from "../../interface/paginatedbookinggroup.interface";

export default class BookingServiceImpl implements BookingService {
  private paystackService = new PaystackServiceImpl();
  private transactionService = new TransactionServiceImpl();

  async createBooking(dto: CreateBookingDto, userId: string): Promise<string> {
    await ValidateDto(CreateBookingDto, dto);

    const item = await prisma.item.findUnique({
      where: { id: dto.itemId },
      include: { vendor: true },
    });

    const user = await prisma.user.findUnique({where: {id: userId}})

    if(!user){
        throw new HttpException(
            StatusCodes.NOT_FOUND,
            "User not found"
        )
    }

    if (!item) {
      throw new HttpException(StatusCodes.NOT_FOUND, "Item not found");
    }

    // Check availability (simplified; add date overlap check if needed)
    if (!item.isAvailable) {
      throw new HttpException(StatusCodes.BAD_REQUEST, "Item is not available");
    }

    const booking = await prisma.booking.create({
      data: {
        startDate: new Date(dto.startDate),
        endDate: new Date(dto.endDate),
        address: dto.address,
        status: BookingStatus.PENDING,
        request: item.bookingType === BookingType.REQUEST ? BookingRequest.PENDING : BookingRequest.APPROVED,
        totalPrice: dto.totalPrice,
        paymentStatus: PaymentStatus.PENDING,
        user: { connect: { id: userId } },
        vendor: { connect: { id: item.vendorId } },
        item: { connect: { id: dto.itemId } },
      },
    });

    const depositAmount = dto.totalPrice * 0.05;
    const fullAmount = dto.totalPrice + depositAmount;

    if (item.bookingType === BookingType.INSTANT) {
      // Initiate full payment + deposit
      const paymentUrl = await this.paystackService.payWithPaystack({
        amount: fullAmount,
        email: user.email, // Fetch from user
        bookingId: booking.id,
        type: "full",
      });
      return `Booking created. Proceed to payment: ${paymentUrl}`;
    } else {
      // Send email to vendor for approval
      await sendEmail({
        to: item.vendor.contactEmail || "sophieokosodo@gmail.com",
        subject: "Booking Request Approval",
        html: `A new booking request for ${item.title}. Approve within 24 hours.`,
      });
      return "Booking request sent to vendor for approval.";
    }   
  }

  async fetchUserBooking(page: number, pageSize: number, id: string): Promise<IPaginatedBookingResponse> {
    const skip = (page - 1) * pageSize;
    const user = await prisma.user.findUnique({where: {id}})

    if(!user){
        throw new HttpException(
            StatusCodes.NOT_FOUND,
            "User not found"
        )
    }

    const bookings = await prisma.booking.findMany({
      skip,
      take: pageSize,
      where: {
        user: user
      },
      include: { item: true, user: true, vendor: true, payment: true },
      orderBy: { createdAt: "desc" },
    });

    const transformedBookings: BookingResponseDto[] = bookings.map((booking) => ({
        id: booking.id,
        startDate: booking.startDate,
        endDate: booking.endDate,
        address: booking.address ?? "Unknown", // Provide default value for null
        status: booking.status,
        request: booking.request,
        totalPrice: booking.totalPrice,
        paymentStatus: booking.paymentStatus,
        createdAt: booking.createdAt,
        updatedAt: booking.updatedAt,
        user: booking.user,
        vendor: booking.vendor,
        item: booking.item,// Default item
        payment: booking.payment || null, // Default payment
    }));

    const total = await prisma.booking.count({ where: { user: { id } } });

    return {
        data: transformedBookings,
        meta: {
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize),
        },
    };
  }
  async fetchVendorBooking(page: number, pageSize: number, id: string): Promise<IPaginatedBookingResponse> {
    const skip = (page - 1) * pageSize;
    const vendor = await prisma.vendor.findUnique({where: {id}})

    if(!vendor){
        throw new HttpException(
            StatusCodes.NOT_FOUND,
            "User not found"
        )
    }

    const bookings = await prisma.booking.findMany({
      skip,
      take: pageSize,
      where: {
        vendor: vendor
      },
      include: { item: true, user: true, vendor: true, payment: true },
      orderBy: { createdAt: "desc" },
    });

    const transformedBookings: BookingResponseDto[] = bookings.map((booking) => ({
        id: booking.id,
        startDate: booking.startDate,
        endDate: booking.endDate,
        address: booking.address ?? "Unknown", // Provide default value for null
        status: booking.status,
        request: booking.request,
        totalPrice: booking.totalPrice,
        paymentStatus: booking.paymentStatus,
        createdAt: booking.createdAt,
        updatedAt: booking.updatedAt,
        user: booking.user,
        vendor: booking.vendor,
        item: booking.item,// Default item
        payment: booking.payment || null, // Default payment
    }));

    const total = await prisma.booking.count({ where: { user: { id } } });

    return {
        data: transformedBookings,
        meta: {
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize),
        },
    };
  }
  async fetchAllBooking(page: number, pageSize: number): Promise<IPaginatedBookingResponse> {
    const skip = (page - 1) * pageSize;

    const bookings = await prisma.booking.findMany({
      skip,
      take: pageSize,
      include: { item: true, user: true, vendor: true, payment: true },
      orderBy: { createdAt: "desc" },
    });

    const transformedBookings: BookingResponseDto[] = bookings.map((booking) => ({
        id: booking.id,
        startDate: booking.startDate,
        endDate: booking.endDate,
        address: booking.address ?? "Unknown", // Provide default value for null
        status: booking.status,
        request: booking.request,
        totalPrice: booking.totalPrice,
        paymentStatus: booking.paymentStatus,
        createdAt: booking.createdAt,
        updatedAt: booking.updatedAt,
        user: booking.user,
        vendor: booking.vendor,
        item: booking.item,// Default item
        payment: booking.payment || null, // Default payment
    }));

    const total = await prisma.booking.count();

    return {
        data: transformedBookings,
        meta: {
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize),
        },
    };
  }

  async fetchBookingsGroup(page: number, pageSize: number, userId: string): Promise<IPaginatedBookingGroupResponse> {
  const skip = (page - 1) * pageSize;
  const groupSize = 5; // Number of groups per page

  // Fetch all bookings for the user
  const bookings = await prisma.booking.findMany({
    where: {
      user: { id: userId },
    },
    include: { item: true, user: true, vendor: true, payment: true },
    orderBy: { createdAt: "asc" }, // Sort bookings by createdAt ascending
  });

  if (!bookings.length) {
    return {
      data: {},
      meta: {
        total: 0,
        page,
        pageSize: groupSize,
        totalPages: 0,
      },
    };
  }

  // Transform bookings to match BookingResponseDto
  const transformedBookings: BookingResponseDto[] = bookings.map((booking) => ({
    id: booking.id,
    startDate: booking.startDate,
    endDate: booking.endDate,
    address: booking.address ?? "Unknown",
    status: booking.status ?? BookingStatus.PENDING, // Default for null
    request: booking.request ?? BookingRequest.PENDING, // Default for null
    totalPrice: booking.totalPrice,
    paymentStatus: booking.paymentStatus,
    createdAt: booking.createdAt,
    updatedAt: booking.updatedAt,
    user: booking.user,
    vendor: booking.vendor,
    item: booking.item, // Assumes item is non-null (adjust if nullable)
    payment: booking.payment ?? null,
  }));

  // Group bookings by createdAt date (YYYY-MM-DD)
  const grouped = transformedBookings.reduce((acc, booking) => {
    const dateKey = booking.createdAt.toISOString().split("T")[0]; // Extract date (e.g., "2025-08-26")
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(booking);
    return acc;
  }, {} as { [key: string]: BookingResponseDto[] });

  // Convert grouped object to an array of groups and sort by date
  const groupArray = Object.entries(grouped)
    .map(([date, bookings]) => ({ date, bookings }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Paginate the groups
  const paginatedGroups = groupArray.slice(skip, skip + groupSize);
  const totalGroups = groupArray.length;

  // Convert back to object format for response
  const paginatedData = paginatedGroups.reduce((acc, group) => {
    acc[group.date] = group.bookings;
    return acc;
  }, {} as { [key: string]: BookingResponseDto[] });

  return {
    data: paginatedData,
    meta: {
      total: totalGroups,
      page,
      pageSize: groupSize,
      totalPages: Math.ceil(totalGroups / groupSize),
    },
  };
}

  async approveRequest(vendorId: string, bookingId: string): Promise<string> {

    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: { user: true },
    });

    if (!booking || booking.vendorId !== vendorId) {
      throw new HttpException(StatusCodes.NOT_FOUND, "Booking not found");
    }

    if (booking.request !== BookingRequest.PENDING) {
      throw new HttpException(StatusCodes.BAD_REQUEST, "Booking not pending approval");
    }

    await prisma.booking.update({
      where: { id: bookingId },
      data: { request: BookingRequest.APPROVED },
    });

    // Send email to user with 24-hour timeframe
    const expiration = new Date(Date.now() + 24 * 60 * 60 * 1000);
    await sendEmail({
      to: booking.user.email,
      subject: "Booking Approved",
      html: `Your booking has been approved. Pay within 24 hours: link-to-pay`,
    });

    return "Booking request approved. User notified.";
  }

  async cancelBooking(userId: string, bookingId: string): Promise<string> {
    const booking = await prisma.booking.findUnique({ where: { id: bookingId }, include: {user: true, vendor: true} });

    if (!booking) {
      throw new HttpException(StatusCodes.NOT_FOUND, "Booking not found");
    }

    const user = await prisma.user.findUnique({where: {id: userId}})

    if(!user){
        throw new HttpException(
            StatusCodes.NOT_FOUND,
            "User not found"
        )
    }
    if(user.role == "VENDOR" && user.id !== booking.vendor.userId){
        throw new HttpException(
            StatusCodes.UNAUTHORIZED,
            "You do not have authorization to do this"
        )
    }
    if(user.role == "USER" && user.id !== booking.user.id){
        throw new HttpException(
            StatusCodes.UNAUTHORIZED,
            "You do not have authorization to do this"
        )
    }


    await prisma.booking.update({
        where: {
            id: userId
        },
        data: {
            status: BookingStatus.CANCELLED
        }
     });

    return "Booking cancelled successfully";
  }

  async updateStatus(status: BookingStatus, id: string): Promise<string> {

    const booking = await prisma.booking.findUnique({ where: { id }, include: {vendor: true} });

    if (!booking) {
      throw new HttpException(StatusCodes.NOT_FOUND, "Booking not found");
    }

    await prisma.booking.update({
      where: { id: id },
      data: { status},
    });

    if (status === BookingStatus.COMPLETED) {
      // Send confirmation email to vendor
      await sendEmail({
        to: booking.vendor.contactEmail || "sophieokosodo@gmail.com",
        subject: "Booking Completed",
        html: "Confirm item condition for refund processing.",
      });
    }

    return "Booking status updated";
  }

    async downloadBooking(): Promise<string> {
        const bookings = await prisma.booking.findMany();
        const csv = bookings.map(b => `${b.id},${b.status},${b.totalPrice}`).join("\n");
        return csv;
    }
}
