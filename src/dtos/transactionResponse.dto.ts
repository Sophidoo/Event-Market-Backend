import { Booking, PaymentStatus, User } from "../../generated/prisma"


export class TransactionResponseDto{
    id: string
    transactionId: string
    paidAmount: number
    debit: number
    credit: number
    reason: string
    status: PaymentStatus
    createdAt: Date
    user: User
    booking: Booking | null
}