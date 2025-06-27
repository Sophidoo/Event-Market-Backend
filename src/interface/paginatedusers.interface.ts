import { UserResponseDto } from "../dtos/userResponse.dto";

export interface IPaginatedUsersResponse {
  data: UserResponseDto[];
  meta: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}
