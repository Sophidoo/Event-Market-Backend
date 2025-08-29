import { NextFunction, Request, Response } from "express";
import TransactionServiceImpl from "../service/serviceImpl/transaction.implementation";
import TransactionService from "../service/transaction.service";
import HttpException from "../utils/exception";
import { StatusCodes } from "http-status-codes";
import prisma from "../lib/prisma";
import crypto from "crypto";
import { ref } from "process";



export default class TransactionController{
    private transactionService : TransactionService

    constructor(transactionService: TransactionService = new TransactionServiceImpl()){
        this.transactionService = transactionService;
    }

    verifyTransaction = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            if(!req.authUser){
                throw new HttpException(
                    StatusCodes.UNAUTHORIZED,
                    "Please Login first"
                )
            }

            const reference = req.query.reference as string;
            console.log(reference)

            const tnx = await this.transactionService.createTransaction(reference)
            

            res.status(StatusCodes.OK).json(tnx);
            
        }catch(err){
            next(err)
        }
    }



    fetchUserTransaction = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            if (!req.authUser) {
                throw new HttpException(
                    StatusCodes.UNAUTHORIZED,
                    "Please Login First"
                );
            }
            const {page, pageSize} = req.params

            const tnx = await this.transactionService.fetchUserTransactions(+page, +pageSize, req.authUser.id)
            res.status(StatusCodes.OK).json(tnx)
        }catch(err){
            next(err)
        }
    }


    fetchAllTransaction = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const {page, pageSize} = req.params

            const tnx = await this.transactionService.fetchAllTransactions(+page, +pageSize)
            res.status(StatusCodes.OK).json(tnx)
        }catch(err){
            next(err)
        }
    }

    downloadTransaction = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            if (!req.authUser) {
                throw new HttpException(
                    StatusCodes.UNAUTHORIZED,
                    "Please Login First"
                );
            }
            const tnx = await this.transactionService.downloadTransaction(req.authUser.id)
            res.status(StatusCodes.OK).json(tnx)
        }catch(err){
            next(err)
        }
    }

}