import { plainToInstance } from "class-transformer";
import { CreateUserDto } from "../../dtos/createuser.dto";
import { LoginDto } from "../../dtos/login.dto";
import { UserResponseDto } from "../../dtos/userResponse.dto";
import { IPaginatedUsersResponse } from "../../interface/paginatedusers.interface";
import jwt from "jsonwebtoken"
import prisma from "../../lib/prisma";
import UserService from "../user.service";
import HttpException from "../../utils/exception";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { sendEmail } from "../../utils/email"
import { ForgotPasswordDto } from "../../dtos/forgotPassword.dto";
import { VendorResponseDto } from "../../dtos/vendorResponse.dto";
import { EditUserAddressDto, EditUserDto, EditUserPasswordDto } from "../../dtos/editUser.dto";

import cloudinary from "../../config/cloudinary.config";
import fs from 'fs';
import path from 'path';
import { validate } from "class-validator";
import { formatValidationErrors } from "../../utils/FormatValiation";
import { logger } from "../../config/logger.config";
import ValidateDto from "../../utils/ValidateDto";



export default class UserServiceImpl implements UserService{
    async comparePassword (password : string, hashedPassword : string) : Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword)
    }

    signJwt(id : string){
        return jwt.sign(
            { id },
            process.env.JWT_SECRET_KEY as string, 
            { expiresIn: "7d", algorithm: "HS256"}
        );
    }

    verifyJwt(token : string){
        return jwt.verify(token, process.env.JWT_SECRET_KEY as string) as {id : string}
    }

    async hashpassword  (password : string){
        const salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(password, salt)
    }

    

    async register(dto: CreateUserDto): Promise<string> {

        await ValidateDto(CreateUserDto, dto);
        
        if (!dto.email || !dto.password) {
            throw new HttpException(
                StatusCodes.BAD_REQUEST,
                "Email and password are required"
            );
        }

        if(dto.password !== dto.confirmPassword){
            throw new HttpException(
                StatusCodes.BAD_REQUEST, 
                "Password does not match"
            )
        }

        const existingUser = await prisma.user.findUnique({
            where: { email: dto.email }
        });

        if (existingUser) {
            throw new HttpException(
                StatusCodes.CONFLICT,
                "User with this email already exists"
            );
        };

        const hashedPassword = await this.hashpassword(dto.password);
        const buffer = crypto.randomBytes(3);
        const code = buffer.readUIntBE(0, 3) % 1000000;
        const emailVerificationToken =  code.toString().padStart(6, '0');
        const emailVerificationExpires = new Date(Date.now() + 15* 60 * 1000);
        
        const user = await prisma.user.create({
            data: {
                name: dto.role === "VENDOR" ? "" : dto.name,
                email: dto.email,
                password: hashedPassword, 
                phone: dto.phone,
                role: dto.role,
                token: emailVerificationToken,
                tokenExpires: emailVerificationExpires,
                verified: false 
            }
        });

        if(user.role === "VENDOR"){
            await prisma.vendor.create({
                data: {
                    userId: user.id,
                    companyName: dto.name,
                }
            })
        }

        const verificationUrl = `${process.env.BASE_URL}/verify-email?token=${emailVerificationToken}&id=${user.id}`;

        await sendEmail({
            to: user.email,
            subject: "Verify Your Email Address",
            html: `<!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { color: #2c3e50; border-bottom: 1px solid #eee; padding-bottom: 10px; }
                        .code { 
                            font-size: 24px; 
                            letter-spacing: 3px; 
                            padding: 10px 15px;
                            background: #f8f9fa;
                            display: inline-block;
                            margin: 15px 0;
                        }
                        .footer { 
                            margin-top: 20px; 
                            font-size: 12px; 
                            color: #7f8c8d; 
                            border-top: 1px solid #eee;
                            padding-top: 10px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2>Welcome to Event Market, Sophia!</h2>
                        </div>
                        
                        <p>We're excited to have you join our community. Here's your verification code:</p>
                        
                        <div class="code">${emailVerificationToken}</div>
                        
                        <p>Please enter this code in your browser to verify your email address. This code expires in 15 minutes.</p>
                        
                        <p><strong>Why am I receiving this?</strong><br>
                        You recently signed up for an Event Market account using this email address.</p>
                        
                        <div class="footer">
                            <p>© 2025 Event Market. All rights reserved.<br>
                            <a href="https://event-market.vercel.app/privacy">Privacy Policy</a> | 
                            <a href="https://event-market.vercel.app/terms">Terms of Service</a></p>
                            
                            <p>Event Market Ltd, 123 Market St, San Francisco, CA 94103</p>
                            
                            <p><small>If you didn't request this code, please 
                            <a href="https://event-market.vercel.app/security">secure your account</a>.</small></p>
                        </div>
                    </div>
                </body>
                </html>`
        });


        

        return `Verification Mail sent successfully`
        
    }

    async sendToken( email: string) : Promise<string>{
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (!user) {
            throw new HttpException(
                StatusCodes.BAD_REQUEST,
                "Account does not exist"
            );
        }

        const buffer = crypto.randomBytes(3);
        const code = buffer.readUIntBE(0, 3) % 1000000;
        const token =  code.toString().padStart(6, '0');
        const tokenExpires = new Date(Date.now() + 15* 60 * 1000);

        await sendEmail({
            to: user.email,
            subject: "Verify Your Email Address",
            html: `<!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { color: #2c3e50; border-bottom: 1px solid #eee; padding-bottom: 10px; }
                        .code { 
                            font-size: 24px; 
                            letter-spacing: 3px; 
                            padding: 10px 15px;
                            background: #f8f9fa;
                            display: inline-block;
                            margin: 15px 0;
                        }
                        .footer { 
                            margin-top: 20px; 
                            font-size: 12px; 
                            color: #7f8c8d; 
                            border-top: 1px solid #eee;
                            padding-top: 10px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2>Hi, Sophia!</h2>
                        </div>
                        
                        <p>For your security, here's your one-time verification code:</p>
                        
                        <div class="code">${token}</div>
                        
                        <p>Please use this code to complete your request. This code will expire in 15 minutes.</p>
                        
                        <p><strong>Why am I receiving this?</strong><br>
                        You recently signed up for an Event Market account using this email address.</p>
                        
                        <div class="footer">
                            <p>© 2025 Event Market. All rights reserved.<br>
                            <a href="https://event-market.vercel.app/privacy">Privacy Policy</a> | 
                            <a href="https://event-market.vercel.app/terms">Terms of Service</a></p>
                            
                            <p>Event Market Ltd, 123 Market St, San Francisco, CA 94103</p>
                            
                            <p><small>If you didn't request this code, please 
                            <a href="https://event-market.vercel.app/security">secure your account</a>.</small></p>
                        </div>
                    </div>
                </body>
                </html>`
        });

        await prisma.user.update({
            where: { id: user.id },
            data: {
                token,
                tokenExpires,
            }
        });

        return "Otp has been sent to your mail"
        
    }

    async forgotPassword(email:string, dto: ForgotPasswordDto): Promise<string>{
        await ValidateDto(ForgotPasswordDto, dto);
         const user = await prisma.user.findUnique({
            where: { email: email }
        });

        if (!user) {
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "User not found"
            );
        }

        if(dto.otp !== user.token){
            throw new HttpException(
                StatusCodes.BAD_REQUEST,
                "Incorrect Otp"
            )
        }

        if(dto.password !== dto.confirmPassword){
            throw new HttpException(
                StatusCodes.BAD_REQUEST,
                "Passwod does not match"
            )
        }
        
        const hashedPassword = await this.hashpassword(dto.password);

        await prisma.user.update({
            where: { email: email },
            data: {
                password: hashedPassword,
                token: null,
                tokenExpires: null
            }
        });

        return "Pasword updated Successfully"
    }
    async verifyEmail(token: string, email: string): Promise<string> {
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "User not found"
            );
        }

        if (user.verified) {
            return "Email already verified";
        }

        if (user.token !== token) {
            throw new HttpException(
                StatusCodes.BAD_REQUEST,
                "Invalid verification token"
            );
        }

        if (new Date() > user.tokenExpires!) {
            throw new HttpException(
                StatusCodes.BAD_REQUEST,
                "Verification token has expired"
            );
        }

        await prisma.user.update({
            where: { email },
            data: {
                verified: true,
                token: null,
                tokenExpires: null
            }
        });

        return "Email verified successfully";
    }

    


    async login(dto: LoginDto): Promise<{user : UserResponseDto, token: string, message: string}> {
        await ValidateDto(LoginDto, dto);
        if (!dto.email || !dto.password) {
            throw new HttpException(
                StatusCodes.BAD_REQUEST,
                "Email and password are required"
            );
        }

        const user = await prisma.user.findUnique({
            where: {
                email: dto.email
            }
        })
        if (!user) {
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "Account does not exist"
            );
        }
        const comparePassword = await this.comparePassword(dto.password, user.password)
        if(!comparePassword){
            throw new HttpException(StatusCodes.UNAUTHORIZED, "Invalid Credentials, Try Again")
        }
        if(!user.verified){
            throw new HttpException(
                StatusCodes.FORBIDDEN,
                "Please verify your account first"
            )
        }

        const userResponse : UserResponseDto = {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            verified: user.verified,
            address: user.address,
            city: user.city,
            state: user.state,
            country: user.country,
            createdAt: user.createdAt
        }

        const token = this.signJwt(user.id);

        return {
            user: userResponse,
            token,
            message: `Login Successfull`
        };

    }


    async fetchUsers(page: number, pageSize: number): Promise<IPaginatedUsersResponse> {
        // Validate inputs
        if (page < 1) throw new HttpException(StatusCodes.NOT_FOUND, "Page must be greater than 0");
        if (pageSize < 1 || pageSize > 30) throw new HttpException(StatusCodes.NOT_FOUND, "Page size muct be between 1 and 30");

        const skip = (page - 1) * pageSize;
        
        const [users, total] = await Promise.all([
            prisma.user.findMany({
                skip,
                take: pageSize,
                orderBy: { createdAt: 'desc' },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone: true,
                    role: true,
                    verified: true,
                    address: true,
                    city: true,
                    state: true,
                    country: true,
                    createdAt: true
                }
            }),
            prisma.user.count()
        ]);

        return {
            data: plainToInstance(UserResponseDto, users),
            meta: {
                total,
                page,
                pageSize,
                totalPages: Math.ceil(total / pageSize)
            }
        };
    }

    async getUniqueUser(id: string) : Promise<UserResponseDto> {
        const user = await prisma.user.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                role: true,
                verified: true,
                address: true,
                city: true,
                state: true,
                country: true,
                createdAt: true,
                updatedAt: true
            }
        })
        
        if(!user){
            throw new HttpException(
                StatusCodes.BAD_REQUEST,
                "User does not exist"
            )
        }

        const userResponse : UserResponseDto = {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            verified: user.verified,
            address: user.address,
            city: user.city,
            state: user.state,
            country: user.country,
            createdAt: user.createdAt
        }

        return userResponse
    }

    async getLoggedInUser (authUser: { id: string }) : Promise<UserResponseDto | VendorResponseDto>{
        
        const user = await prisma.user.findUnique({
            where: {
                id: authUser.id
            },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                role: true,
                verified: true,
                address: true,
                city: true,
                state: true,
                country: true,
                createdAt: true,
                updatedAt: true,
                vendorProfile: true
            }
        })
        
        if(!user){
            throw new HttpException(
                StatusCodes.BAD_REQUEST,
                "User does not exist"
            )
        }

        const userResponse : UserResponseDto = {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            verified: user.verified,
            address: user.address,
            city: user.city,
            state: user.state,
            country: user.country,
            createdAt: user.createdAt
        }

        const vendorResponse : VendorResponseDto = {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            verified: user.verified,
            address: user.address,
            city: user.city,
            state: user.state,
            country: user.country,
            usercreatedAt: user.createdAt,
            vendorName: user.vendorProfile?.companyName,
            vendorEmail: user.vendorProfile?.contactEmail,
            vendorPhone: user.vendorProfile?.contactPhone,
            vendorAddress: user.vendorProfile?.address,
            vendorCity: user.vendorProfile?.city,
            vendorState: user.vendorProfile?.state,
            vendorCountry: user.vendorProfile?.country,
            vendorVerified: user.vendorProfile?.verified,
            vendorCreated: user.vendorProfile?.createdAt
        }

        return user.role === "VENDOR" ? vendorResponse : userResponse
    }


    async updateUserDetails (authUser: {id: string}, dto: EditUserDto) : Promise<string>{
        await ValidateDto(EditUserDto, dto);

        const user = await prisma.user.findUnique({
            where: {
                id: authUser.id
            }
        })

        if(!user){
            throw new HttpException(
                StatusCodes.BAD_REQUEST,
                "User does not exist"
            )
        }

        await prisma.user.update({
            where: {
                id: authUser.id
            },
            data: {
                name: dto.name,
                email: dto.email,
                phone: dto.phone,
                role: dto.role
            }
        })

        return "Personal Information updated successfully"
    }


    async updateUserAddress (authUser: {id: string}, dto: EditUserAddressDto) : Promise<string>{
        await ValidateDto(EditUserAddressDto, dto);

        const user = await prisma.user.findUnique({
            where: {
                id: authUser.id
            }
        })

        if(!user){
            throw new HttpException(
                StatusCodes.BAD_REQUEST,
                "User does not exist"
            )
        }

        await prisma.user.update({
            where: {
                id: authUser.id
            },
            data: {
                address: dto.address,
                city: dto.city,
                state: dto.state,
                country: dto.country
            }
        })

        return "Address updated successfully"
    }


    async updateUserPassword (authUser: {id: string}, dto: EditUserPasswordDto) : Promise<string>{

        await ValidateDto(EditUserPasswordDto, dto);
        const user = await prisma.user.findUnique({
            where: {
                id: authUser.id
            }
        })

        if(!user){
            throw new HttpException(
                StatusCodes.BAD_REQUEST,
                "User does not exist"
            )
        }

        
        const comparePassword = await this.comparePassword(dto.oldPassword, user.password)
        
        if(!comparePassword){
            throw new HttpException(
                StatusCodes.BAD_REQUEST,
                "Your Password is Incorrect"
            )
        }
        
        if(dto.newPassword !== dto.confirmPassword){
            throw new HttpException(
                StatusCodes.BAD_REQUEST,
                "Your password does not match"
            )
        }

        await prisma.user.update({
            where: {
                id: authUser.id
            },
            data: {
                password: dto.newPassword
            }
        })

        return "Password updated successfully"
    }

    async updateProfile(userId: string, file: Express.Multer.File): Promise<string> {
    try {
      if (!file) {
        throw new HttpException(StatusCodes.BAD_REQUEST, "No file uploaded");
      }

      // Upload to Cloudinary
      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'profile-pictures',
        transformation: [
          { width: 500, height: 500, crop: 'limit' }
        ]
      });

      // Delete the temporary file
      fs.unlinkSync(file.path);

      // Update user profile in database
      await prisma.user.update({
        where: { id: userId },
        data: {
          profile: result.secure_url
        }
      });

      return result.secure_url;
    } catch (error) {
      // Clean up the temporary file if upload fails
      if (file?.path) {
        fs.unlink(file.path, () => {});
      }
      throw error;
    }
  }


  
}