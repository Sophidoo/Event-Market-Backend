import { IsEmail, IsEnum, IsPhoneNumber, IsString, MinLength } from "class-validator";
import { Role } from "../../generated/prisma";


export class EditUserDto{
    @IsString()
    @MinLength(2)
    name: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber() 
    phone: string;

    @IsEnum(Role)
    role: Role;
}

export class EditUserAddressDto{
    @IsString()
    address : string;

    @IsString()
    city : string;

    @IsString()
    state: string;

    @IsString()
    country: string
}

export class EditUserPasswordDto{
    @IsString()
    oldPassword : string;

    @IsString()
    newPassword: string;

    @IsString()
    confirmPassword: string
}