// const arrals:  string[] = []

// arrals.push("name")
// console.log(arrals)

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


