export const Sum = (a: number, b: number) => {
    return a + b
};

type TechnologiesType = {
    id: number
    title: string
}


export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    country: string
    technologies: Array<TechnologiesType>
}

const Student:StudentType = {
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

export function AddSkill(student: StudentType, skill: string)  {
      student.technologies.push({
          id: new Date().getTime(),
          title: skill
      })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true
}

export const isStudentLiveAtAnyCountry = (s: StudentType) => {
    if(s.country !== ''){
        return true
    } else return false
}





