/////union types 
let sheshh: string | number


sheshh = 44
console.log(sheshh)


///Union Types in Functions

function games (name: string,time: number | boolean) {
    console.log("this is the game i wanna play" + name + "and at the age" + time)
}

games("rama",33)

///🔹 Narrowing With Union Types






///✅ What is a Type Alias?
//this is like creating your own custom data type 












type myowm = number
const ID: myowm = 34333
console.log(ID)



type status = "ok" | "ready"  | "nothing"

type name = string
type age = number
type brand = string 


type car = {
    name1 : name
    myage: age
    brands: brand
}

const names: name = "ramadan"
console.log(names)



///interface


interface hellooo {
    message: string;
    time: number;

}

const naa: hellooo = {
    message: "hshs",
    time: 44
}

console.log(naa.message)