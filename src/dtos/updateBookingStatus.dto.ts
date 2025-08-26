import { IsEnum, IsString } from "class-validator";
import { BookingStatus } from "../../generated/prisma";

export class UpdateStatusDto {
  @IsString()
  bookingId: string;

  @IsEnum(BookingStatus)
  status: BookingStatus;
}