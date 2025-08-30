import { IPaginatedWishlistResponse } from "../interface/paginatedwishlist.interface"


export default interface WishlistService{
    addToWishlist(itemId: string, userId: string) : Promise<string>
    removeFromWishlist(itemId: string, userId: string) : Promise<string>
    fetchWishlist(userId: string, page: number, pageSize: number, category: string) : Promise<IPaginatedWishlistResponse>
}