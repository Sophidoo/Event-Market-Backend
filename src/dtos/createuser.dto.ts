import { IsString, MinLength, IsEmail, IsPhoneNumber, IsEnum } from "class-validator";
import {Role} from "../../generated/prisma"

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber() 
  phone: string;

  @IsString()
  @MinLength(4)
  password: string;

  @IsString()
  @MinLength(4)
  confirmPassword: string;

  @IsEnum(Role)
  role: Role; 
}