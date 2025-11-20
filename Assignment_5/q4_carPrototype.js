// q4_carPrototype.js
"use strict";

// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Prototype method (shared)
Car.prototype.getDetails = function () {
    console.log(`Car: ${this.brand} ${this.model}`);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Honda", "City");

car1.getDetails();
car2.getDetails();
