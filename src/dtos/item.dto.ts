import { BookingType, Category, CategoryType } from "../../generated/prisma";


export class CreateItemDto{
    title: string;
    category: Category;
    images: string[];
    categoryType: CategoryType;
    price: number;
    locations: string[];
    bookingType: BookingType;
    quantity: number;
    isAvailable: boolean
}