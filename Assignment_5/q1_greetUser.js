// q1_greetUser.js
"use strict";

// callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// main function
function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback(); // executing callback
}

// Demonstrate callback flow
greetUser("Rahul", showEndMessage);

