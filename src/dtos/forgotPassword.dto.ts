import { IsEmail, IsString, MinLength } from "class-validator"


export class ForgotPasswordDto{

    @IsString()
    @MinLength(4)
    password : string

    @IsString()
    @MinLength(4)
    confirmPassword : string

    @IsString()
    otp: string

}