
import { StatusCodes } from "http-status-codes";
import prisma from "../../lib/prisma";
import HttpException from "../../utils/exception";
import TransactionService from "../transaction.service";
import { CreateTransactionDto } from "../../dtos/createTransaction.dto";
import * as csv from "csv-stringify/sync";
import ValidateDto from "../../utils/ValidateDto";
import { IPaginatedTransactionResponse } from "../../interface/paginationtransaction.interface";
import { TransactionResponseDto } from "../../dtos/transactionResponse.dto";

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
