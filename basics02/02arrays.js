const heros = ["jai","sai","valasa"]
const heros2 = ["lelouch","vi","britannia"]

// heros.push(heros2)

// console.log(heros);
// console.log(heros[3][1]);

// const allheros = heros.concat(heros2)
// console.log(allheros);

const allheros2 = [...heros,...heros2]
console.log(allheros2);

const array = [1,2,3,[4,5],6,[7,[8,9]]]

const realArray =  array.flat(Infinity)
console.log(realArray);

console.log(Array.isArray("jaisai"));
console.log(Array.from("jaisai"));//makes string an array 
console.log(Array.from({name:"jaisai"}))//intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



