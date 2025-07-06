import { NextFunction, Request, RequestHandler, Response } from "express";
import UserServiceImpl from "../service/serviceImpl/user.implementation";
import HttpException from "../utils/exception";
import { StatusCodes } from "http-status-codes";
import prisma from "../lib/prisma";

// Extend Express Request type to include authUser
declare global {
  namespace Express {
    interface Request {
      authUser?: {
        id: string;
        // Add other user properties you need
      };
    }
  }
}

const authMiddleware: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // 1. Extract token
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      throw new HttpException(StatusCodes.UNAUTHORIZED, "Missing or invalid authorization header");
    }
    
    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new HttpException(StatusCodes.UNAUTHORIZED, "Authentication token missing");
    }

    // 2. Verify token
    const userService : UserServiceImpl = new UserServiceImpl();
    const payload = userService.verifyJwt(token);
    if (!payload?.id) {
      throw new HttpException(StatusCodes.UNAUTHORIZED, "Invalid token");
    }

    // 3. Fetch user
    const user = await prisma.user.findUnique({
      where: { id: payload.id },
      select: {
        id: true,
        email: true,
        role: true,
      }
    });

    if (!user) {
      throw new HttpException(StatusCodes.UNAUTHORIZED, "User not found");
    }

    req.authUser = user;
    next();

  } catch (error) {
    if (error instanceof Error && error.name === 'JsonWebTokenError') {
      return next(new HttpException(StatusCodes.UNAUTHORIZED, "Invalid token"));
    }
    if (error instanceof Error && error.name === 'TokenExpiredError') {
      return next(new HttpException(StatusCodes.UNAUTHORIZED, "Token expired"));
    }
    next(error);
  }
};

export default authMiddleware;