import { BookingResponseDto } from "../dtos/bookingResponse.dto";

export interface IPaginatedBookingResponse{
  data: BookingResponseDto[];
  meta: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}
