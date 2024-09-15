import {
    demolishHousesOnTheStreet,
    fType,
    getBuildingsWithStaffCountGreaterThen,
    Name04
} from "./04";

let masiv = [
    {name: 'Oleg', dick: 22, city: 'Winnipeg'},
    {name: 'Lisa', dick: -12, city: 'Winnipeg'},
    {name: 'Cibulka', dick: 2, city: 'Winnipeg'},
]

let predicate = (masiv: fType) => {
    return masiv.dick > 1
}

let Result = masiv.filter(predicate)

let Reult = masiv.filter((t) => t.dick > 1)
// expect  (Result).toBe([{"city": "Winnipeg", "dick": 22, "name": "Oleg"}, {"city": "Winnipeg", "dick": 2, "name": "Cibulka"}]
// )


let newCity = {
    title: 'New York',
    houses: [{
        id: 1, buildedAt: 2012, repaired: false, address: {number: 100, street: {title: "White street"}}
    },
        {
            id: 2, buildedAt: 2008, repaired: false, address: {number: 100, street: {title: "Happy street"}}
        },
        {
            id: 3, buildedAt: 2020, repaired: false, address: {number: 200, street: {title: "Hogwarts street"}}
        }],
    governmentBuildings: [{
        id: 4, type: "HOSPITAL", budget: 200000, staffCount: 200, address: {
            street: {title: "Central Str"}
        }
    },
        {
            id: 5, type: "FIRE-STATION", budget: 500000, staffCount: 1000, address: {
                street: {
                    title: "Souths park str"
                }
            }
        }

    ],
    citizensNumber: 1000000
}


test("Houses should be destroyed", () => {
    demolishHousesOnTheStreet(newCity, "Happy street");

    expect(newCity.houses.length).toBe(2);
    expect(newCity.houses[0].id).toBe(1);
});


test("buildings with correct staff count", () => {
    let buildings =
        getBuildingsWithStaffCountGreaterThen(
            newCity.governmentBuildings,
            500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("FIRE-STATION");
});


