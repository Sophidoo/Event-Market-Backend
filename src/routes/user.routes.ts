import { Router } from "express";
import { IRoute } from "../interface/route.interface";
import UserController from "../controller/user.controller";


export default class UserRoutes implements IRoute{
    public path: string = "/api/v1/auth";
    public router : Router = Router();
    
    private controller : UserController = new UserController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get(`${this.path}/:page/:pageSize`, this.controller.fetchUsers)
        this.router.post(`${this.path}`, this.controller.register)
        this.router.post(`${this.path}`, this.controller.login)
        this.router.get(`${this.path}/:id`, this.controller.getUniqueUser)
    }

}