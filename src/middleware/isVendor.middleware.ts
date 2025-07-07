import { NextFunction, Request, RequestHandler, Response } from "express";
import HttpException from "../utils/exception";
import { StatusCodes } from "http-status-codes";
import prisma from "../lib/prisma";


const isVendorMiddleWare: RequestHandler = async (
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
            role: true,
            vendorProfile: {
                select: {
                    id: true,
                    verified: true
                }
            }
        }
    })

    if(!user){
        throw new HttpException(
            StatusCodes.NOT_FOUND,
            "User not found"
        )
    }

    if(user.role !== "VENDOR" || !user.vendorProfile){
        throw new HttpException(
            StatusCodes.FORBIDDEN,
            "Vendor account required"
        )
    }

    if(user.vendorProfile && user.vendorProfile.verified){
        throw new HttpException(
            StatusCodes.FORBIDDEN,
            "Vendor account not verified"
        )
    }

    req.vendor = {
        id: user.vendorProfile.id,
        userId: req.authUser.id,
        isVerified: user.vendorProfile.verified
    }

    next();

  } catch (error) {
    next(error);
  }
};

declare global{
    namespace Express{
        interface Request {
            vendor?: {
                id: string;
                userId: string;
                isVerified: boolean;
            }
        }
    }
}

export default isVendorMiddleWare;