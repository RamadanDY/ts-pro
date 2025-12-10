





// const arrals:  string[] = []

// arrals.push("name")
// console.log(arrals)
/*
const ourReadOnly:  [number, string,boolean ] = [1 ,"ei",true]

ourReadOnly.push("5355")

console.log(ourReadOnly)

// named tuples 
let Ispaid: [amount: number, currency: number ,hasPaid: boolean]

Ispaid = [34.4,44,true]
console.log(Ispaid)
// destructuring tuples this allows u to extract the values into variables 
let user: [name: string , age: number]= ["ramadan ",24]
const [d,f] = user
console.log(d)
//instead we would have done this rather ie we acces it through the index
const shee = user[0]
console.log(shee)
console.log(user)

//object 
const last: {name: string,age: number} = {
    name : "ramadan",
    age : 23

}

console.log(last.age)   

6
//ojects with option

const list:  {readonly student: string,class?: number,seat: number} = {
    student: "shaban",
    seat: 5

}

console.log(list.seat)




///objects with methods

const letscalc =  {
    add(hi: number,gii: number){
        return hi + gii
    }
}
console.log(letscalc.add(2,4))




interface animal {
    name: string
    breed: string
    year: number
    data?: false;
}

const fanimal:  animal= {
    name: "fjjj",
    breed: "kk",
    year: 84
}


console.log(fanimal.breed)



///interface 
interface Person {
    name: string
    age: number
}


///our object that we created
const fperson: Person = {
    name: "kofi",
    age: 44
}
console.log(fperson.age)
*/

//✅ 2. Function parameter types
interface Poet {
    born: string;
    name: string;
}

function usePoet(poet: Poet){
    const born: string = poet.born;
    console.log(`my name is ${poet.name} and i am ${born} years old`)
}


usePoet({
    born: "44",
    name: "jhdkj"
})


