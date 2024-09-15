export type StreetType = {
    title: string
}

export type AddressType = {
    number: number
    street: StreetType
}


export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}


export type Street2Type = {
    title: string
}


export type Address2Type = {
    street: Street2Type
}


export type GovernmentBuildingsType = {
    type?: string
    budget: number
    staffCount: number
    address: Address2Type
}


export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}


export function changeBudget(city: CityType, number: number) {
    city.governmentBuildings[0].budget += number
    city.governmentBuildings[1].budget += number
}


export const repairHouse = (city: CityType) => {
    city.houses[1].repaired = true
}

export function toFireStaff(city: CityType, number: number) {
    city.governmentBuildings[0].staffCount -= number
}

export function toHireStaff(city: CityType, number: number) {
    city.governmentBuildings[0].staffCount += number
}

export const CreateGreationgMessage = (city: CityType) => {
    return   'Hello New York, I hope you happy!!'
}








 









