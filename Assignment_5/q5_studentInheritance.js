// q5_studentInheritance.js
"use strict";

// Parent constructor
function Person(name) {
    this.name = name;
}

// Child constructor
function Student(name, branch) {
    Person.call(this, name);  // inherit parent properties
    this.branch = branch;
}

// Inherit parent prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Methods
Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

// Demonstration
const s1 = new Student("Rahul", "CSE");

s1.showName();
s1.showBranch();

console.log("Prototype chain works:", s1 instanceof Student, s1 instanceof Person);
