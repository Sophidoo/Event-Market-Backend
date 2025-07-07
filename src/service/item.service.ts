import { Category } from "../../generated/prisma"
import { CreatePackageDto, CreateRentalsDto, CreateServicesDto } from "../dtos/CreateItem.dto"
import { EditPackageDto, EditRentalsDto, EditServicesDto } from "../dtos/EditItem.dto"
import { ItemResponseDto } from "../dtos/ItemResponse.dto"
import { IPaginatedItemResponse } from "../interface/paginateditem.interface"


export default interface ItemService{
    createRentals(dto: CreateRentalsDto, files: Express.Multer.File[], id: string) : Promise<string>
    createServices(dto: CreateServicesDto) : Promise<string>
    createPackages(dto: CreatePackageDto) : Promise<string>
    getItem(id: string) : Promise<ItemResponseDto>
    getItemsList(page: number, pageSize: number, category: Category) : Promise<IPaginatedItemResponse>
    getRentalList(page: number, pageSize: number) : Promise<IPaginatedItemResponse>
    getServiceList(page: number, pageSize: number) : Promise<IPaginatedItemResponse>
    getPackageList(page: number, pageSize: number) : Promise<IPaginatedItemResponse>
    editRentals(id: string, dto: EditRentalsDto) : Promise<string>
    editService(id: string, dto: EditServicesDto) : Promise<string>
    editPackages(id: string, dto: EditPackageDto) : Promise<string>
    deleteItem(id: string) : Promise<string>
    changeItemStatus(id: string, status: string) : Promise<string>
    getMostBookedRentals(page: number, pageSize: number) : Promise<IPaginatedItemResponse>
    getMostBookedService(page: number, pageSize: number) : Promise<IPaginatedItemResponse>
    getMostBookedPackages(page: number, pageSize: number) : Promise<IPaginatedItemResponse>
    getHighestRatedList(page: number, pageSize: number) : Promise<IPaginatedItemResponse>
}