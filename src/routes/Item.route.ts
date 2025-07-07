import { Router } from "express";
import { IRoute } from "../interface/route.interface";
import authMiddleware from "../middleware/auth.middleware";
import ItemController from "../controller/item.controller";
import isVendorMiddleWare from "../middleware/isVendor.middleware";
import { multipleUploadMiddleware } from "../middleware/uploadMultiple.middleware";


export default class ItemRoutes implements IRoute{
    public path: string = "/api/v1/item";
    public router : Router = Router();
    
    private controller : ItemController = new ItemController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
       this.router.post(`${this.path}/create-rental`, authMiddleware, isVendorMiddleWare, multipleUploadMiddleware, this.controller.createRentals);
       this.router.post(`${this.path}/create-service`, authMiddleware, isVendorMiddleWare, multipleUploadMiddleware,  this.controller.createService);
       this.router.post(`${this.path}/create-package`, authMiddleware, isVendorMiddleWare, multipleUploadMiddleware, this.controller.createPackage);
       this.router.get(`${this.path}/:id`, this.controller.getItem);
       this.router.get(`${this.path}/:page/:pageSize`, this.controller.getItemList);
       this.router.get(`${this.path}/rentals/:page/:pageSize`, this.controller.getRentalList);
       this.router.get(`${this.path}/services/:page/:pageSize`, this.controller.getServiceList);
       this.router.get(`${this.path}/packages/:page/:pageSize`, this.controller.getPackageList);
       this.router.patch(`${this.path}/edit-rentals/:id`, authMiddleware, isVendorMiddleWare, this.controller.editRentals);
       this.router.patch(`${this.path}/edit-services/:id`, authMiddleware, isVendorMiddleWare, this.controller.editService);
       this.router.patch(`${this.path}/edit-packages/:id`, authMiddleware, isVendorMiddleWare, this.controller.editPackage);
       this.router.delete(`${this.path}/:id`, authMiddleware, isVendorMiddleWare, this.controller.deleteItem);
       this.router.get(`${this.path}/status/:id`, authMiddleware, isVendorMiddleWare, this.controller.changeItemStatus);
       
    }

}