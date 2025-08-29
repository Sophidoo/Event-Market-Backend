import { Category } from "../../generated/prisma";
import { CreateBookingDto } from "../dtos/createBooking.dto";
import { IPaginatedBookingResponse } from "../interface/paginatedbooking.interface";
import { IPaginatedBookingGroupResponse } from "../interface/paginatedbookinggroup.interface";


export default interface BookingService{
    createBooking(dto: CreateBookingDto, userId: string) : Promise<{ bookingId: string, message: string }>
    fetchUserBooking(page: number, pageSize: number, id: string, catgeory: string) : Promise<IPaginatedBookingResponse>
    fetchVendorBooking(page: number, pageSize: number, id: string, catgeory: string) : Promise<IPaginatedBookingResponse>
    fetchAllBooking(page: number, pageSize: number, catgeory: string) : Promise<IPaginatedBookingResponse>
    fetchBookingsGroup(page: number, pageSize: number, userId: string, category: Category) : Promise<IPaginatedBookingGroupResponse>
    approveRequest(vendorId: string, bookingId: string) : Promise<string>
    cancelBooking(userId: string, bookingId: string) : Promise<string>
    updateStatus(status: string, id: string) : Promise<string>
    downloadBooking():Promise<string>
}