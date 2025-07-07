import { NextFunction, Request, RequestHandler, Response } from "express";
import HttpException from "../utils/exception";
import { StatusCodes } from "http-status-codes";
import prisma from "../lib/prisma";


const isAdminMiddleWare: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // 1. Extract token
    if(!req.authUser){
        throw new HttpException(
            StatusCodes.UNAUTHORIZED,
            "Authentication required"
        )
    }

    const user = await prisma.user.findUnique({
        where : {id: req.authUser.id},
        select: {
            role: true
        }
    })

    if(!user){
        throw new HttpException(
            StatusCodes.NOT_FOUND,
            "User not found"
        )
    }

    if(user.role !== "ADMIN"){
        throw new HttpException(
            StatusCodes.FORBIDDEN,
            "Unauthorized"
        )
    }


    next();

  } catch (error) {
    next(error);
  }
};


export default isAdminMiddleWare;