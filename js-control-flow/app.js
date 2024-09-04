// triple equal is for strict equality
console.log(3 === 3);

// double equal is okay for type conversion
console.log((3+4) == '7');

// relational operators
console.log(3 > 4);

// or || and &&
console.log(false && true);

// alarm rings if weekday and 7 am and work in person
// if isWeekday && is7Am && workInPerson\

// bang operator / not operator
console.log(!true); // gives the false value
console.log(!!true); // gives the true value
console.log(3 !== 3); // checking if they are not the same

// conditionals
const value = 3;
if (value === 1){
    console.log("Yay it is 1");
} else {
    console.log(`Oops! It is ${value}`);
}

// ternary operator (alternative syntax for if-else statement)
const num = 5;
num > 5 ? console.log("Your value is big!") : console.log("Such a small value you got");

num > 10
    ? console.log("your value is large!")
    : num < 0? console.log("you have a negative value over there")
    : console.log("you are in the first 10 digits yay");

// exercise
let color = "purple";

if (color === "green") {
    console.log("Go!");
} else if (color === "red") {
    console.log("Stop!");
} else if (color === "yellow") {
    console.log("Slow down");
} else {
    console.log("this ain't a traffic light color");
};

// substituting if for switch

const seasonCheck = 'winter';

switch (seasonCheck) {
  case 'summer':
    console.log("It's summer!");
    break;
  case 'fall':
    console.log("It's fall now!");
    break;
  case 'winter':
    console.log('Brrr!');
    break;
  case 'spring':
    console.log("It's spring!");
    break;
  default:
    console.log('Invalid season');
}


// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

/* nested loops
for (let i = 0; i < 5; i++) {
    console.log("I am I loop", i);
    for (let j = 0; j < 3; j++){
        console.log("I am J loop", j);
    }
}; */

// exercise squared
for (let i = 1; i < 21; i++) {
    let squared = i * i;
    console.log(i + " squared is " + squared);
}

// exponentiation **
console.log(4 ** 4);

// while loops can become infinite
let xyz = 10;
while (xyz > 0) {
    console.log(xyz);
    xyz--;
}

// truthy and falsy
// always falsy NULL and undefined
console.log(!!null) // double negative = false
console.log(!undefined) // single negative = true