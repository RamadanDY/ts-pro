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