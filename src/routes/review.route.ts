import { Router } from "express";
import { IRoute } from "../interface/route.interface";
import ReviewController from "../controller/review.controller";
import authMiddleware from "../middleware/auth.middleware";
import isAdminMiddleWare from "../middleware/isAdmin.middleware";
import isVendorMiddleWare from "../middleware/isVendor.middleware";


export default class ReviewRoute implements IRoute{
    public path: string = "/api/v1/review";
    public router : Router = Router();

    private controller : ReviewController = new ReviewController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.post(`${this.path}/create/:id`, authMiddleware, this.controller.addReview)
        this.router.delete(`${this.path}/delete/:id`, authMiddleware,isAdminMiddleWare, this.controller.deleteReview)
        this.router.get(`${this.path}/item/:id/:page/:pageSize`, authMiddleware, this.controller.fetchItemReviews)
        this.router.get(`${this.path}/all/:page/:pageSize`, authMiddleware, isAdminMiddleWare, this.controller.fetchAllReviews)
        this.router.get(`${this.path}/vendor/:page/:pageSize`, authMiddleware, isVendorMiddleWare, this.controller.fetchVendorReviews)
    }
}