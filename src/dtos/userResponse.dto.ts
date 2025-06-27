
export class UserResponseDto{
    id : string

    name: string

    email : string

    phone : string

    role : string
    
    verified : boolean

    address: string | null

    city : string | null

    state : string | null

    country : string | null

    createdAt : Date
}