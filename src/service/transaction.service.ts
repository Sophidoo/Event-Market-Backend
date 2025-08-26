import { CreateTransactionDto } from "../dtos/createTransaction.dto"
import { IPaginatedTransactionResponse } from "../interface/paginationtransaction.interface"


export default interface TransactionService{
    createTransaction(dto: CreateTransactionDto) : Promise<string>
    downloadTransaction(userId: string) : Promise<string>
    fetchUserTransactions(page: number, pageSize: number, userId: string) : Promise<IPaginatedTransactionResponse>
    fetchAllTransactions(page: number, pageSize: number,) : Promise<IPaginatedTransactionResponse>
}