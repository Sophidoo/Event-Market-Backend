
import { StatusCodes } from "http-status-codes";
import { BookingStatus, BookingRequest, PaymentStatus, BookingType, Category } from "../../../generated/prisma";
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
  async fetchBookingDetails(id: string): Promise<BookingResponseDto> {
    const booking = await prisma.booking.findUnique({
      where: {
        id
      },
      include: {vendor: true, payment: true, item: true, user: true}
    })

    if(!booking){
      throw new HttpException(
        StatusCodes.NOT_FOUND,
        "Booking not found"
      )
    }

    const mappedBooking : BookingResponseDto = {
      id: booking.id,
      address: booking.address,
      createdAt: booking.createdAt,
      endDate: booking.endDate,
      item: booking.item,
      payment: booking.payment,
      paymentStatus: booking.paymentStatus,
      request: booking.request,
      startDate: booking.startDate,
      status: booking.status,
      totalPrice: booking.totalPrice,
      updatedAt: booking.updatedAt,
      user: booking.user,
      vendor: booking.vendor
    }

    return mappedBooking
  }
  private paystackService = new PaystackServiceImpl();
  private transactionService = new TransactionServiceImpl();

 async createBooking(dto: CreateBookingDto, userId: string): Promise<{ bookingId: string, message: string }> {
  await ValidateDto(CreateBookingDto, dto);

  const item = await prisma.item.findUnique({
    where: { id: dto.itemId },
    include: { vendor: true },
  });

  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    throw new HttpException(StatusCodes.NOT_FOUND, "User not found");
  }

  if (!item) {
    throw new HttpException(StatusCodes.NOT_FOUND, "Item not found");
  }

  // Check availability (add date overlap logic if needed)
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
      totalPrice: dto.totalPrice,  // Includes deposit, as calculated by frontend
      paymentStatus: PaymentStatus.PENDING,
      user: { connect: { id: userId } },
      vendor: { connect: { id: item.vendorId } },
      item: { connect: { id: dto.itemId } },
    },
  });

  if (item.bookingType === BookingType.INSTANT) {
    return { bookingId: booking.id, message: "Booking created. Proceed to payment." };
  } else {
    // Send email to vendor for approval
    await sendEmail({
      to: item.vendor.contactEmail || "sophieokosodo@gmail.com",
      subject: "Booking Request Approval",
      html: `A new booking request for ${item.title}. Approve within 24 hours.`,
    });
    return { bookingId: booking.id, message: "Booking request sent to vendor for approval." };
  }
}

  async fetchUserBooking(page: number, pageSize: number, id: string, category: Category): Promise<IPaginatedBookingResponse> {
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
        user: user,
        item: {category}
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
  async fetchVendorBooking(page: number, pageSize: number, id: string, category: Category): Promise<IPaginatedBookingResponse> {
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
        vendor: {id},
        item: {category}
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
  async fetchAllBooking(page: number, pageSize: number, category: Category): Promise<IPaginatedBookingResponse> {
    const skip = (page - 1) * pageSize;

    const bookings = await prisma.booking.findMany({
      skip,
      take: pageSize,
      where: {
        item: {category}
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

  async fetchBookingsGroup(page: number, pageSize: number, userId: string, category: Category): Promise<IPaginatedBookingGroupResponse> {
  const skip = (page - 1) * pageSize;
  // const groupSize = 2; // Number of groups per page

  // Fetch all bookings for the user
  let bookings;

  if(category){
      bookings = await prisma.booking.findMany({
        where: {
          user: { id: userId },
          item: {category}
        },
        include: { item: true, user: true, vendor: true, payment: true },
        orderBy: { createdAt: "asc" }, 
      });
  }else{
    bookings = await prisma.booking.findMany({
      where: {
        user: { id: userId },
        
      },
      include: { item: true, user: true, vendor: true, payment: true },
      orderBy: { createdAt: "asc" }, 
    });
  }
  console.log(bookings  )

  if (!bookings.length) {
    return {
      data: {},
      meta: {
        total: 0,
        page,
        pageSize,
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
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Paginate the groups
  const paginatedGroups = groupArray.slice(skip, skip + pageSize);
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
      pageSize,
      totalPages: Math.ceil(totalGroups / pageSize),
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
            id: bookingId
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

    async downloadBooking(id: string): Promise<string> {
      const user = await prisma.user.findUnique({where: {id}})

      if(!user){
        throw new HttpException(
          StatusCodes.NOT_FOUND,
          "User not found"
        )
      }

      let bookings;
      let csv;

      if(user.role === "ADMIN"){
        bookings = await prisma.booking.findMany({include: {user: true, vendor: true, payment: true, item: true}})
        csv = bookings.map(b => `${b.id},${b.status},${b.totalPrice},${b.address},${b.startDate},${b.endDate},${b.paymentStatus},${b.item.title},${b.vendor.companyName},${b.vendor.contactEmail},${b.vendor.contactPhone},${b.vendor.address},${b.vendor.city},${b.vendor.state}`).join("\n");
      }else{
        bookings = await prisma.booking.findMany({
          where: {
            vendorId: id
          },
          include: {
            user: true,
            vendor:true,
            payment: true,
            item: true
          }
        })
        csv = bookings.map(b => `${b.id},${b.status},${b.totalPrice},${b.address},${b.startDate},${b.endDate},${b.paymentStatus},${b.item.title},${b.user.name},${b.user.email},${b.user.phone},${b.user.address},${b.user.city},${b.user.state}`).join("\n");
      }
      
        return csv;
    }
}
