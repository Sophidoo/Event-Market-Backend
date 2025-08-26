import { Router } from "express";
import { IRoute } from "../interface/route.interface";
import BookingController from "../controller/booking.controller";
import authMiddleware from "../middleware/auth.middleware";



export default class BookingRoutes implements IRoute{
    public path: string = "/api/v1/booking";
    public router: Router = Router();

    private controller : BookingController = new BookingController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.post(`${this.path}/create`, authMiddleware, this.controller.createBooking)
    }
}