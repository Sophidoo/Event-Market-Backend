import { Router } from "express";
import { IRoute } from "../interface/route.interface";
import BookingController from "../controller/booking.controller";
import authMiddleware from "../middleware/auth.middleware";
import isVendorMiddleWare from "../middleware/isVendor.middleware";
import isAdminMiddleWare from "../middleware/isAdmin.middleware";



export default class BookingRoutes implements IRoute{
    public path: string = "/api/v1/booking";
    public router: Router = Router();

    private controller : BookingController = new BookingController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.post(`${this.path}/create`, authMiddleware, this.controller.createBooking);
        this.router.get(`${this.path}/details/:id`, authMiddleware, this.controller.fetchBookingDetails);
        this.router.get(`${this.path}/user/:page/:pageSize/:category`, authMiddleware, this.controller.fetchUserBooking)
        this.router.get(`${this.path}/group/:page/:pageSize/:category`, authMiddleware, this.controller.fetchBookingsGroup)
        this.router.get(`${this.path}/vendor/:page/:pageSize/:category`, authMiddleware, isVendorMiddleWare, this.controller.fetchVendorBooking)
        this.router.get(`${this.path}/admin/:page/:pageSize/:category`, authMiddleware, isAdminMiddleWare, this.controller.fetchAllBooking)
        this.router.patch(`${this.path}/approve/:id`, authMiddleware, isVendorMiddleWare, this.controller.approveBookingRequest)
        this.router.patch(`${this.path}/cancel/:id`, authMiddleware, this.controller.cancelBookingRequest)
        this.router.patch(`${this.path}/update/:id`, authMiddleware, this.controller.updateBookingStatus)
        this.router.get(`${this.path}/download`, authMiddleware, isAdminMiddleWare, this.controller.downloadBookingasCSV)
    }
}