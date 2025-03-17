const score = 400

// console.log(score)
// 400 is output

const balance = new Number(1000)
// console.log(balance);
// [Number: 1000] is output and if we use this in browser we get all the functions of number

// console.log(balance.toString());
// 1000 as it is converted into string  

// console.log(balance.toString().length);
// // 4 as we can use string functions

// console.log(balance.toFixed(3));
// it would give 3 trailing decimal places after converting number to string

// const number = 100

// console.log(number.toFixed(2))
// console.log(number.toString(2))
// both of these methods convert number into string but toFixed is used to give trailing decimels
// to string for eg if we write 2, it will give .00

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3));
// interesting and need to study toPrecision method 

const hundereds = 1000000
// console.log(hundereds.toLocaleString('en-IN'));
// formats number using commas for eg 100,000,000 or en-IN in indian way

//*********Maths************

//console.log(Math) use this code in browser to get detailed maths functions

// console.log(Math.abs(-5))
// this abs converts any negative number to positive
// console.log(Math.round(4.3))
// this method rounds off the numbers and ceil() rounds the number to upper eg 4.3 to 5
// and floor do this vice versa

console.log(Math.random());
// would provide 0.decimal digit











