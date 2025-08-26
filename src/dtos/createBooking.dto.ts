import { IsDateString, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { Category } from "../../generated/prisma";

export class CreateBookingDto {
  @IsString()
  itemId: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsString()
  address: string;

  @IsNumber()
  totalPrice: number;

}