export const Pervij =()=>{
    return "Hello World";
}

export function Sum(a:number, b:number){
    return a + b;
}
export function Multiplay(a:number, b:number){
    return a* b;
}


export function PlusOdin(a:number){
   return a + 1;
}

export function SplitIntoWord(sentence:string){
    const words = sentence.toLowerCase().split(' ')
        return words.filter(w=>w !== '' && w !== '-')
        .map(w=>w
            .replace('!', '')
            .replace('.', '')
            )


}
