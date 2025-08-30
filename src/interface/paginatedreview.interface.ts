import { ReviewResponseDto } from "../dtos/reviewResponse.dto";

export interface IPaginatedReviewResponse {
  data: ReviewResponseDto[];
  meta: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}
