import { ItemResponseDto } from "../dtos/ItemResponse.dto";

export interface IPaginatedItemResponse {
  data: ItemResponseDto[];
  meta: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}
