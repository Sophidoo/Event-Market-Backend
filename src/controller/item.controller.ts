import { NextFunction, Request, Response } from "express";
import ItemService from "../service/item.service";
import ItemServiceImpl from "../service/serviceImpl/item.implementation";
import HttpException from "../utils/exception";
import { StatusCodes } from "http-status-codes";


export default class ItemController{
    private itemService : ItemService

    constructor(itemService : ItemService = new ItemServiceImpl()) {
        this.itemService = itemService;
    }

    createRentals = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        if (!req.authUser) {
            throw new HttpException(
                StatusCodes.UNAUTHORIZED,
                "Please Login First"
            );
        }
        try{
            const files = req.files as  Express.Multer.File[]
            
            const rentals = await this.itemService.createRentals(req.body, files, req.authUser.id)
            res.status(StatusCodes.OK).json(rentals)
        }catch(err){
            next(err);
        }
    }
    
}