
import { StatusCodes } from "http-status-codes";
import prisma from "../../lib/prisma";
import HttpException from "../../utils/exception";
import TransactionService from "../transaction.service";
import { CreateTransactionDto } from "../../dtos/createTransaction.dto";
import * as csv from "csv-stringify/sync";
import ValidateDto from "../../utils/ValidateDto";
import { IPaginatedTransactionResponse } from "../../interface/paginationtransaction.interface";
import { TransactionResponseDto } from "../../dtos/transactionResponse.dto";
import { PaymentStatus } from "../../../generated/prisma";

export default class TransactionServiceImpl implements TransactionService {
  async fetchUserTransactions(page: number, pageSize: number, userId: string): Promise<IPaginatedTransactionResponse> {
    const skip = (page - 1) * pageSize;
      const user = await prisma.user.findUnique({
        where: {
            id: userId
        },
      }) 

      if(!user){
        throw new HttpException(
            StatusCodes.NOT_FOUND,
            "User not found"
        )
      }

      const trns = await prisma.payment.findMany({
        skip,
        take: pageSize,
        where: {
            userId: userId
        },
        include: {
            user: true,
            booking: true
        }
      })

      const total = await prisma.payment.count({where: {userId}})

      const transformedTnx : TransactionResponseDto[] = 
      trns.map((tnx) => ({
        id: tnx.id,
        credit: tnx.credit,
        debit: tnx.debit,
        paidAmount: tnx.paidAmount,
        reason: tnx.reason,
        status: tnx.status,
        createdAt: tnx.createdAt,
        transactionId: tnx.transactionId,
        booking: tnx.booking,
        user: tnx.user
      }))

      return {
        data: transformedTnx,
        meta: {
            total,
            page,
            pageSize,
            totalPages: Math.ceil(total/pageSize)
        }
      }
  }
  async fetchAllTransactions(page: number, pageSize: number,): Promise<IPaginatedTransactionResponse> {
      const skip = (page - 1) * pageSize;

      const trns = await prisma.payment.findMany({
        skip,
        take: pageSize,
        include: {
            user: true,
            booking: true
        }
      })

      const total = await prisma.payment.count()

      const transformedTnx : TransactionResponseDto[] = 
      trns.map((tnx) => ({
        id: tnx.id,
        credit: tnx.credit,
        debit: tnx.debit,
        paidAmount: tnx.paidAmount,
        reason: tnx.reason,
        status: tnx.status,
        createdAt: tnx.createdAt,
        transactionId: tnx.transactionId,
        booking: tnx.booking,
        user: tnx.user
      }))

      return {
        data: transformedTnx,
        meta: {
            total,
            page,
            pageSize,
            totalPages: Math.ceil(total/pageSize)
        }
      }
  }
 

  async downloadTransaction(userId: string): Promise<string> {
    const transactions = await prisma.payment.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    if (transactions.length === 0) {
      throw new HttpException(StatusCodes.NOT_FOUND, "No transactions found");
    }

    const csvData = csv.stringify(transactions, {
      header: true,
      columns: ["id", "transactionId", "paidAmount", "debit", "credit", "reason", "status", "createdAt"],
    });

    return csvData;
  }

  async createTransaction(reference: string): Promise<{ message: string; data: object }> {
    if (!reference) {
      throw new HttpException(StatusCodes.BAD_REQUEST, "Reference is required");
    }

    const secret = process.env.PAYSTACK_SECRET_KEY;
    if (!secret) {
      throw new HttpException(StatusCodes.INTERNAL_SERVER_ERROR, "Paystack secret key not configured");
    }

    // Verify transaction with Paystack
    const verifyResponse = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${secret}`,
        "Content-Type": "application/json",
      },
    });

    const verifyData = await verifyResponse.json();

    if (!verifyData.status || verifyData.data.status !== "success") {
      throw new HttpException(StatusCodes.BAD_REQUEST, `Payment verification failed: ${verifyData.message || "Unknown error"}`);
    }

    const { amount, reference: ref, metadata } = verifyData.data;

    if (!metadata?.bookingId || !metadata?.userId) {
      throw new HttpException(StatusCodes.BAD_REQUEST, "Missing bookingId or userId in transaction metadata");
    }

    // Check if the booking exists
    const booking = await prisma.booking.findUnique({
      where: { id: metadata.bookingId },
    });

    if (!booking) {
      throw new HttpException(StatusCodes.NOT_FOUND, "Booking not found");
    }

    // Check for existing transaction to avoid duplicates
    const existingTransaction = await prisma.payment.findUnique({
      where: { bookingId: metadata.bookingId },
    });

    let payment;
    const paymentData = {
      transactionId: ref,
      paidAmount: amount / 100, // Convert from kobo to naira (or your currency)
      status: PaymentStatus.COMPLETED,
      debit: 0, // Adjust based on your business logic
      credit: amount / 100,
      reason: "Payment for booking",
      userId: metadata.userId,
      bookingId: metadata.bookingId,
    };

    if (existingTransaction) {
      // Update existing transaction
      payment = await prisma.payment.update({
        where: { bookingId: metadata.bookingId },
        data: paymentData,
      });
    } else {
      // Create new transaction
      payment = await prisma.payment.create({
        data: paymentData,
      });
    }

    // Update booking payment status
    await prisma.booking.update({
      where: { id: metadata.bookingId },
      data: { paymentStatus: PaymentStatus.COMPLETED },
    });

    return { message: "Payment successful and booking updated", data: verifyData };
  }


}
