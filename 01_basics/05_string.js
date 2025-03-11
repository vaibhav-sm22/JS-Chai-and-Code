const name = "vaibhav"
const repo = 50

// console.log(name+repo +"VALUE")
// not a good syntax as it is outdated, not used in modern world, we should use backticks

// console.log(`Hello my name is ${name} and my repo count is ${repo}`)
// modern syntax is using backticks and adding variables using ${} is called string interpolation

const gameName = new String('NannuGamer')
// run this code in browser and then call gameName, you will get all the functions of javascript
// find all the methods of string and study and write about strings

//console.log(gameName[0]);
//console.log(gameName.toUpperCase());

// console.log(gameName.indexOf('n'))
const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-3,4)
// console.log(anotherString)

const newStringOne = "    vaibhav    ";
console.log(newStringOne);
console.log(newStringOne.trim());
// used when user deliberately or indeliberately adds space in user form, to avoid namespace in db

const url = "https://vaibhav.com/vaibhav%sharma"

console.log(url.replace('%','-'))

console.log(url.includes('vaibhav'))
// to check if this string is present and returns true

console.log()

//Study String from mdn notes of javascript 



