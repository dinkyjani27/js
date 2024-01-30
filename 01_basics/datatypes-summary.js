// primimtive
// string , number, boolean, null, undefined, symbol, BigInt

const score=100
const scorevalue = 100.2
const isLoggedin = false
const outsideTemp = null
let userEmail
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id==anotherid);

const bigNumber = 222222223333333344444444444n


// Reference type (non primitive)
// Array, Objects, Functions

const heros = ["shaktiman","naagraj"]
let myobj ={
    name:"dinky",
    age: 22,

}

const myfun = function()
{
    console.log("hello")
}

console.log(typeof myfun)
console.log(typeof myobj)