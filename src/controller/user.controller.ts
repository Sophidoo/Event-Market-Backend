import { NextFunction, Request, Response } from "express";
import UserServiceImpl from "../service/serviceImpl/user.implementation";
import UserService from "../service/user.service";
import { StatusCodes } from "http-status-codes";


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
}