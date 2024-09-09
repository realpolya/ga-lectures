/* Intro to Javascript Classes */

/*

 In the style of object-oriented programming (OOP),
classes offer a clear and efficient way to create reusable 
parts of an application.

Encapsulation:
Bundling data and methods within an object.


*/

// prompt function
const prompt = require("prompt-sync")();

// convention to capitalize Class (PascalCase)
class Car {
    // code to define class's properties and methods
    // constructor method
    constructor(carMake, carModel, carColor) {
        this.make = carMake;
        this.model = carModel;
        this.color = carColor;
        Car.carCount++;
    }

    isRunning = false; // applicable to every car

    start() {
        this.isRunning = true;
        console.log("Running!");
    }

    stop() {
        this.isRunning = false;
        console.log("Car is off");
    }

    printMake() {
        console.log(this.make);
    }

    // static methods attached to the class itself, not instances of the class
    static about() {
        console.log("I am the Car class!");
    }

    static carCount = 0;

    // override a static
    toString() {
        return `This car is a ${this.color} ${this.make} ${this.model}.`;
    }
};

// new keyword
const myCar = new Car('Ford', 'Bronco', 'pink');
const lovedCar = new Car('Porsche', 'Macan', 'grey');

/* 
prototype methods (instance methods) – available on an instance
of the class (object). 
forEach – example of prototype method on an array.

static methods – called on the class itself (not on an instance)
Array.isArray = static method

Class methods are not separated by a comma or any other character.

*/

myCar.start();
console.log(myCar);
lovedCar.printMake();


class Country {
    constructor(countryName, capitalCity, continent, size) {
        this.name = countryName;
        this.capital = capitalCity;
        this.continent = continent;
        this.area = size;
    }
    
    isDemocracy = false;
    president = "";

    democracy() {
        this.isDemocracy = true;
        console.log(`${this.name} became a democracy!`)
    }

    logPresident() {
        this.president = prompt(`Who is a president at ${this.name}? `);
        console.log(`The president of ${this.name} is ${this.president}!`);
    }
}

const myCountry = new Country('Russia', 'Moscow', 'Eurasia', 17000000)

console.log(myCountry);

Car.about();
console.log(Car.carCount);


// creating subclass (child class from a parent class)
class ElectricCar extends Car {
    constructor(carMake, carModel, carColor, batteryCharge) {
        super(carMake, carModel, carColor); // super is the first thing in the constructor
        this.batteryCharge = batteryCharge;
    }

    // overriding parent start() method
    start() {
        if (this.batteryCharge > 0) {
            this.isRunning = true;
            console.log("EV is running");
        } else {
            this.isRunning = false;
            console.log("Need to recharge");
        }
    }
}

const myMercedes = new ElectricCar('Mercedes', 'EQB', 'blue', 90);
console.log(myMercedes);
console.log(Car.carCount);

console.log(myMercedes.toString());