import { StatusCodes } from "http-status-codes";
import { logger } from "../config/logger.config";
import HttpException from "./exception";
import { formatValidationErrors } from "./FormatValiation";
import { validate } from "class-validator";
import { ClassConstructor, plainToInstance } from "class-transformer";

export default async function ValidateDto<T extends Object> (dtoClass: ClassConstructor<T>, plainObject: object) {
    
    const dtoInstance = plainToInstance(dtoClass, plainObject);
    const errors = await validate(dtoInstance);
    if (errors.length > 0) {
        const formattedErrors = formatValidationErrors(errors);
        
        // Log the detailed validation errors
        logger.error('Validation failed', {
            errors: formattedErrors,
            dto: { 
                ...plainObject, 
                password: '***',
                confirmPassword: '***',
                token: '***'
            }}
        );

        throw new HttpException(
            StatusCodes.BAD_REQUEST,
            formattedErrors
        );
    }
}