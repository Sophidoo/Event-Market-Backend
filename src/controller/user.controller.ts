import { NextFunction, Request, Response } from "express";
import UserServiceImpl from "../service/serviceImpl/user.implementation";
import UserService from "../service/user.service";
import { StatusCodes } from "http-status-codes";
import HttpException from "../utils/exception";


export default class UserController{
    private userService : UserService
    
    constructor(userService : UserService = new UserServiceImpl()) {
        this.userService = userService;
    }

    fetchUsers = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const {page, pageSize} = req.params;
            const users = await this.userService.fetchUsers(+page, +pageSize);
            res.status(StatusCodes.OK).json(users)
        }catch(err) {
            next(err);
        }
    }

    register = async(
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const createUser = await this.userService.register(req.body);
            res.status(StatusCodes.CREATED).json(createUser);
        }catch(err){
            next(err);
        }
    }

    login = async(
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const loginUser = await this.userService.login(req.body);
            res.status(StatusCodes.OK).json(loginUser)
        }catch(err){
            next(err)
        }
    }

    getUniqueUser = async(
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const {id} = req.params;
            const user = await this.userService.getUniqueUser(id)
            res.status(StatusCodes.OK).json(user)
        }catch(err){
            next(err)
        }
    }

    verifyEmail = async(
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const {token, id} = req.query;
            const user = await this.userService.verifyEmail(token as string, id as string)
            res.status(StatusCodes.OK).json(user)
        }catch(err){
            next(err)
        }
    }

    sendToken = async(
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const {email} = req.params;
            const user = await this.userService.sendToken(email);
            res.status(StatusCodes.OK).json(user)
        }catch(err){
            next(err)
        }
    }

    forgotPassword = async(
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const {email} = req.params;
            const user = await this.userService.forgotPassword(email, req.body);
            res.status(StatusCodes.OK).json(user)
        }catch(err){
            next(err)
        }
    }


    getLoggedInUser = async(
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

            const user = await this.userService.getLoggedInUser(req.authUser);
            res.status(StatusCodes.OK).json(user)
        }catch(err){
            next(err)
        }
    }


    updateUserDetails = async(
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

            const user = await this.userService.updateUserDetails(req.authUser, req.body);
            res.status(StatusCodes.OK).json(user)
        }catch(err){
            next(err)
        }
    }

    updateUserAddress = async(
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

            const user = await this.userService.updateUserAddress(req.authUser, req.body);
            res.status(StatusCodes.OK).json(user)
        }catch(err){
            next(err)
        }
    }


    updateUserPassword = async(
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

            const user = await this.userService.updateUserPassword(req.authUser, req.body);
            res.status(StatusCodes.OK).json(user)
        }catch(err){
            next(err)
        }
    }


    updateProfile = async(
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

            if (!req.file) {
                throw new HttpException(400, "No file uploaded");
            }

            const imageUrl = await this.userService.updateProfile(
                req.authUser.id,
                req.file
            );
            res.status(StatusCodes.OK).json({
                message: "Profile updated Successfully",
                imageUrl
            })
        }catch(err){
            next(err)
        }
    }



}