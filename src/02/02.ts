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
    id?:number
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