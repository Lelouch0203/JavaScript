const name = "jaisai"
const repoCount = 30

// console.log(name + repoCount +" value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("jaisaivalasa")
// console.log(gameName[2]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-3, 12)
console.log(anotherString);
const nameTwo = new String("   jaisaivalasa   ")
console.log(nameTwo.trim());

const url = "https://www.youtube.com/watch?v=RGOj5yH7evk"
console.log(url.replace("=","-"));
console.log(url.includes("youtube"));
console.log(url.split("/"));





