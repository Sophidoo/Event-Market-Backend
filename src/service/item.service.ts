import { Category } from "../../generated/prisma"
import { CreatePackageDto, CreateRentalsDto, CreateServicesDto } from "../dtos/CreateItem.dto"
import { EditPackageDto, EditRentalsDto, EditServicesDto } from "../dtos/EditItem.dto"
import { ItemResponseDto } from "../dtos/ItemResponse.dto"
import { IPaginatedItemResponse } from "../interface/paginateditem.interface"


export default interface ItemService{
    createRentals(dto: CreateRentalsDto, files: Express.Multer.File[], id: string) : Promise<string>
    createServices(dto: CreateServicesDto, files: Express.Multer.File[], id: string) : Promise<string>
    createPackages(dto: CreatePackageDto, files: Express.Multer.File[], id: string) : Promise<string>
    getItem(id: string) : Promise<ItemResponseDto>
    getItemsList(page: number, pageSize: number, category: Category | null)  : Promise<IPaginatedItemResponse>
    getVendorItems(page: number, pageSize: number, category: Category | null, id: string)  : Promise<IPaginatedItemResponse>
    getRentalList(page: number, pageSize: number, categoryType: string, startDate: string, endDate: string, location: string) : Promise<IPaginatedItemResponse>
    getServiceList(page: number, pageSize: number, categoryType: string, startDate: string, endDate: string, location: string) : Promise<IPaginatedItemResponse>
    getPackageList(page: number, pageSize: number, categoryType: string, startDate: string, endDate: string, location: string) : Promise<IPaginatedItemResponse>
    editRentals(id: string, dto: EditRentalsDto, vendorId: string, newImages: Express.Multer.File[]) : Promise<string>
    editService(id: string, dto: EditServicesDto, vendorId: string, newImages: Express.Multer.File[]) : Promise<string>
    editPackages(id: string, dto: EditPackageDto, vendorId: string, newImages: Express.Multer.File[]) : Promise<string>
    deleteItem(id: string) : Promise<string>
    changeItemStatus(id: string, status: string) : Promise<string>
    getMostBookedRentals(page: number, pageSize: number) : Promise<IPaginatedItemResponse>
    getMostBookedService(page: number, pageSize: number) : Promise<IPaginatedItemResponse>
    getMostBookedPackages(page: number, pageSize: number) : Promise<IPaginatedItemResponse>
    getHighestRatedList(page: number, pageSize: number) : Promise<IPaginatedItemResponse>

    importItemsFromCSV(filePath: string, userId: string) : Promise<string>

    getCategoryTypes() : Promise<{name: string}[]>
}