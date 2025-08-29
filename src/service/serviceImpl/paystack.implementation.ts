import { StatusCodes } from "http-status-codes";
import axios from "axios";
import HttpException from "../../utils/exception";
import PaystackService from "../paystack.service";
import { PaystackPaymentDto } from "../../dtos/paystackPayment.dto";
import prisma from "../../lib/prisma";
import ValidateDto from "../../utils/ValidateDto";

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

export default class PaystackServiceImpl implements PaystackService {
  async payWithPaystack(dto: PaystackPaymentDto): Promise<string> {
    await ValidateDto(PaystackPaymentDto, dto);

    try {
      const response = await axios.post(
        "https://api.paystack.co/transaction/initialize",
        {
          email: dto.email,
          amount: Math.round(dto.amount * 100), // Paystack expects amount in kobo
          metadata: {
            bookingId: dto.bookingId,
            type: dto.type,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response)
      return response.data;
    } catch (error) {
        console.log(error)
      throw new HttpException(
        StatusCodes.INTERNAL_SERVER_ERROR,
        "Paystack payment initialization failed"
      );
    }
  }

  async retryPayment(paymentId: string): Promise<string> {
    // Fetch payment details and re-initialize
    const payment = await prisma.payment.findUnique({ where: { id: paymentId } });
    if (!payment) {
      throw new HttpException(StatusCodes.NOT_FOUND, "Payment not found");
    }

    // Re-initialize payment with same amount and metadata
    const dto = {
      amount: payment.paidAmount,
      email: "user@email.com", // Fetch from user
      bookingId: payment.bookingId,
      type: "retry",
    };

    return "oading";
  }
}