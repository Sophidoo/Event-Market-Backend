import { Item, User } from "../../generated/prisma"


export class ReviewResponseDto{
    id: string
    comment: string
    rating: number
    user: User
    item: Item
    createdAt: Date
}