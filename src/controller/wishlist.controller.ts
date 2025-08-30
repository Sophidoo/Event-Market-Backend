import { NextFunction, Request, Response } from "express";
import WishlistService from "../service/wishlist.service";
import WishlistServiceImpl from "../service/serviceImpl/wishlist.implementation";
import HttpException from "../utils/exception";
import { StatusCodes } from "http-status-codes";

export default class WishlistController{
    private wishlistService : WishlistService

    constructor(wishlistService: WishlistService = new WishlistServiceImpl()){
        this.wishlistService = wishlistService;
    }

    addToWishlist = async (
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

            const wishlist = await this.wishlistService.addToWishlist(id, req.authUser.id)
            res.status(StatusCodes.OK).json(wishlist)

        }catch(err) {
            next(err);
        }
    }
    removeFromWishlist = async (
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

            const wishlist = await this.wishlistService.removeFromWishlist(id, req.authUser.id)
            res.status(StatusCodes.OK).json(wishlist)

        }catch(err) {
            next(err);
        }
    }
    fetchWishlist = async (
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
            const {page, pageSize, category} = req.params;

            const wishlist = await this.wishlistService.fetchWishlist(req.authUser.id, +page, +pageSize, category)
            res.status(StatusCodes.OK).json(wishlist)

        }catch(err) {
            next(err);
        }
    }
}