import { CreateBookingDto } from "../dtos/createBooking.dto";
import { IPaginatedBookingResponse } from "../interface/paginatedbooking.interface";
import { IPaginatedBookingGroupResponse } from "../interface/paginatedbookinggroup.interface";


export default interface BookingService{
    createBooking(dto: CreateBookingDto, userId: string) : Promise<string>
    fetchUserBooking(page: number, pageSize: number, id: string) : Promise<IPaginatedBookingResponse>
    fetchVendorBooking(page: number, pageSize: number, id: string) : Promise<IPaginatedBookingResponse>
    fetchAllBooking(page: number, pageSize: number) : Promise<IPaginatedBookingResponse>
    fetchBookingsGroup(page: number, pageSize: number, userId: string) : Promise<IPaginatedBookingGroupResponse>
    approveRequest(vendorId: string, bookingId: string) : Promise<string>
    cancelBooking(userId: string, bookingId: string) : Promise<string>
    updateStatus(status: string, id: string) : Promise<string>
    downloadBooking():Promise<string>
}