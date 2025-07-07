import { BookingType, Category, CategoryType, PricingUnit } from "../../generated/prisma";


export class ItemResponseDto{
    title: string;
    category: Category;
    description: string;
    images: string[];
    price: number;
    bookingType: BookingType;
    quantity: number
    categoryType: string;
    terms: string[];
    locations: string[];
    isAvailable: boolean;
    pricingUnit: PricingUnit;
    minPrice: string;
    experience: string;
    careerHighlight: string;
    education: string
    offers: string[];
    prices: string[];
    nextAvailableDate: Date;
    createdAt: Date;
}