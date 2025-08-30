import { NextFunction, Request, Response } from "express";
import ReviewService from "../service/review.service";
import ReviewServiceImpl from "../service/serviceImpl/review.implementation";
import HttpException from "../utils/exception";
import { StatusCodes } from "http-status-codes";


export default class ReviewController{
    private reviewService : ReviewService
    
    constructor(reviewService: ReviewService = new ReviewServiceImpl()){
        this.reviewService = reviewService
    }

    addReview = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            if (!req.authUser) {
                throw new HttpException(
                    StatusCodes.UNAUTHORIZED,
                    "Please Login First"
                );
            }

            const {id} = req.params;

            const review = await this.reviewService.addReview(req.body, id, req.authUser.id)
            res.status(StatusCodes.OK).json(review)
        }catch(err) {
            next(err);
        }
    }

    deleteReview = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const {id} = req.params;

            const review = await this.reviewService.deleteReview(id)
            res.status(StatusCodes.OK).json(review)
        }catch(err) {
            next(err);
        }
    }

    fetchItemReviews = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const {id, page, pageSize} = req.params;

            const review = await this.reviewService.fetchReviewforProduct(id, +page, +pageSize)
            res.status(StatusCodes.OK).json(review)
        }catch(err) {
            next(err);
        }
    }

    fetchAllReviews = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const {page, pageSize} = req.params;

            const review = await this.reviewService.fetchAllReview(+page, +pageSize)
            res.status(StatusCodes.OK).json(review)
        }catch(err) {
            next(err);
        }
    }

    fetchVendorReviews = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            if (!req.vendor) {
                throw new HttpException(
                    StatusCodes.UNAUTHORIZED,
                    "Please Login First"
                );
            }

            const {page, pageSize} = req.params;

            const review = await this.reviewService.fetchReviewforVendor(req.vendor.id, +page, +pageSize)
            res.status(StatusCodes.OK).json(review)
        }catch(err) {
            next(err);
        }
    }

}