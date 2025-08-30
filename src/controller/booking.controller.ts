import { NextFunction, Request, Response } from "express";
import BookingService from "../service/booking.service";
import BookingServiceImpl from "../service/serviceImpl/booking.implementation";
import HttpException from "../utils/exception";
import { StatusCodes } from "http-status-codes";
import { Category } from "../../generated/prisma";


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

    fetchUserBooking = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ) => {
        try{
            if (!req.authUser) {
                throw new HttpException(
                    StatusCodes.UNAUTHORIZED,
                    "Please Login First"
                );
            }

            const {page, pageSize, category} = req.params

            const booking = await this.bookingService.fetchUserBooking(+page, +pageSize, req.authUser.id, category);
            res.status(StatusCodes.OK).json(booking)
        }catch(err){
            next(err);
        }
    }

    fetchVendorBooking = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ) => {
        try{
            if (!req.vendor) {
                throw new HttpException(
                    StatusCodes.UNAUTHORIZED,
                    "Please Login First"
                );
            }

            const {page, pageSize, category} = req.params

            const booking = await this.bookingService.fetchVendorBooking(+page, +pageSize, req.vendor.id, category);
            res.status(StatusCodes.OK).json(booking)
        }catch(err){
            next(err);
        }
    }

    fetchAllBooking = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ) => {
        try{

            const {page, pageSize, category} = req.params

            const booking = await this.bookingService.fetchAllBooking(+page, +pageSize, category);
            res.status(StatusCodes.OK).json(booking)
        }catch(err){
            next(err);
        }
    }

    fetchBookingsGroup = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ) => {
        try{

            if (!req.authUser) {
                throw new HttpException(
                    StatusCodes.UNAUTHORIZED,
                    "Please Login First"
                );
            }

            const {page, pageSize, category} = req.params
            const categoryEnum = category as Category
            const booking = await this.bookingService.fetchBookingsGroup(+page, +pageSize, req.authUser.id, categoryEnum);
            res.status(StatusCodes.OK).json(booking)
        }catch(err){
            next(err);
        }
    }

    
    approveBookingRequest = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ) => {
        try{

            if (!req.vendor) {
                throw new HttpException(
                    StatusCodes.UNAUTHORIZED,
                    "Please Login First"
                );
            }

            const {id} = req.params

            const booking = await this.bookingService.approveRequest(req.vendor.id, id);
            res.status(StatusCodes.OK).json(booking)
        }catch(err){
            next(err);
        }
    }

    
    cancelBookingRequest = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ) => {
        try{

            if (!req.authUser) {
                throw new HttpException(
                    StatusCodes.UNAUTHORIZED,
                    "Please Login First"
                );
            }

            const {id} = req.params

            const booking = await this.bookingService.cancelBooking(req.authUser.id, id);
            res.status(StatusCodes.OK).json(booking)
        }catch(err){
            next(err);
        }
    }
    
    updateBookingStatus = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ) => {
        try{

            if (!req.authUser) {
                throw new HttpException(
                    StatusCodes.UNAUTHORIZED,
                    "Please Login First"
                );
            }

            const {id} = req.params
            const {status} = req.body

            const booking = await this.bookingService.updateStatus(status, id);
            res.status(StatusCodes.OK).json(booking)
        }catch(err){
            next(err);
        }
    }
    
    downloadBookingasCSV = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ) => {
        try{

            if (!req.authUser) {
                throw new HttpException(
                    StatusCodes.UNAUTHORIZED,
                    "Please Login First"
                );
            }

            const booking = await this.bookingService.downloadBooking(req.authUser.id);
            res.status(StatusCodes.OK).json(booking)
        }catch(err){
            next(err);
        }
    }
    
    fetchBookingDetails = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ) => {
        try{

            const {id} = req.params;

            const booking = await this.bookingService.fetchBookingDetails(id);
            res.status(StatusCodes.OK).json(booking)
        }catch(err){
            next(err);
        }
    }

    
}