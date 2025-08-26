import { IsEmail, IsNumber, IsString } from "class-validator";

export class PaystackPaymentDto {
  @IsNumber()
  amount: number;

  @IsEmail()
  email: string;

  @IsString()
  bookingId: string;

  @IsString()
  type: "full" | "deposit"; // For full payment or security deposit
}