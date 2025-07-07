import { StatusCodes } from "http-status-codes";
import { Category } from "../../../generated/prisma";
import cloudinary from "../../config/cloudinary.config";
import { CreateRentalsDto, CreateServicesDto, CreatePackageDto } from "../../dtos/CreateItem.dto";
import { EditRentalsDto, EditServicesDto, EditPackageDto } from "../../dtos/EditItem.dto";
import { ItemResponseDto } from "../../dtos/ItemResponse.dto";
import { IPaginatedItemResponse } from "../../interface/paginateditem.interface";
import prisma from "../../lib/prisma";
import HttpException from "../../utils/exception";
import ValidateDto from "../../utils/ValidateDto";
import ItemService from "../item.service";


export default class ItemServiceImpl implements ItemService{
    async createRentals(dto: CreateRentalsDto, files: Express.Multer.File[], id: string): Promise<string> {
        await ValidateDto(CreateRentalsDto, dto);

        if (files.length === 0) {
            throw new HttpException(
                StatusCodes.BAD_REQUEST,
                "At least one image is required"
            );
        }


        const uploadResults = await Promise.all(
            files.map(file => cloudinary.uploader.upload(file.path))
        );
        const imageUrls = uploadResults.map(result => result.secure_url);

        let categoryType = await prisma.categoryType.findUnique({
            where: {
                name: dto.categoryType
            }
        })

        if(!categoryType){
            categoryType = await prisma.categoryType.create({
                data: {
                    name: dto.categoryType
                }
            })
        }


        const rental = await prisma.item.create({
        data: {
            title: dto.title,
            category: dto.category,
            description: dto.description,
            images: imageUrls,
            price: dto.price,
            bookingType: dto.bookingType,
            categoryId: categoryType.id,
            terms: dto.terms,
            locations: dto.locations,
            isAvailable: dto.isAvailable,
            pricingUnit: dto.pricingUnit,
            vendorId: id
        }
    });

        return `Rental ${rental.id} created successfully`;
    }
    createServices(dto: CreateServicesDto): Promise<string> {
        throw new Error("Method not implemented.");
    }
    createPackages(dto: CreatePackageDto): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getItem(id: string): Promise<ItemResponseDto> {
        throw new Error("Method not implemented.");
    }
    getItemsList(page: number, pageSize: number, category: Category): Promise<IPaginatedItemResponse> {
        throw new Error("Method not implemented.");
    }
    getRentalList(page: number, pageSize: number): Promise<IPaginatedItemResponse> {
        throw new Error("Method not implemented.");
    }
    getServiceList(page: number, pageSize: number): Promise<IPaginatedItemResponse> {
        throw new Error("Method not implemented.");
    }
    getPackageList(page: number, pageSize: number): Promise<IPaginatedItemResponse> {
        throw new Error("Method not implemented.");
    }
    editRentals(id: string, dto: EditRentalsDto): Promise<string> {
        throw new Error("Method not implemented.");
    }
    editService(id: string, dto: EditServicesDto): Promise<string> {
        throw new Error("Method not implemented.");
    }
    editPackages(id: string, dto: EditPackageDto): Promise<string> {
        throw new Error("Method not implemented.");
    }
    deleteItem(id: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    changeItemStatus(id: string, status: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getMostBookedRentals(page: number, pageSize: number): Promise<IPaginatedItemResponse> {
        throw new Error("Method not implemented.");
    }
    getMostBookedService(page: number, pageSize: number): Promise<IPaginatedItemResponse> {
        throw new Error("Method not implemented.");
    }
    getMostBookedPackages(page: number, pageSize: number): Promise<IPaginatedItemResponse> {
        throw new Error("Method not implemented.");
    }
    getHighestRatedList(page: number, pageSize: number): Promise<IPaginatedItemResponse> {
        throw new Error("Method not implemented.");
    }

    
}