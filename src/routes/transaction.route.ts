import { Router } from "express";
import { IRoute } from "../interface/route.interface";
import TransactionController from "../controller/transaction.controller";
import authMiddleware from "../middleware/auth.middleware";
import isAdminMiddleWare from "../middleware/isAdmin.middleware";



export default class TransactionRoutes implements IRoute{
    public path: string = "/api/v1/transaction";
    public router: Router = Router();

    private controller : TransactionController = new TransactionController();

    constructor(){
        this.initializeRoutes()
    }

    private initializeRoutes(){
        this.router.post(`${this.path}/webhook`, this.controller.createTransaction)
        this.router.get(`${this.path}/user/:page/:pageSize`, authMiddleware, this.controller.fetchUserTransaction)
        this.router.get(`${this.path}/admin/:page/:pageSize`, authMiddleware, isAdminMiddleWare, this.controller.fetchAllTransaction)
        this.router.get(`${this.path}/download`, authMiddleware, this.controller.downloadTransaction)
    }
    
}