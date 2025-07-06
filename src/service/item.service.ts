

export default interface ItemService{
    createItem() : Promise<string>
    getItem() : Promise<string>
    getItemsList() : Promise<string>
    getRentalList() : Promise<string>
    getServiceList() : Promise<string>
    getPackageList() : Promise<string>
    editItem() : Promise<string>
    deleteItem() : Promise<string>
    changeItemStatus() : Promise<string>
    getMostBookedRentals() : Promise<string>
    getMostBookedService() : Promise<string>
    getMostBookedPackages() : Promise<string>
    getHighestRatedList() : Promise<string>
}