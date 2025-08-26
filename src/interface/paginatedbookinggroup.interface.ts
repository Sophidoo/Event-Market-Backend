import { BookingResponseDto } from "../dtos/bookingResponse.dto";

export interface IPaginatedBookingGroupResponse {
  data: { [key: string]: BookingResponseDto[] }; // Grouped by date (string key, e.g., "2025-08-26")
  meta: {
    total: number; // Total number of groups
    page: number;
    pageSize: number;
    totalPages: number;
  };
}