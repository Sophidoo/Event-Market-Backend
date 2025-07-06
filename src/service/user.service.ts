import { CreateUserDto } from "../dtos/createuser.dto";
import { EditUserAddressDto, EditUserDto, EditUserPasswordDto } from "../dtos/editUser.dto";
import { ForgotPasswordDto } from "../dtos/forgotPassword.dto";
import { LoginDto } from "../dtos/login.dto";
import { UserResponseDto } from "../dtos/userResponse.dto";
import { VendorResponseDto } from "../dtos/vendorResponse.dto";
import { IPaginatedUsersResponse } from "../interface/paginatedusers.interface";


export default interface UserService{
    register(dto: CreateUserDto) : Promise<string>
    verifyEmail(token : string, id: string) : Promise<string>
    sendToken(email: string) : Promise<string>
    forgotPassword(email:string, dto: ForgotPasswordDto) : Promise<string>
    login(dto: LoginDto) : Promise<{user : UserResponseDto, token : string, message: string}>
    fetchUsers(page: number, pageSize: number) : Promise<IPaginatedUsersResponse>
    getUniqueUser(id: string) : Promise<UserResponseDto>
    getLoggedInUser(authUser: { id: string }) : Promise<UserResponseDto | VendorResponseDto>
    updateUserDetails(authUser: { id: string }, dto: EditUserDto) : Promise<string>
    updateUserAddress(authUser: { id: string }, dto: EditUserAddressDto) : Promise<string>
    updateUserPassword(authUser: { id: string }, dto: EditUserPasswordDto) : Promise<string>
    updateProfile(userId: string, file: Express.Multer.File) : Promise<string>
}