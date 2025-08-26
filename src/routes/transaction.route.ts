import { Router } from "express";
import { IRoute } from "../interface/route.interface";
import TransactionController from "../controller/transaction.controller";



export default class TransactionRoutes implements IRoute{
    public path: string = "/api/v1/transaction";
    public router: Router = Router();

    private controller : TransactionController = new TransactionController();

    constructor(){
        
    }

    private initializeRoutes(){
        this.router.post(`${this.path}/webhook`, this.controller.createTransaction)
    }
    
}