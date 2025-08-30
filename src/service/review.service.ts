import { CreateReviewDto } from "../dtos/createReview.dto";
import { IPaginatedReviewResponse } from "../interface/paginatedreview.interface";


export default interface ReviewService{
    addReview(dto: CreateReviewDto, itemId: string, userId: string) : Promise<string>
    deleteReview(reviewId: string) : Promise<string>
    fetchReviewforProduct(itemId: string, page: number, pageSize: number) : Promise<IPaginatedReviewResponse>
    fetchReviewforVendor(vendorId: string, page: number, pageSize: number) : Promise<IPaginatedReviewResponse>
    fetchAllReview(page: number, pageSize: number) : Promise<IPaginatedReviewResponse>

}