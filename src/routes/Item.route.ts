import { Router } from "express";
import { IRoute } from "../interface/route.interface";
import UserController from "../controller/user.controller";
import authMiddleware from "../middleware/auth.middleware";
import { uploadMiddleware } from "../middleware/upload.middleware";
import ItemController from "../controller/item.controller";


export default class ItemRoutes implements IRoute{
    public path: string = "/api/v1/item";
    public router : Router = Router();
    
    private controller : ItemController = new ItemController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
       this.router.post(`${this.path}/create`, authMiddleware, this.controller.createRentals)
    }

}