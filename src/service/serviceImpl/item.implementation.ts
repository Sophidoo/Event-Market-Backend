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
import { plainToInstance } from "class-transformer";


export default class ItemServiceImpl implements ItemService{
    async createRentals(dto: CreateRentalsDto, files: Express.Multer.File[], id: string): Promise<string> {
        let isAvailable : boolean = true
        if (dto.isAvailable == "true") isAvailable = true
        if (dto.isAvailable == "false") isAvailable = false
        await ValidateDto(CreateRentalsDto, {...dto, price: +dto.price});

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
                price: +dto.price,
                bookingType: dto.bookingType,
                categoryId: categoryType.id,
                terms: dto.terms,
                locations: dto.locations,
                isAvailable,
                pricingUnit: dto.pricingUnit,
                vendorId: id
            }
        });

        return `Rental ${rental.title} created successfully`;
    }
    async createServices(dto: CreateServicesDto, files: Express.Multer.File[], id: string): Promise<string> {
        let isAvailable : boolean = true
        if (dto.isAvailable == "true") isAvailable = true
        if (dto.isAvailable == "false") isAvailable = false
        await ValidateDto(CreateServicesDto, {...dto, minPrice: +dto.minPrice});

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


        const service = await prisma.item.create({
            data: {
                title: dto.title,
                category: dto.category,
                description: dto.description,
                images: imageUrls,
                minPrice: +dto.minPrice,
                bookingType: dto.bookingType,
                categoryId: categoryType.id,
                experience: dto.experience,
                careerHighlight: dto.careerHighlight,
                education: dto.education,
                locations: dto.locations,
                offers: dto.offers,
                prices: dto.prices,
                isAvailable,
                vendorId: id
            }
        });

        return `Service ${service.title} created successfully`;
    }


    async createPackages(dto: CreatePackageDto, files: Express.Multer.File[], id: string): Promise<string> {
        let isAvailable : boolean = true
        if (dto.isAvailable == "true") isAvailable = true
        if (dto.isAvailable == "false") isAvailable = false
        await ValidateDto(CreateServicesDto, {...dto, price: +dto.price});

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


        const packages = await prisma.item.create({
            data: {
                title: dto.title,
                category: dto.category,
                description: dto.description,
                images: imageUrls,
                price: +dto.price,
                bookingType: dto.bookingType,
                categoryId: categoryType.id,
                locations: dto.locations,
                offers: dto.offers,
                isAvailable,
                vendorId: id
            }
        });

        return `Package ${packages.title} created successfully`;
    }
    async getItem(id: string): Promise<ItemResponseDto> {
        const item = await prisma.item.findUnique({
            where: {
                id
            },
            include: {
                categoryType: {
                    select: {
                        name: true
                    }
                },
                reviews: {
                    select: {
                        rating: true
                    }
                }
            }
        })

        if(!item){
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "Item not found"
            )
        }

        const rating = this.calculateAverageRating(item.reviews)
        const reviewCount = item.reviews?.length || 0

        const ItemResponse : ItemResponseDto = {
            id: item.id,
            title: item.title,
            description: item.description,
            category: item.category,
            images: item.images,
            price: item.price,
            bookingType: item.bookingType,
            quantity: item.quantity,
            categoryType: item.categoryType?.name,
            terms: item.terms,
            locations: item.locations,
            isAvailable: item.isAvailable,
            pricingUnit: item.pricingUnit,
            minPrice: item.minPrice,
            experience: item.experience,
            careerHighlight: item.careerHighlight,
            education: item.education,
            offers: item.offers,
            prices: item.prices,
            nextAvailableDate: item.nextAvailableDate,
            createdAt: item.createdAt,
            averageRating: rating,
            reviewCount
        }

        return ItemResponse
    }

    calculateAverageRating(reviews: { rating: number }[]): number | null {
        if (!reviews.length) return 0;
        const sum = reviews.reduce((total, review) => total + review.rating, 0);
        return parseFloat((sum / reviews.length).toFixed(1)); // Rounds to 1 decimal place
    }

    async getItemsList(page: number, pageSize: number, category: Category | null): Promise<IPaginatedItemResponse> {
        if (page < 1) throw new HttpException(StatusCodes.NOT_FOUND, "Page must be greater than 0");
        if (pageSize < 1 || pageSize > 30) throw new HttpException(StatusCodes.NOT_FOUND, "Page size muct be between 1 and 30");

        const skip = (page - 1) * pageSize;

        const items = await prisma.item.findMany({
            skip,
            take: pageSize,
            orderBy: {createdAt : "desc"},
            include: {
                _count: true,
                categoryType: {
                    select: {
                        name: true
                    }
                },
                reviews: {
                    select: {
                    rating: true
                    }
                }
            },
            where: category ? {category} : {}
        })

        const itemsWithRatings = items.map(item => ({
            ...item,
            averageRating: this.calculateAverageRating(item.reviews),
            reviewCount: item.reviews.length
        }));

        return {
            data: plainToInstance(ItemResponseDto, itemsWithRatings),
            meta: {
                total: items.length,
                page,
                pageSize,
                totalPages: Math.ceil(items.length / pageSize)
            }
        };
        
    }


    async getRentalList(page: number, pageSize: number): Promise<IPaginatedItemResponse> {
        if (page < 1) throw new HttpException(StatusCodes.NOT_FOUND, "Page must be greater than 0");
        if (pageSize < 1 || pageSize > 30) throw new HttpException(StatusCodes.NOT_FOUND, "Page size muct be between 1 and 30");

        const skip = (page - 1) * pageSize;

        const items = await prisma.item.findMany({
            skip,
            take: pageSize,
            orderBy: {createdAt : "desc"},
            include: {
                _count: true,
                categoryType: {
                    select: {
                        name: true
                    }
                },
                reviews: {
                    select: {
                    rating: true
                    }
                }
            },
            where: {
                category: "RENTALS"
            }
        })

        const itemsWithRatings = items.map(item => ({
            ...item,
            averageRating: this.calculateAverageRating(item.reviews),
            reviewCount: item.reviews.length
        }));

        return {
            data: plainToInstance(ItemResponseDto, itemsWithRatings),
            meta: {
                total: items.length,
                page,
                pageSize,
                totalPages: Math.ceil(items.length / pageSize)
            }
        };
    }

    async getServiceList(page: number, pageSize: number): Promise<IPaginatedItemResponse> {
        if (page < 1) throw new HttpException(StatusCodes.NOT_FOUND, "Page must be greater than 0");
        if (pageSize < 1 || pageSize > 30) throw new HttpException(StatusCodes.NOT_FOUND, "Page size muct be between 1 and 30");

        const skip = (page - 1) * pageSize;

        const items = await prisma.item.findMany({
            skip,
            take: pageSize,
            orderBy: {createdAt : "desc"},
            include: {
                _count: true,
                categoryType: {
                    select: {
                        name: true
                    }
                },
                reviews: {
                    select: {
                    rating: true
                    }
                }
            },
            where: {
                category: "SERVICES"
            }
        })

        const itemsWithRatings = items.map(item => ({
            ...item,
            averageRating: this.calculateAverageRating(item.reviews),
            reviewCount: item.reviews.length
        }));

        return {
            data: plainToInstance(ItemResponseDto, itemsWithRatings),
            meta: {
                total: items.length,
                page,
                pageSize,
                totalPages: Math.ceil(items.length / pageSize)
            }
        };
    }


    async getPackageList(page: number, pageSize: number): Promise<IPaginatedItemResponse> {
        if (page < 1) throw new HttpException(StatusCodes.NOT_FOUND, "Page must be greater than 0");
        if (pageSize < 1 || pageSize > 30) throw new HttpException(StatusCodes.NOT_FOUND, "Page size muct be between 1 and 30");

        const skip = (page - 1) * pageSize;

        const items = await prisma.item.findMany({
            skip,
            take: pageSize,
            orderBy: {createdAt : "desc"},
            include: {
                _count: true,
                categoryType: {
                    select: {
                        name: true
                    }
                },
                reviews: {
                    select: {
                    rating: true
                    }
                }
            },
            where: {
                category: "PACKAGES"
            }
        })

        const itemsWithRatings = items.map(item => ({
            ...item,
            averageRating: this.calculateAverageRating(item.reviews),
            reviewCount: item.reviews.length
        }));

        return {
            data: plainToInstance(ItemResponseDto, itemsWithRatings),
            meta: {
                total: items.length,
                page,
                pageSize,
                totalPages: Math.ceil(items.length / pageSize)
            }
        };
    }


    async editRentals(id: string, dto: EditRentalsDto): Promise<string> {
        const item = await prisma.item.findUnique({
            where: {
                id
            }
        })

        if(!item){
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "Item not found"
            )
        }

        const categoryType = await prisma.categoryType.findUnique({
            where: {name: dto.categoryType}
        })

        await prisma.item.update({
            where: {id},
            data: {
                title: dto.title,
                category: dto.category,
                description: dto.description,
                price: dto.price,
                bookingType: dto.bookingType,
                categoryId: categoryType?.id,
                terms: dto.terms,
                locations: dto.locations,
                isAvailable: dto.isAvailable,
                pricingUnit: dto.pricingUnit 
            }
        })
        
        return `${dto.title} updated successfully`
    }
    async editService(id: string, dto: EditServicesDto): Promise<string> {
        const item = await prisma.item.findUnique({
            where: {
                id
            }
        })

        if(!item){
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "Item not found"
            )
        }

        const categoryType = await prisma.categoryType.findUnique({
            where: {name: dto.categoryType}
        })

        await prisma.item.update({
            where: {id},
            data: {
                title: dto.title,
                category: dto.category,
                description: dto.description,
                minPrice: dto.minPrice,
                bookingType: dto.bookingType,
                categoryId: categoryType?.id,
                experience: dto.experience,
                careerHighlight: dto.careerHighlight,
                education: dto.education,
                offers: dto.offers,
                prices: dto.prices,
                locations: dto.locations,
                isAvailable: dto.isAvailable,
            }
        })
        
        return `${dto.title} updated successfully`
    }


    async editPackages(id: string, dto: EditPackageDto): Promise<string> {
        const item = await prisma.item.findUnique({
            where: {
                id
            }
        })

        if(!item){
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "Item not found"
            )
        }

        const categoryType = await prisma.categoryType.findUnique({
            where: {name: dto.categoryType}
        })

        await prisma.item.update({
            where: {id},
            data: {
                title: dto.title,
                category: dto.category,
                description: dto.description,
                price: dto.price,
                bookingType: dto.bookingType,
                categoryId: categoryType?.id,
                offers: dto.offers,
                locations: dto.locations,
                isAvailable: dto.isAvailable,
            }
        })
        return `${dto.title} updated successfully`
    }


    async deleteItem(id: string): Promise<string> {
        const item = await prisma.item.findUnique({
            where: {
                id
            }
        })

        if(!item){
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "Item not found"
            )
        }

        await prisma.item.delete({
            where: {id}
        })

        return "item deleted Successfully"
    }

    async changeItemStatus(id: string, status: string): Promise<string> {
        const item = await prisma.item.findUnique({
            where: {
                id
            }
        })

        if(!item){
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "Item not found"
            )
        }

        const update = await prisma.item.update({
            where: {id},
            data: {
                status
            }
        })

        return `${update.title} Status updated to ${status}`
    }

    // WORK ON EDIT ITEM IMAGE

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