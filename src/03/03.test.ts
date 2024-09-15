import {AddSkill, isStudentLiveAtAnyCountry, makeStudentActive, StudentType, Sum} from "./03";

test ('f',()=>{
    const a=1,b=2
    const Result = Sum(a,b)
    expect(Result).toBe(3)
})

let student : StudentType

beforeEach(()=>{
    student = {
        id: 1,
        name: 'Oleg',
        age: 13,
        isActive: false,
        country: 'Canada',
        technologies: [
            {id:1,title:'HTML'},
            {id:2,title:'JS'},
            {id:3,title:'CSS'},
            {id:4,title:'REACT'},
        ],
    }
})


test ('new skill should be added', ()=>{
    AddSkill(student, 'JS');
    expect(student.technologies.length).toBe(5);
    expect(student.technologies[4].title).toBe('JS')


})


test('student should be active', ()=>{

    makeStudentActive(student)

    expect(student.isActive).toBe(true)

})

test('Is student live in some country?', () => {
    isStudentLiveAtAnyCountry(student)
    expect(isStudentLiveAtAnyCountry(student)).toBe(true)
})



























