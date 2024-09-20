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

// filter()
// select specific elements from a source array returning a new array with only those elements
// only true conditions are returned, false values are filtered out

const numsOver4 = nums.filter((num) => {
    return num > 4;
}).map((num) => {
    return (num + 5); // adding 5 to each element
}) // chaining map to filter

console.log(numsOver4);

const odds = nums.filter((num) => {
    return num % 2; // if returns 0, then it is falsy, if not 0, then truthy
})

odds.length = 2 // capping the array at a certain length
console.log(odds)

const people = ['jerks', 'nice people', 'jerks', 'nice people', 'nice people'];

const notJerks = people.filter((person) => {
    return person !== "jerks"; 
})

console.log(notJerks);

// find()
// finds the first instance in the array, then breaks

const odd = nums.find((num) => {
    return num % 2;
})

console.log(odd);

// find and findIndex
const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'blue', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
];

const teslaCar = cars.find((car) => {
    return car.make === "Tesla";
})

console.log(teslaCar);

const teslaIndex = cars.findIndex((car) => {
    return car.make === "Tesla";
});

console.log(teslaIndex);

// some and every
// some checks if there is at least one element that meets the condition
// every() checks if an array meets a certain condition

const hasFord = cars.some((car) => {
    return car.make === "Ford";
})
console.log(hasFord);

const everyCarBlue = cars.every((car) => {
    return car.color === "blue";
})
console.log(everyCarBlue);

/* reduce()
 purpose: reduce an array into a single value (can be a single object)
 array.reduce((accumulator, currentValue, index, array) => { 
    function body }, initialValue); 

array.reduce(function, initialValue);
array.map(function);

array.reduce takes in 2 arguments

required:
accumulator = initialValue (the second argument)
currentValue = element

if accumulator is not defined, then it becomes the first element of the array
the second element becomes the second parameter
*/

const sum = factorial.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);
console.log(sum);

// return an object

let votes = ['Yes', 'No', 'Yes', 'Yes', 'No'];

let tally = votes.reduce((acc, vote) => {
  if(acc[vote]){
    acc[vote]++;
  } else {
    acc[vote] = 1; // assign a property to the object (key - value) on the first round. Initialize the first vote
  }
  return acc;
}, {}); // intiial value is the object

console.log(tally);

// tally is { 'Yes': 3, 'No': 2 }



