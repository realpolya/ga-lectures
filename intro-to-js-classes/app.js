/* Intro to Javascript Classes */

/*

 In the style of object-oriented programming (OOP),
classes offer a clear and efficient way to create reusable 
parts of an application.

Encapsulation:
Bundling data and methods within an object.


*/

const myFirstCar = {
    make: 'Toyota',
    model: 'Corolla',
    color: 'black',
    isRunning: false,
    start: function() {
      myFirstCar.isRunning = true;
      console.log('Running!');
    },
};

// convention to capitalize Class (PascalCase)
class Car {
    // code to define class's properties and methods
    // constructor method
    constructor(carMake, carModel) {
        this.make = carMake;
        this.model = carModel;
    }
}

const myCar = new Car('Ford', 'Bronco');

console.log(myCar);