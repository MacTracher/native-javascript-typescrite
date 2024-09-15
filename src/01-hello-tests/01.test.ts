import {Multiplay, PlusOdin, SplitIntoWord, Sum} from "./01";

let a:number;
let b:number;
let c:number;


beforeEach(() => {
    let  a = 1;
    let  b = 2;
    let  c = 3;
})



test('sum should be corect', () => {
    let  a = 1;
    let  b = 2;
    let  c = 3;


    let result1 = Sum(a,b)
    let result2 = Sum(b,c)



    expect(result1).toBe(3);
    expect(result2).toBe(5);


})






test('multiply should be corect', () => {
    let  a = 1;
    let  b = 2;
    let  c = 3;
 

    let result3 = Multiplay(a,b)
    let result4 = Multiplay(b,c)



    expect(result3).toBe(2);
    expect(result4).toBe(6);


})





test('splitting into words should be correct', ()=>{
    const sent1= 'Hello my friend!'
    const sent2= 'JS - the  best programing language'

    let result1 = SplitIntoWord(sent1)
    let result2 = SplitIntoWord(sent2)


    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')


    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('the')
    expect(result2[2]).toBe('best')
    expect(result2[3]).toBe('programing')
    expect(result2[4]).toBe('language')




})







test('every number shoul be plus 1',()=>{
    let  a=3;

    let result = PlusOdin(a)

    expect(result).toBe(4)
})



























