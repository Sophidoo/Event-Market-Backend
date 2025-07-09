import { BookingType, Category, CategoryType, PricingUnit, Vendor } from "../../generated/prisma";


export class ItemResponseDto{
    id: string
    title: string;
    category: Category;
    description: string;
    images: string[];
    price: number | null;
    bookingType: BookingType;
    quantity: number | null
    categoryType: string | undefined;
    terms: string[];
    locations: string[];
    isAvailable: boolean;
    pricingUnit: PricingUnit | null;
    minPrice: number | null;
    experience: string | null;
    careerHighlight: string | null;
    education: string | null;
    offers: string[];
    prices: string[];
    nextAvailableDate: Date | null;
    createdAt: Date;
    avgRating : number | null;
    vendor: Vendor
}