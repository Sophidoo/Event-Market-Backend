import { CreateTransactionDto } from "../dtos/createTransaction.dto"


export default interface TransactionService{
    createTransaction(dto: CreateTransactionDto) : Promise<string>
    downloadTransaction(userId: string) : Promise<string>
}