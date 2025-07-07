import { ValidationError } from 'class-validator';


export function formatValidationErrors(errors: ValidationError[]): string {
  const errorMessages: string[] = [];

  const extractErrors = (error: ValidationError) => {
    if (error.constraints) {
      errorMessages.push(...Object.values(error.constraints));
    }
    // Recursively handle nested validation errors
    if (error.children?.length) {
      error.children.forEach(extractErrors);
    }
  };

  errors.forEach(extractErrors);
  return errorMessages.join(', ');
}