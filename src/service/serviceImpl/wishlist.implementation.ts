import { StatusCodes } from "http-status-codes";
import prisma from "../../lib/prisma";
import HttpException from "../../utils/exception";
import WishlistService from "../wishlist.service";
import { WishlistResponseDto } from "../../dtos/wishlistResponse.dto";
import { IPaginatedWishlistResponse } from "../../interface/paginatedwishlist.interface";
import { Category } from "../../../generated/prisma";


export default class WishlistServiceImpl implements WishlistService{
    async addToWishlist(itemId: string, userId: string): Promise<string> {
        const user = await prisma.user.findUnique({where: {id: userId}})

        if(!user){
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "User not found"
            )
        }

        const item = await prisma.item.findUnique({where: {id: itemId}})

        if(!item){
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "Item not found"
            )
        }

        const itemExists = await prisma.savedItem.findFirst({
            where: {
                AND: {
                    userId : userId,
                    itemId: itemId
                }
            }
        })

        if(itemExists){
            throw new HttpException(
                StatusCodes.CONFLICT,
                "Item already saved to wishlist"
            )
        }

        await prisma.savedItem.create({
            data: {
                userId,
                itemId
            }
        })

        return `${item.title} have been added to your wishlist successfully`
    }


    async removeFromWishlist(itemId: string, userId: string): Promise<string> {
        const user = await prisma.user.findUnique({where: {id: userId}})

        if(!user){
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "User not found"
            )
        }

        const item = await prisma.item.findUnique({where: {id: itemId}})

        if(!item){
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "Item not found"
            )
        }

        const itemExists = await prisma.savedItem.findFirst({
            where: {
                AND: {
                    userId : userId,
                    itemId: itemId
                }
            }
        })

        if(!itemExists){
            throw new HttpException(
                StatusCodes.BAD_REQUEST,
                "Item does noe exist in wishlist"
            )
        }

        await prisma.savedItem.delete({
            where: {
                id: itemExists.id
            }
        })

        return `${item.title} have been removed from your wishlist successfully`
    }


    async fetchWishlist(userId: string, page: number, pageSize: number, category: Category): Promise<IPaginatedWishlistResponse> {
        const skip = (page - 1) * pageSize;
        const user = await prisma.user.findUnique({where: {id: userId}})

        if(!user){
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "User not found"
            )
        }

        const wishlist = await prisma.savedItem.findMany({
            where: {
                userId,
                item: {
                    category
                },
                
            },
            skip,
            take: pageSize,
            include: {
                user: true,
                item: {
                    include: {
                        vendor: true
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            }
            
        })

        const total = await prisma.savedItem.count({where: {userId}})

        const wishlistResponse : WishlistResponseDto[] = 
        wishlist.map((el) => ({
            id: el.id,
            item: el.item,
            user: el.user,
            createdAt: el.createdAt
        }))

        return {
            data: wishlistResponse,
            meta: {
                total,
                page,
                pageSize,
                totalPages: Math.ceil(total/pageSize)
            }
        }
    }
    
}