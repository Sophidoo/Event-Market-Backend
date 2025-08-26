
import { TransactionResponseDto } from "../dtos/transactionResponse.dto";

export interface IPaginatedTransactionResponse{
  data: TransactionResponseDto[];
  meta: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}
