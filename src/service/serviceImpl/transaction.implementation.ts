
import { StatusCodes } from "http-status-codes";
import prisma from "../../lib/prisma";
import HttpException from "../../utils/exception";
import TransactionService from "../transaction.service";
import { CreateTransactionDto } from "../../dtos/createTransaction.dto";
import * as csv from "csv-stringify/sync";
import ValidateDto from "../../utils/ValidateDto";

export default class TransactionServiceImpl implements TransactionService {
  async createTransaction(dto: CreateTransactionDto): Promise<string> {
    await ValidateDto(CreateTransactionDto, dto);

    const transaction = await prisma.payment.create({
      data: {
        transactionId: dto.paymentId,
        paidAmount: dto.amount,
        debit: dto.amount < 0 ? Math.abs(dto.amount) : 0,
        credit: dto.amount > 0 ? dto.amount : 0,
        reason: dto.reason,
        status: dto.status,
        user: { connect: { id: dto.userId } },
        booking: dto.bookingId ? { connect: { id: dto.bookingId } } : undefined,
      },
    });

    return `Transaction ${transaction.id} created`;
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
}
