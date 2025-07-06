import { Vendor } from "../../generated/prisma"

export class VendorResponseDto{
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

    usercreatedAt : Date

    vendorName: string | null | undefined
    
    vendorPhone : string | null | undefined

    vendorEmail : string | null | undefined

    vendorAddress: string | null | undefined

    vendorCity : string | null | undefined

    vendorState : string | null | undefined
    
    vendorCountry : string | null | undefined

    vendorVerified : boolean | undefined 

    vendorCreated : Date | undefined

}