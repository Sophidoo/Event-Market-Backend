import { Item, User } from "../../generated/prisma"

export class WishlistResponseDto{
    id : string

    user: User

    item: Item

    createdAt: Date

}