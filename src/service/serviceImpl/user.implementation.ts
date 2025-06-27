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
import bcrypt from "bcrypt"



export default class UserServiceImpl implements UserService{
    async comparePassword (password : string, hashedPassword : string) : Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword)
    }

    signJwt(id : string){
        return jwt.sign(
            { id },
            process.env.JWT_SECRET_KEY as string, 
            { expiresIn: "7d"}
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

        const hashedPassword = await this.hashpassword(dto.password)

        const user = await prisma.user.create({
            data: {
                name: dto.name,
                email: dto.email,
                password: hashedPassword, 
                phone: dto.phone,
                role: dto.role,
                verified: false 
            }
        });

        

        return `User ${user.email} registered successfully. Verification email sent.`
        
    }


    async login(dto: LoginDto): Promise<{user : UserResponseDto, token: string, message: string}> {
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
                StatusCodes.BAD_REQUEST,
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
}