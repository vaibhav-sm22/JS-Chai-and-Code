const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]

//marvel_heroes.push(dc_heroes)// here it has taken dc_heroes as single element
// output is [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][0]) we can access array element in array

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

// const all_new_heros = [...marvel_heros, ...dc_heros]// this is called spread operator
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)// good prctice to specify depth in flat 
// console.log(real_another_array);

// console.log(Array.isArray(real_another_array)) to check if this is an array

console.log(Array.isArray("Vaibhav"));// this is string
console.log(Array.from("Vaibhav"));// converted this into array, used in web scraping
console.log(Array.from({name:"vaibhav"}));// interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
// isArray, from , of method of arrays learn












 