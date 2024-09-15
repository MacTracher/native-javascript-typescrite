import {
    askEachStreetForWhoTheyWillVote,
    getStreetsTitlesOfGovernmentBuildings,
    getStreetsTitlesOfHouses,
    people
} from "./05_01";

let messages = people.map(man => `Hello ${man.name.split(' ')[0]}, you are real G` )

test ('Every student should get a message', ()=>{
    expect(messages[0]).toBe('Hello Andrew, you are real G');
    }
)





let city = {
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
                    title: "South Str"
                }
            }
        }

    ],
    citizensNumber: 1000000
}








// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles of government buildings', ()=> {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("South Str");
})

//02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles', ()=> {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("White street");
    expect(streetsNames[1]).toBe("Happy street");
    expect(streetsNames[2]).toBe("Hogwarts street");
})



test('Should ask each street for who they will vote', ()=>{

    let askingStreet = askEachStreetForWhoTheyWillVote(city.houses)
    expect(askingStreet.length).toBe(3);
    expect(askingStreet[0]).toBe('Hello guys from White street, for who do you wanna vote?');
    expect(askingStreet[1]).toBe('Hello guys from Happy street, for who do you wanna vote?');
    expect(askingStreet[2]).toBe('Hello guys from Hogwarts street, for who do you wanna vote?');
})