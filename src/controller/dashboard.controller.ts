import DashboardService from "../service/dashboard.service";
import DashboardServiceImpl from "../service/serviceImpl/dashboard.implementation";
import { NextFunction, Request, Response } from "express";
import HttpException from "../utils/exception";
import { StatusCodes } from "http-status-codes";


export default class DashboardController{
    private dashboardService : DashboardService

    constructor(dashboardService : DashboardService = new DashboardServiceImpl()){
        this.dashboardService = dashboardService;
    }

    fetchStats = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        if(!req.authUser){
            throw new HttpException(
                StatusCodes.UNAUTHORIZED,
                "Please Login First"
            )
        }

        try{
            const dashboard = await this.dashboardService.fetchDashboardStats(req.authUser.id)
            res.status(StatusCodes.OK).json(dashboard)
        }catch(err){
            next(err)
        }
    }

    fetchAdminStats = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        if(!req.authUser){
            throw new HttpException(
                StatusCodes.UNAUTHORIZED,
                "Please Login First"
            )
        }

        try{
            const dashboard = await this.dashboardService.fetchAdminDashboardStats()
            res.status(StatusCodes.OK).json(dashboard)
        }catch(err){
            next(err)
        }
    }
}