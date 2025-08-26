import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { PaymentStatus } from "../../generated/prisma";

export class CreateTransactionDto {
  @IsString()
  paymentId: string;

  @IsNumber()
  amount: number;

  @IsNumber()
  @IsOptional()
  debit: number;

  @IsNumber()
  @IsOptional()
  credit: number;

  @IsEnum(PaymentStatus)
  status: PaymentStatus;

  @IsString()
  reason: string;

  @IsString()
  userId: string;

  @IsString()
  bookingId: string;
}