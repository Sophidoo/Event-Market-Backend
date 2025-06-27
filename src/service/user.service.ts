import { CreateUserDto } from "../dtos/createuser.dto";
import { LoginDto } from "../dtos/login.dto";
import { UserResponseDto } from "../dtos/userResponse.dto";
import { IPaginatedUsersResponse } from "../interface/paginatedusers.interface";


export default interface UserService{
    register(dto: CreateUserDto) : Promise<string>
    login(dto: LoginDto) : Promise<{user : UserResponseDto, token : string, message: string}>
    fetchUsers(page: number, pageSize: number) : Promise<IPaginatedUsersResponse>
    getUniqueUser(id: string) : Promise<UserResponseDto>
}