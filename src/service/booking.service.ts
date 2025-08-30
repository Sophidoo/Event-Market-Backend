import { Category } from "../../generated/prisma";
import { BookingResponseDto } from "../dtos/bookingResponse.dto";
import { CreateBookingDto } from "../dtos/createBooking.dto";
import { IPaginatedBookingResponse } from "../interface/paginatedbooking.interface";
import { IPaginatedBookingGroupResponse } from "../interface/paginatedbookinggroup.interface";


export default interface BookingService{
    createBooking(dto: CreateBookingDto, userId: string) : Promise<{ bookingId: string, message: string }>
    fetchUserBooking(page: number, pageSize: number, id: string, catgeory: string) : Promise<IPaginatedBookingResponse>
    fetchBookingDetails(id: string): Promise<BookingResponseDto>
    fetchVendorBooking(page: number, pageSize: number, id: string, catgeory: string) : Promise<IPaginatedBookingResponse>
    fetchAllBooking(page: number, pageSize: number, catgeory: string) : Promise<IPaginatedBookingResponse>
    fetchBookingsGroup(page: number, pageSize: number, userId: string, category: Category) : Promise<IPaginatedBookingGroupResponse>
    approveRequest(vendorId: string, bookingId: string) : Promise<string>
    cancelBooking(userId: string, bookingId: string) : Promise<string>
    updateStatus(status: string, id: string) : Promise<string>
    downloadBooking(id: string):Promise<string>
}