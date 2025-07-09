import { StatusCodes } from "http-status-codes";
import { BookingType, Category, PricingUnit, Prisma } from "../../../generated/prisma";
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
import fs from "fs";
import { ICSVItem } from "../../interface/csvItem.interface";
import {parse} from "papaparse"


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
                _count: true,
                vendor: true
            }
        })

        if(!item){
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "Item not found"
            )
        }


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
            avgRating: item.avgRating,
            vendor: item.vendor
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
                },
                vendor: true
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


    async getVendorItems(page: number, pageSize: number, category: Category | null, id: string): Promise<IPaginatedItemResponse> {
        if (page < 1) throw new HttpException(StatusCodes.NOT_FOUND, "Page must be greater than 0");
        if (pageSize < 1 || pageSize > 30) throw new HttpException(StatusCodes.NOT_FOUND, "Page size muct be between 1 and 30");

        const vendor = await prisma.vendor.findUnique({
            where: {
                id
            }
        })

        if(!vendor){
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "Please Login, Vendor not found"
            )
        }

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


    async getRentalList(page: number, pageSize: number,categoryType: string, startDate: string, endDate: string, location: string): Promise<IPaginatedItemResponse> {
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
                },
                vendor: true
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

    async getServiceList(page: number, pageSize: number,categoryType: string, startDate: string, endDate: string, location: string): Promise<IPaginatedItemResponse> {
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
                },
                vendor: true
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


    async getPackageList(page: number, pageSize: number,categoryType: string, startDate: string, endDate: string, location: string): Promise<IPaginatedItemResponse> {
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
                },
                vendor: true
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


    async editRentals(id: string, dto: EditRentalsDto, vendorId: string, newImages: Express.Multer.File[]): Promise<string> {
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
        const vendor = await prisma.vendor.findUnique({
            where: {
                id: vendorId
            }
        })

        if(!vendor){
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "Please Login, Vendor not found"
            )
        }

        if (item.vendorId !== vendorId) {
            throw new HttpException(
                StatusCodes.FORBIDDEN,
                "You don't have permission to edit this item"
            );
        }

        if (dto.imagesToDelete.length > 0) {
            await Promise.all(
                dto.imagesToDelete.map(async (imageUrl) => {
                    const publicId = imageUrl.split('/').pop()?.split('.')[0];
                    if (publicId) {
                        await cloudinary.uploader.destroy(publicId);
                    }
                })
            );
        }

        const uploadResults = newImages && await Promise.all(
            newImages.map(file => cloudinary.uploader.upload(file.path))
        );
        const newImageUrls = uploadResults && uploadResults.map(result => result.secure_url);

        await Promise.all(
            newImages.map(file => fs.promises.unlink(file.path))
        );

        const updatedImages = [
            ...item.images.filter(img => !dto.imagesToDelete.includes(img)),
            ...newImageUrls
        ];

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
                pricingUnit: dto.pricingUnit,
                images: updatedImages 
            }
        })
        
        return `${dto.title} updated successfully`
    }
    async editService(id: string, dto: EditServicesDto, vendorId: string, newImages: Express.Multer.File[]): Promise<string> {
        const item = await prisma.item.findUnique({
            where: {
                id
            },
            select: { vendorId: true, images: true }
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

        const vendor = await prisma.vendor.findUnique({
            where: {
                id: vendorId
            }
        })

        if(!vendor){
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "Please Login, Vendor not found"
            )
        }

        if (item.vendorId !== vendorId) {
            throw new HttpException(
                StatusCodes.FORBIDDEN,
                "You don't have permission to edit this item"
            );
        }

        if (dto.imagesToDelete.length > 0) {
            await Promise.all(
                dto.imagesToDelete.map(async (imageUrl) => {
                    const publicId = imageUrl.split('/').pop()?.split('.')[0];
                    if (publicId) {
                        await cloudinary.uploader.destroy(publicId);
                    }
                })
            );
        }

        // 3. Upload new images to Cloudinary
        const uploadResults = newImages && await Promise.all(
            newImages.map(file => cloudinary.uploader.upload(file.path))
        );
        const newImageUrls = uploadResults && uploadResults.map(result => result.secure_url);

        // 4. Clean up temp files
        await Promise.all(
            newImages.map(file => fs.promises.unlink(file.path))
        );

        // 5. Update the item's images array
        const updatedImages = [
            ...item.images.filter(img => !dto.imagesToDelete.includes(img)),
            ...newImageUrls
        ];

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
                images: updatedImages
            }
        })
        
        return `${dto.title} updated successfully`
    }


    async editPackages(id: string, dto: EditPackageDto, vendorId: string, newImages: Express.Multer.File[]): Promise<string> {
        const item = await prisma.item.findUnique({
            where: {
                id
            },
            select: { vendorId: true, images: true }
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

        const vendor = await prisma.vendor.findUnique({
            where: {
                id: vendorId
            }
        })

        if(!vendor){
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "Please Login, Vendor not found"
            )
        }

        if (!item) {
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "Rental item not found"
            );
        }

        if (item.vendorId !== vendorId) {
            throw new HttpException(
                StatusCodes.FORBIDDEN,
                "You don't have permission to edit this item"
            );
        }

        if (dto.imagesToDelete.length > 0) {
            await Promise.all(
                dto.imagesToDelete.map(async (imageUrl) => {
                    const publicId = imageUrl.split('/').pop()?.split('.')[0];
                    if (publicId) {
                        await cloudinary.uploader.destroy(publicId);
                    }
                })
            );
        }

        // 3. Upload new images to Cloudinary
        const uploadResults = newImages && await Promise.all(
            newImages.map(file => cloudinary.uploader.upload(file.path))
        );
        const newImageUrls = uploadResults && uploadResults.map(result => result.secure_url);

        // 4. Clean up temp files
        await Promise.all(
            newImages.map(file => fs.promises.unlink(file.path))
        );

        // 5. Update the item's images array
        const updatedImages = [
            ...item.images.filter(img => !dto.imagesToDelete.includes(img)),
            ...newImageUrls
        ];

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
                images: updatedImages,
                isAvailable: dto.isAvailable,
            }
        })
        return `${dto.title} updated successfully`
    }


    // if (newImages) {
    //             await Promise.all(
    //                 newImages.map(file => fs.promises.unlink(file.path).catch(() => {}))
    //             );
    //         }
    //         throw error;


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
    async getMostBookedRentals(page: number, pageSize: number): Promise<IPaginatedItemResponse> {
        if (page < 1) throw new HttpException(StatusCodes.BAD_REQUEST, "Page must be greater than 0");
        if (pageSize < 1 || pageSize > 100) {
            throw new HttpException(StatusCodes.BAD_REQUEST, "Page size must be between 1 and 100");
        }

        const skip = (page - 1) * pageSize;

        const rentals = await prisma.item.findMany({
            skip,
            take: pageSize,
            where: {
                category: "RENTALS"
            },
            orderBy: {
                bookings: {
                    _count: 'desc'
                }
            },
            include: {
                bookings: {
                    select: {
                        id: true
                    }
                },
                _count: true
            }
        });

        return {
            data: plainToInstance(ItemResponseDto, rentals),
            meta: {
                total: rentals.length,
                page,
                pageSize,
                totalPages: Math.ceil(rentals.length / pageSize)
            }
        };
    }


    async getMostBookedService(page: number, pageSize: number): Promise<IPaginatedItemResponse> {
        if (page < 1) throw new HttpException(StatusCodes.BAD_REQUEST, "Page must be greater than 0");
        if (pageSize < 1 || pageSize > 100) {
            throw new HttpException(StatusCodes.BAD_REQUEST, "Page size must be between 1 and 100");
        }

        const skip = (page - 1) * pageSize;

        const service = await prisma.item.findMany({
            skip,
            take: pageSize,
            where: {
                category: "SERVICES"
            },
            orderBy: {
                bookings: {
                    _count: 'desc'
                }
            },
            include: {
                bookings: {
                    select: {
                        id: true
                    }
                },
                _count: true
            }
        });


        return {
            data: plainToInstance(ItemResponseDto, service),
            meta: {
                total: service.length,
                page,
                pageSize,
                totalPages: Math.ceil(service.length / pageSize)
            }
        };
    }


    async getMostBookedPackages(page: number, pageSize: number): Promise<IPaginatedItemResponse> {
        if (page < 1) throw new HttpException(StatusCodes.BAD_REQUEST, "Page must be greater than 0");
        if (pageSize < 1 || pageSize > 100) {
            throw new HttpException(StatusCodes.BAD_REQUEST, "Page size must be between 1 and 100");
        }

        const skip = (page - 1) * pageSize;

        const packages = await prisma.item.findMany({
            skip,
            take: pageSize,
            where: {
                category: "PACKAGES"
            },
            orderBy: {
                bookings: {
                    _count: 'desc'
                }
            },
            include: {
                bookings: {
                    select: {
                        id: true
                    }
                },
                _count: true
            }
        });


        return {
            data: plainToInstance(ItemResponseDto, packages),
            meta: {
                total: packages.length,
                page,
                pageSize,
                totalPages: Math.ceil(packages.length / pageSize)
            }
        };
    }

    
    async getHighestRatedList(page: number, pageSize: number): Promise<IPaginatedItemResponse> {
        if (page < 1) throw new HttpException(StatusCodes.BAD_REQUEST, "Page must be greater than 0");
        if (pageSize < 1 || pageSize > 100) {
            throw new HttpException(StatusCodes.BAD_REQUEST, "Page size must be between 1 and 100");
        }

        const skip = (page - 1) * pageSize;

        const items = await prisma.item.findMany({
            skip,
            take: pageSize,
            where: {
                reviews: {
                    some: {}
                }
            },
            orderBy: {
                avgRating: 'desc'
            },
            include: {
                reviews: {
                    select: {
                        rating: true
                    }
                },
                _count: true
            }
        });


        return {
            data: plainToInstance(ItemResponseDto, items),
            meta: {
                total: items.length,
                page,
                pageSize,
                totalPages: Math.ceil(items.length / pageSize)
            }
        };
    }

    

    async importItemsFromCSV(filePath: string, vendorId: string): Promise<string> {
        try {
            // Read and parse CSV file
            const csvFile = fs.readFileSync(filePath, 'utf8');
            
            const results = parse<ICSVItem>(csvFile, {
                header: true,
                skipEmptyLines: true,
                transformHeader: header => header.trim().toLowerCase()
            });

            if (results.errors.length > 0) {
                throw new HttpException(
                    StatusCodes.BAD_REQUEST,
                    "Invalid CSV format"
                );
            }

            // Transform and validate CSV data
            const itemsToCreate = results.data.map(item => this.transformCSVItem(item, vendorId));

            // Batch create items
            const createdItems = await prisma.$transaction(
                itemsToCreate.map(item => 
                    prisma.item.create({
                        data: item
                    })
                )
            );

            // Clean up the uploaded file
            fs.unlinkSync(filePath);

            return `Successfully imported ${createdItems.length} items`
        } catch (error) {
            // Clean up file if error occurs
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
            throw error;
        }
    }

    transformCSVItem(csvItem: ICSVItem, userId: string): Prisma.ItemCreateInput {
        console.log(csvItem)
        return {
            title: csvItem.title,
            description: csvItem.description,
            price: csvItem.price ? parseFloat(csvItem.price) : null,
            quantity: csvItem.quantity ? parseInt(csvItem.quantity) : null,
            minPrice: csvItem.minprice ? parseFloat(csvItem.minprice) : null,
            categoryType: {
                connectOrCreate: {
                    where: { name: csvItem.categorytype },
                    create: { name: csvItem.categorytype }
                }
            },
            pricingUnit: csvItem.pricingunit ? (csvItem.pricingunit.toUpperCase() as PricingUnit) : "DAY" ,
            isAvailable: csvItem.isavailable ? (csvItem.isavailable?.toLowerCase() === "true") : true,
            bookingType: csvItem.bookingtype?.toUpperCase() as BookingType,
            status: csvItem.status,
            category: csvItem.category.toUpperCase() as Category,
            terms: csvItem.terms ? this.parseStringArray(csvItem.terms) : [],
            offers: csvItem.offers ? this.parseStringArray(csvItem.offers) : [],
            prices: csvItem.prices ? this.parseStringArray(csvItem.prices) : [],
            images: csvItem.images ? this.parseStringArray(csvItem.images) : [],
            experience: csvItem.prices ? csvItem.experience : "",
            education: csvItem.prices ? csvItem.education : "",
            careerHighlight: csvItem.prices ? csvItem.career : "",
            vendor: { connect: { id: userId } },
        };
    }

    parseStringArray(value: string): string[] {
        return value.split(',').map(item => item.trim()).filter(item => item.length > 0);
    }


    async getCategoryTypes() : Promise<{name: string}[]>{
        const categories = await prisma.categoryType.findMany({
            select: {
                name: true
            }
        })

        return categories
    }
}