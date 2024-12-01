const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    // console.log(item);
    return item
} )

// console.log(values);

// The forEach method in JavaScript does not return a value.
//  It is used to iterate over an array and execute a provided function for each element,
//  but the return value of the function inside the forEach is ignored.
//  As a result, the value of values will be undefined.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
// console.log(newNums);


const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

console.log(newNums)