
export class UserResponseDto{
    id : string

    name: string

    email : string

    phone : string

    role : string
    
    verified : boolean
    suspended : boolean

    address: string | null

    city : string | null

    state : string | null

    country : string | null

    profile: string | null


    createdAt : Date
}