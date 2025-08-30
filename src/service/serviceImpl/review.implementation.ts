import { StatusCodes } from "http-status-codes";
import { CreateReviewDto } from "../../dtos/createReview.dto";
import { IPaginatedReviewResponse } from "../../interface/paginatedreview.interface";
import HttpException from "../../utils/exception";
import ReviewService from "../review.service";
import prisma from "../../lib/prisma";
import { ReviewResponseDto } from "../../dtos/reviewResponse.dto";


export default class ReviewServiceImpl implements ReviewService{
    async addReview(dto: CreateReviewDto, itemId: string, userId: string): Promise<string> {
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

        await prisma.review.create({
            data: {
                comment: dto.comment,
                rating: dto.rating,
                itemId,
                reviewer: userId,
                vendorId: item.vendorId,
            }
        })

        return "Review has been created"

    }
    async deleteReview(reviewId: string): Promise<string> {
        const review = await prisma.review.findUnique({where: {id: reviewId}, include: {item: true}})

        if(!review){
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "Item not found"
            )
        }

        await prisma.review.delete({
            where: {
                id: reviewId
            }
        })

        return `Review for ${review.item?.title} has been deleted`
    }

    async fetchReviewforProduct(itemId: string, page: number, pageSize: number): Promise<IPaginatedReviewResponse> {
         const skip = (page - 1) * pageSize;
         const item = await prisma.item.findUnique({where: {id: itemId}})

        if(!item){
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "Item not found"
            )
        }

        const review = await prisma.review.findMany({
            where: {
                itemId
            },
            skip,
            take: pageSize,
            include: {
                item: true,
                user: true,
                vendor: true
            },
            orderBy: {
                createdAt: "desc"
            }
        })

        const total = await prisma.review.count({where: {itemId}})

        const avgRatingResult = await prisma.review.aggregate({
            where: { itemId },
            _avg: { rating: true },
        });
        const ratingCounts = await prisma.review.groupBy({
            by: ['rating'],
            where: { itemId },
            _count: { rating: true },
        });

        // Initialize star counts
        const starCounts = { star5: 0, star4: 0, star3: 0, star2: 0, star1: 0 };
        ratingCounts.forEach(({ rating, _count }) => {
            if (rating === 5) starCounts.star5 = _count.rating;
            else if (rating === 4) starCounts.star4 = _count.rating;
            else if (rating === 3) starCounts.star3 = _count.rating;
            else if (rating === 2) starCounts.star2 = _count.rating;
            else if (rating === 1) starCounts.star1 = _count.rating;
        });

        const reviewresponse : ReviewResponseDto[] = review.map((el) => ({
            id: el.id,
            comment: el.comment,
            rating: el.rating,
            item: item,
            user: el.user,
            createdAt: el.createdAt
        }))



        return {
            data: reviewresponse,
            meta: {
                total,
                page,
                pageSize,
                totalPages: Math.ceil(total/pageSize)
            },
            stats: {
                avgRating: avgRatingResult._avg.rating || 0,
                totalReview: total,
                ...starCounts
            }
        }
    }

    async fetchReviewforVendor(vendorId: string, page: number, pageSize: number): Promise<IPaginatedReviewResponse> {
         const skip = (page - 1) * pageSize;
        const user = await prisma.vendor.findUnique({where: {id: vendorId}})

        if(!user){
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "User not found"
            )
        }

        const review = await prisma.review.findMany({
            where: {
                vendorId
            },
            skip,
            take: pageSize,
            include: {
                item: true,
                user: true,
                vendor: true
            },
            orderBy: {
                createdAt: "desc"
            }
        })

        const total = await prisma.review.count({where: {vendorId}})

        const avgRatingResult = await prisma.review.aggregate({
            where: { vendorId },
            _avg: { rating: true },
        });
        const ratingCounts = await prisma.review.groupBy({
            by: ['rating'],
            where: { vendorId },
            _count: { rating: true },
        });

        // Initialize star counts
        const starCounts = { star5: 0, star4: 0, star3: 0, star2: 0, star1: 0 };
        ratingCounts.forEach(({ rating, _count }) => {
            if (rating === 5) starCounts.star5 = _count.rating;
            else if (rating === 4) starCounts.star4 = _count.rating;
            else if (rating === 3) starCounts.star3 = _count.rating;
            else if (rating === 2) starCounts.star2 = _count.rating;
            else if (rating === 1) starCounts.star1 = _count.rating;
        });

        const reviewresponse : ReviewResponseDto[] = review.map((el) => ({
            id: el.id,
            comment: el.comment,
            rating: el.rating,
            item: el.item,
            user: el.user,
            createdAt: el.createdAt
        }))

        return {
            data: reviewresponse,
            meta: {
                total,
                page,
                pageSize,
                totalPages: Math.ceil(total/pageSize)
            },
            stats: {
                avgRating: avgRatingResult._avg.rating || 0,
                totalReview: total,
                ...starCounts
            }
        }
    }
    async fetchAllReview(page: number, pageSize: number): Promise<IPaginatedReviewResponse> {
         const skip = (page - 1) * pageSize;
        const review = await prisma.review.findMany({
            skip,
            take: pageSize,
            include: {
                item: true,
                user: true,
                vendor: true
            },
            orderBy: {
                createdAt: "desc"
            }
        })

        const total = await prisma.review.count()

        const avgRatingResult = await prisma.review.aggregate({
            _avg: { rating: true },
        });
        const ratingCounts = await prisma.review.groupBy({
            by: ['rating'],
            _count: { rating: true },
        });

        // Initialize star counts
        const starCounts = { star5: 0, star4: 0, star3: 0, star2: 0, star1: 0 };
        ratingCounts.forEach(({ rating, _count }) => {
            if (rating === 5) starCounts.star5 = _count.rating;
            else if (rating === 4) starCounts.star4 = _count.rating;
            else if (rating === 3) starCounts.star3 = _count.rating;
            else if (rating === 2) starCounts.star2 = _count.rating;
            else if (rating === 1) starCounts.star1 = _count.rating;
        });

        const reviewresponse : ReviewResponseDto[] = review.map((el) => ({
            id: el.id,
            comment: el.comment,
            rating: el.rating,
            item: el.item,
            user: el.user,
            createdAt: el.createdAt
        }))

        return {
            data: reviewresponse,
            meta: {
                total,
                page,
                pageSize,
                totalPages: Math.ceil(total/pageSize)
            },
            stats: {
                avgRating: avgRatingResult._avg.rating || 0,
                totalReview: total,
                ...starCounts
            }
        }
    }

}