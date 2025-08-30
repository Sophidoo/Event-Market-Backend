
import { WishlistResponseDto } from "../dtos/wishlistResponse.dto";

export interface IPaginatedWishlistResponse {
  data: WishlistResponseDto[];
  meta: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}
