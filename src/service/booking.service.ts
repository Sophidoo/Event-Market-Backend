import { CreateBookingDto } from "../dtos/createBooking.dto";


export default interface BookingService{
    createBooking(dto: CreateBookingDto, userId: string) : Promise<string>
    // fetchBooking(page: number, pageSize: number, category: string) : Promise<string>
    // fetchBookingsGroup(page: number, pageSize: number, category: string) : Promise<string>
    // approveRequest(id : string) : Promise<string>
    // cancelBooking(id: string) : Promise<string>
    // updateStatus(status: string, id: string) : Promise<string>
    // downloadBooking():Promise<string>
}