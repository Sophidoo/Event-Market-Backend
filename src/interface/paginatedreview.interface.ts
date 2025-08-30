import { ReviewResponseDto } from "../dtos/reviewResponse.dto";

export interface IPaginatedReviewResponse {
  data: ReviewResponseDto[];
  meta: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
  stats: {
    avgRating: number,
    totalReview: number,
    star5: number,
    star4: number,
    star3: number,
    star2: number,
    star1: number,
  }
}
