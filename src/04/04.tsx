import React from 'react';
import {CityType, GovernmentBuildingsType} from "../02/02";

export type fType= {
    name: string,
    dick: number,
    city: string,
}


export const demolishHousesOnTheStreet = ( newCity: CityType , address: string) => {
    newCity.houses = newCity.houses.filter( (a) => a.address.street.title !== address )
}

export const getBuildingsWithStaffCountGreaterThen = ( buildings: Array<GovernmentBuildingsType>, number:number) => {
return  buildings.filter((f)=> f.staffCount > number)
}



export const Name04= () => {
    let masiv = [
        {name: 'Oleg', dick:22, city:'Winnipeg' },
        {name: 'Lisa', dick:-12, city:'Winnipeg' },
        {name: 'Cibulka', dick:2, city:'Winnipeg' },


    ]

    let predicate =(masiv: fType) =>{
        return masiv.dick > 1
    }

    let Result = masiv.filter(predicate)






    // const result = masiv.filter((f: fType)=>{f.dick > 1})
    console.log (Result)
    return (
        <>
f
        </>
    );
};

