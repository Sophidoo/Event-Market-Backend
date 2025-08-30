import { Router } from "express";
import { IRoute } from "../interface/route.interface";
import DashboardController from "../controller/dashboard.controller";
import authMiddleware from "../middleware/auth.middleware";
import isAdminMiddleWare from "../middleware/isAdmin.middleware";
import isVendorMiddleWare from "../middleware/isVendor.middleware";


export default class DashboardRoutes implements IRoute{
    public path: string = "/api/v1/dashboard";
    public router : Router = Router();

    private controller : DashboardController = new DashboardController();

    constructor(){
        this.initializeRoutes()
    }

    private initializeRoutes(){
        this.router.get(`${this.path}/vendor`, authMiddleware, isVendorMiddleWare, this.controller.fetchStats);
        this.router.get(`${this.path}/admin`, authMiddleware, isAdminMiddleWare, this.controller.fetchAdminStats);
    }
}