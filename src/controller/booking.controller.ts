import { NextFunction, Request, Response } from "express";
import BookingService from "../service/booking.service";
import BookingServiceImpl from "../service/serviceImpl/booking.implementation";
import HttpException from "../utils/exception";
import { StatusCodes } from "http-status-codes";


export default class BookingController{
    private bookingService : BookingService

    constructor(bookingService: BookingService = new BookingServiceImpl()){
        this.bookingService = bookingService;
    }

    createBooking = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        if(!req.authUser){
            throw new HttpException(
                StatusCodes.UNAUTHORIZED,
                "Please Login First"
            )
        }

        try{
            const booking = await this.bookingService.createBooking(req.body, req.authUser.id)
            res.status(StatusCodes.OK).json(booking)
        }catch(err){
            next(err)
        }
    }
}