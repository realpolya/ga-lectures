/* ARRAY ITERATOR METHODS
callback functions

array.map
array is an object with dot notation
.map() – is a method that takes an argument
() – a function goes inside the parenthesis

map – can return another array, forEach does not return anything

*/

const arr =  ["a", "b", "c"]

arr.forEach((a, i, array) => {
    //array[i] = "love";
    console.log(a);
})

// forEach modifies the original array with array[i]
console.log(arr);

// index and arr are optional
const newArr = arr.map((el, index, arr) => {
    return `element: ${el}, index: ${index}, array: ${arr}`;
});

console.log(newArr);

// map()

const nums = [1, 2, 3, 5, 8, 10];
const squared = nums.map((num) => {
    return Math.pow(num, 2);
})

// factorial
const factorial = nums.map((num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
})

console.log(squared);
console.log(factorial);

const instructors =['Beryl', 'Hunter', 'Joe', 'Jurgen', 'Ben', 'David'];


const awesome = instructors.map((instructor) => {
    return instructor + " is awesome";
})

console.log(awesome);