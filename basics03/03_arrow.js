const user ={
    username:"jai",
    price:999,

    welcomeMessage : function () {
    console.log(`${this.username},welcome to website`);
    console.log(this);
    }
}
// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     // let username ="jaisai"
//     console.log(this);  
// }

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()
// this. wont work in a function-----------------------

// ---------------------------arrow function---------------------------
// const chai = () => {
//     console.log(this);
// }
// chai()
// --gives empty paranthesis--



// const add = (num1,num2) => {
//    return  num1+num2

// }
// console.log(add(2,4));


// const add = (num1,num2) =>  (num1+num2)
//  console.log(add(2,4));
 
const add = (num1,num2) => ({username:"jaisai"})
console.log(add(2,3));


