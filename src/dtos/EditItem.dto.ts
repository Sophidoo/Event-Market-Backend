
import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { BookingType, Category, CategoryType, PricingUnit } from "../../generated/prisma";


export class EditRentalsDto{
    @IsString()
    title: string;
    @IsEnum(Category)
    @IsNotEmpty()
    category: Category;
    @IsString()
    @IsNotEmpty()
    description: string;
    @IsNumber()
    price: number;
    @IsEnum(BookingType)
    bookingType: BookingType;
    @IsString()
    categoryType: string;
    @IsArray()
    terms: string[];
    @IsArray()
    locations: string[];
    @IsBoolean()
    isAvailable: boolean;
    @IsEnum(PricingUnit)
    pricingUnit: PricingUnit;
    @IsArray()
    imagesToDelete : string[];
}

export class EditServicesDto{
    @IsString()
    @IsNotEmpty()
    title: string;
    @IsEnum(Category)
    @IsNotEmpty()
    category: Category;
    @IsString()
    description: string;
    @IsNumber()
    minPrice: number;
    @IsEnum(BookingType)
    bookingType: BookingType;
    categoryType: string;
    @IsString()
    experience: string;
    @IsString()
    careerHighlight: string;
    @IsString()
    education: string
    @IsArray()
    offers: string[];
    @IsArray()
    prices: string[];
    @IsArray()
    locations: string[];
    @IsBoolean()
    isAvailable: boolean;
    @IsArray()
    imagesToDelete : string[];
}

export class EditPackageDto{
    @IsString()
    title: string;
    @IsEnum(Category)
    category: Category;
    @IsString()
    description: string;
    @IsNumber()
    price: number;
    @IsEnum(BookingType)
    bookingType: BookingType;
    @IsNotEmpty()
    categoryType: string;
    @IsArray()
    offers: string[];
    @IsArray()
    locations: string[];
    @IsBoolean()
    isAvailable: boolean;
    @IsArray()
    imagesToDelete : string[];
}