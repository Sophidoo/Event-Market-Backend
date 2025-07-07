import { NextFunction, Request, Response } from "express";
import ItemService from "../service/item.service";
import ItemServiceImpl from "../service/serviceImpl/item.implementation";
import HttpException from "../utils/exception";
import { StatusCodes } from "http-status-codes";
import { Category } from "../../generated/prisma";


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
        if (!req.vendor) {
            throw new HttpException(
                StatusCodes.UNAUTHORIZED,
                "Please Login First"
            );
        }
        try{
            const files = req.files as  Express.Multer.File[]
            
            const rentals = await this.itemService.createRentals(req.body, files, req.vendor.id)
            res.status(StatusCodes.OK).json(rentals)
        }catch(err){
            next(err);
        }
    }
    

    createService = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        if (!req.vendor) {
            throw new HttpException(
                StatusCodes.UNAUTHORIZED,
                "Please Login First"
            );
        }
        try{
            const files = req.files as  Express.Multer.File[]
            
            const services = await this.itemService.createServices(req.body, files, req.vendor.id)
            res.status(StatusCodes.OK).json(services)
        }catch(err){
            next(err);
        }
    }
    

    createPackage = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        if (!req.vendor) {
            throw new HttpException(
                StatusCodes.UNAUTHORIZED,
                "Please Login First"
            );
        }
        try{
            const files = req.files as  Express.Multer.File[]
            
            const packages = await this.itemService.createPackages(req.body, files, req.vendor.id)
            res.status(StatusCodes.OK).json(packages)
        }catch(err){
            next(err);
        }
    }

    getItem = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const {id} = req.params
            const item = await this.itemService.getItem(id)
            res.status(StatusCodes.OK).json(item)
        }catch(err){
            next(err);
        }
    }

    getItemList = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const {page, pageSize} = req.params
            const {category} = req.query
            const categoryEnum = category as Category | null;
            const item = await this.itemService.getItemsList(+page, +pageSize, categoryEnum)
            res.status(StatusCodes.OK).json(item)
        }catch(err){
            next(err);
        }
    }
    

    getRentalList = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const {page, pageSize} = req.params
            const item = await this.itemService.getRentalList(+page, +pageSize)
            res.status(StatusCodes.OK).json(item)
        }catch(err){
            next(err);
        }
    }
    

    getServiceList = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const {page, pageSize} = req.params
            const item = await this.itemService.getServiceList(+page, +pageSize)
            res.status(StatusCodes.OK).json(item)
        }catch(err){
            next(err);
        }
    }

    getPackageList = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const {page, pageSize} = req.params
            const item = await this.itemService.getPackageList(+page, +pageSize)
            res.status(StatusCodes.OK).json(item)
        }catch(err){
            next(err);
        }
    }
    

    editRentals = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const {id} = req.params
            const item = await this.itemService.editRentals(id, req.body)
            res.status(StatusCodes.OK).json(item)
        }catch(err){
            next(err);
        }
    }

    editService = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const {id} = req.params
            const item = await this.itemService.editService(id, req.body)
            res.status(StatusCodes.OK).json(item)
        }catch(err){
            next(err);
        }
    }

    editPackage = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const {id} = req.params
            const item = await this.itemService.editPackages(id, req.body)
            res.status(StatusCodes.OK).json(item)
        }catch(err){
            next(err);
        }
    }

    deleteItem = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const {id} = req.params
            const item = await this.itemService.deleteItem(id)
            res.status(StatusCodes.OK).json(item)
        }catch(err){
            next(err);
        }
    }

    changeItemStatus = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const {id} = req.params
            const item = await this.itemService.changeItemStatus(id, req.body)
            res.status(StatusCodes.OK).json(item)
        }catch(err){
            next(err);
        }
    }

    
}