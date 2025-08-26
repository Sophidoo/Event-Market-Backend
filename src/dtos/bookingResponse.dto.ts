import { BookingRequest, BookingStatus, Item, Payment, PaymentStatus, PricingUnit, User, Vendor } from "../../generated/prisma";


export class BookingResponseDto{
    id: string
    startDate: Date
    endDate: Date
    address: string | null
    status: BookingStatus | null
    request: BookingRequest | null
    totalPrice: number
    paymentStatus: PaymentStatus | null
    createdAt: Date
    updatedAt: Date
    user: User
    vendor: Vendor
    item: Item 
    payment: Payment | null
}