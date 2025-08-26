
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

export default class BookingServiceImpl implements BookingService {
  private paystackService = new PaystackServiceImpl();
  private transactionService = new TransactionServiceImpl();

  async createBooking(dto: CreateBookingDto, userId: string): Promise<string> {
    await ValidateDto(CreateBookingDto, dto);

    const item = await prisma.item.findUnique({
      where: { id: dto.itemId },
      include: { vendor: true },
    });

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
        email: "user@email.com", // Fetch from user
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

//   async fetchBooking(page: number, pageSize: number, category: string): Promise<IPaginatedBookingResponse> {
//     const skip = (page - 1) * pageSize;
//     const where = { category: category ? category : undefined };

//     const bookings = await prisma.booking.findMany({
//       skip,
//       take: pageSize,
//       where,
//       include: { item: true, user: true, vendor: true },
//       orderBy: { createdAt: "desc" },
//     });

//     const total = await prisma.booking.count({ where });

//     return {
//       data: bookings,
//       meta: {
//         total,
//         page,
//         pageSize,
//         totalPages: Math.ceil(total / pageSize),
//       },
//     };
//   }

//   async fetchBookingsGroup(page: number, pageSize: number, category: string): Promise<IPaginatedBookingGroupResponse> {
//     // Implement grouping logic, e.g., group by status
//     const bookings = await this.fetchBooking(page, pageSize, category);
//     // Grouping example
//     const grouped = bookings.data.reduce((acc, booking) => {
//       const key = booking.status;
//       if (!acc[key]) acc[key] = [];
//       acc[key].push(booking);
//       return acc;
//     }, {});

//     return {
//       data: grouped,
//       meta: bookings.meta,
//     };
//   }

//   async approveRequest(dto: ApproveRequestDto): Promise<string> {
//     await ValidateDto(ApproveRequestDto, dto);

//     const booking = await prisma.booking.findUnique({
//       where: { id: dto.bookingId },
//       include: { user: true },
//     });

//     if (!booking || booking.vendorId !== dto.vendorId) {
//       throw new HttpException(StatusCodes.NOT_FOUND, "Booking not found");
//     }

//     if (booking.request !== BookingRequest.PENDING) {
//       throw new HttpException(StatusCodes.BAD_REQUEST, "Booking not pending approval");
//     }

//     await prisma.booking.update({
//       where: { id: dto.bookingId },
//       data: { request: BookingRequest.APPROVED },
//     });

//     // Send email to user with 24-hour timeframe
//     const expiration = new Date(Date.now() + 24 * 60 * 60 * 1000);
//     await sendEmail({
//       to: booking.user.email,
//       subject: "Booking Approved",
//       html: `Your booking has been approved. Pay within 24 hours: link-to-pay`,
//     });

//     return "Booking request approved. User notified.";
//   }

//   async cancelBooking(id: string): Promise<string> {
//     const booking = await prisma.booking.findUnique({ where: { id } });

//     if (!booking) {
//       throw new HttpException(StatusCodes.NOT_FOUND, "Booking not found");
//     }

//     if (booking.status !== BookingStatus.PENDING) {
//       throw new HttpException(StatusCodes.BAD_REQUEST, "Only pending bookings can be cancelled");
//     }

//     await prisma.booking.delete({ where: { id } });

//     return "Booking cancelled successfully";
//   }

//   async updateStatus(dto: UpdateStatusDto): Promise<string> {
//     await ValidateDto(UpdateStatusDto, dto);

//     const booking = await prisma.booking.findUnique({ where: { id: dto.bookingId } });

//     if (!booking) {
//       throw new HttpException(StatusCodes.NOT_FOUND, "Booking not found");
//     }

//     await prisma.booking.update({
//       where: { id: dto.bookingId },
//       data: { status: dto.status },
//     });

//     if (dto.status === BookingStatus.COMPLETED) {
//       // Send confirmation email to vendor
//       await sendEmail({
//         to: booking.vendor.email,
//         subject: "Booking Completed",
//         html: "Confirm item condition for refund processing.",
//       });
//     }

//     return "Booking status updated";
//   }

//   async downloadBooking(): Promise<string> {
//     // Implement CSV or PDF generation for bookings
//     // Example: Generate CSV from all bookings
//     const bookings = await prisma.booking.findMany();
//     const csv = bookings.map(b => `${b.id},${b.status},${b.totalPrice}`).join("\n");
//     // Return CSV string or file path
//     return csv; // Or save to file and return path
//   }
}
