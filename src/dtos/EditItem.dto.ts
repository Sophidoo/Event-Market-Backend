
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
    @IsArray()
    @IsNotEmpty()
    images: string[];
    @IsNumber()
    price: number;
    @IsEnum(BookingType)
    bookingType: BookingType;
    @IsString()
    categoryType: CategoryType;
    @IsArray()
    terms: string[];
    @IsArray()
    locations: string[];
    @IsBoolean()
    isAvailable: boolean;
    @IsEnum(PricingUnit)
    pricingUnit: PricingUnit;
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
    @IsArray()
    images: string[];
    @IsNumber()
    minPrice: number;
    @IsEnum(BookingType)
    bookingType: BookingType;
    categoryType: CategoryType;
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
}

export class EditPackageDto{
    @IsString()
    title: string;
    @IsEnum(Category)
    category: Category;
    @IsString()
    description: string;
    @IsArray()
    images: string[];
    @IsNumber()
    price: number;
    @IsEnum(BookingType)
    bookingType: BookingType;
    @IsNotEmpty()
    categoryType: CategoryType;
    @IsArray()
    offers: string[];
    @IsArray()
    locations: string[];
    @IsBoolean()
    isAvailable: boolean;
}