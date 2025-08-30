import { IsNumber, IsString } from "class-validator";


export class CreateReviewDto{
    @IsString()
    comment : string

    @IsNumber()
    rating : number
}