import { NextFunction, Request, Response } from "express";
import TransactionServiceImpl from "../service/serviceImpl/transaction.implementation";
import TransactionService from "../service/transaction.service";
import HttpException from "../utils/exception";
import { StatusCodes } from "http-status-codes";
import prisma from "../lib/prisma";
import crypto from "crypto";



export default class TransactionController{
    private transactionService : TransactionService

    constructor(transactionService: TransactionService = new TransactionServiceImpl()){
        this.transactionService = transactionService;
    }

    createTransaction = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try{
            const payload = req.body;
            const signature = req.headers["x-paystack-signature"] as string;

            if (!signature) {
                throw new HttpException(StatusCodes.BAD_REQUEST, "Missing Paystack signature");
            }

            // Verify webhook signature
            const secret = process.env.PAYSTACK_SECRET_KEY;
            if(!secret){
                throw new HttpException(
                    StatusCodes.BAD_REQUEST,
                    "Secret not provided"
                )
            }
            const hash = crypto
                .createHmac("sha512", secret)
                .update(JSON.stringify(payload))
                .digest("hex");

            if (hash !== signature) {
                throw new HttpException(StatusCodes.UNAUTHORIZED, "Invalid Paystack signature");
            }

            console.log(payload)

            if (payload.event === "charge.success") {
                const { data } = payload;
                const { reference, amount, status, paid_at, metadata } = data;

                // Create transaction
                await this.transactionService.createTransaction({
                paymentId: `${reference}`,
                amount: amount / 100, // Convert from kobo to naira
                status: status === "success" ? "COMPLETED" : "FAILED",
                debit: 4000,
                credit: 44444445,
                reason: "Payment for booking",
                userId: "user_12345", // Fetch from metadata or auth (implement auth middleware if needed)
                bookingId: metadata.bookingId,
                });

                // Update booking payment status (optional, depending on your flow)
                await prisma.booking.update({
                where: { id: metadata.bookingId },
                data: { paymentStatus: "COMPLETED" },
                });

                res.status(StatusCodes.OK).json({ message: "Webhook processed successfully" });
            }
        }catch(err){
            next(err)
        }
    }
}