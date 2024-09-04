const prompt = require('prompt-sync')();

// say Hello function
let bye;
function sayHello(name) {
    console.log(`Hello, ${name}`);
    // every function returns something
    // if nothing is returned, then it returns undefined
    bye = `Bye, ${name}`;
    return bye;
}

let myName = "Polya";
sayHello(myName);
console.log(bye);

// x below is called a parameter, the actual number is an argument
function addTwo(x, y) {
    return x + y; // return prompts exit from the function
}

let result = addTwo(5, 10);
console.log(result);
console.log(addTwo(10, 12));

// function increasing
function increaseMe() {
    x = prompt("Give me a number:");
    if (x > 5) {
        for (x; x > 0; x--)
        {
            console.log(x ** 2);
        }
    } else {
        console.log("Please return a number larger than 5");
        increaseMe();
    }
}

increaseMe();

// function planetHasWater
function planetHasWater(planet) {
    if (planet === "Earth" || planet === "Mars") {
        return true;
    } else {
        return false;
    }
}

console.log(planetHasWater('Earth'));
console.log(planetHasWater('Mars'));
console.log(planetHasWater('Venus'));

// function expression
const add = function(a, b) {
    return a + b;
}
console.log(add(4, 2));

// arrow function
const multiplier = (a, b) => {
    return a * b;
}
console.log(multiplier(9, 4));

// implicit return (no saying return)
const multiply = (a, b) => a * b;
console.log(multiply(3, 3));

// single parameter no ()
const addThree = x => x + 3;
console.log(addThree(10));

// default parameters
function addNumbers(x = 3, y = 10) {
    return x + y;
}
// overwriting the parameters
console.log(addNumbers(3,3));

// nums
function addNums(x, y, ...nums) {
    console.log(nums);
    return x + y;
}
addNums(1, 2, 3, 4, 5);