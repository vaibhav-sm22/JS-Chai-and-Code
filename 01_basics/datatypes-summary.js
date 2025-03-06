// Primitive Datatypes

// 7 types : String, Number, Boolean, null(means empty not zero, if we wants temperature and unable to fetch then it cannot be zero so we use null), Undefined, Symbol, BigInt


// Is JS statically or dynamically typed? JavaScript is dynamically typed which variables can change during runtime and in statically typed variable do not change during runtime


const score = 100
const scoreValue = 100.3 //there is no float in JS, this is also number datatype 

const isLoggedIn = false
const outsideTemp = null// which means there is no temperature
let userEmail;// value is undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 343452352345234523452345n

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
// above code is array

let myObj = {
    name: "vaibhav",
    age: 22
}
// object

const myFunction = function(){
    console.log("Hello World");
    
}
// function

console.log(typeof myFunction);


