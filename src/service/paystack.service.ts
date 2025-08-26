import { PaystackPaymentDto } from "../dtos/paystackPayment.dto"


export default interface PaystackService{
    payWithPaystack(dto: PaystackPaymentDto) : Promise<string>
    retryPayment(paymentId: string) : Promise<string>
}