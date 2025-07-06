import { Router } from "express";
import { IRoute } from "../interface/route.interface";
import UserController from "../controller/user.controller";
import authMiddleware from "../middleware/auth.middleware";
import { uploadMiddleware } from "../middleware/upload.middleware";


export default class UserRoutes implements IRoute{
    public path: string = "/api/v1/auth";
    public router : Router = Router();
    
    private controller : UserController = new UserController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get(`${this.path}/users/:page/:pageSize`, authMiddleware, this.controller.fetchUsers)
        this.router.post(`${this.path}/register`, this.controller.register)
        this.router.post(`${this.path}/login`, this.controller.login)
        this.router.get(`${this.path}/get-user/:id`, this.controller.getUniqueUser)
        this.router.get(`${this.path}/verify-email/:token/:email`, this.controller.verifyEmail)
        this.router.get(`${this.path}/token/:email`, this.controller.sendToken)
        this.router.post(`${this.path}/forgot-password/:email`, this.controller.forgotPassword)
        this.router.patch(`${this.path}/user`, authMiddleware, this.controller.updateUserDetails)
        this.router.patch(`${this.path}/address`, authMiddleware, this.controller.updateUserAddress)
        this.router.patch(`${this.path}/reset-password`, authMiddleware, this.controller.updateUserPassword)
        this.router.patch(`${this.path}/upload`, authMiddleware, uploadMiddleware, this.controller.updateProfile)
        this.router.get(`${this.path}/logged-user`, authMiddleware, this.controller.getLoggedInUser)
    }

}