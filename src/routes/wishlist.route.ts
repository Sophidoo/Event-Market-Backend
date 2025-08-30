import { Router } from "express";
import { IRoute } from "../interface/route.interface";
import WishlistController from "../controller/wishlist.controller";
import authMiddleware from "../middleware/auth.middleware";


export default class WishlistRoutes implements IRoute{
    public path: string = "/api/v1/wishlist";
    public router: Router = Router();

    private controller : WishlistController = new WishlistController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.post(`${this.path}/add/:id`, authMiddleware, this.controller.addToWishlist)
        this.router.delete(`${this.path}/remove/:id`, authMiddleware, this.controller.removeFromWishlist)
        this.router.get(`${this.path}/fetch/:page/:pageSize/:category`, authMiddleware, this.controller.fetchWishlist)
    }
}