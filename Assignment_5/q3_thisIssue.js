// q3_thisIssue.js
"use strict";

const user = {
    name: "Rahul",
    showName: () => {
        console.log("Using arrow function:", this.name);
    }
};

// Arrow function does NOT bind its own 'this'
user.showName(); // undefined

// FIX using normal function
const userFixed = {
    name: "Rahul",
    showName() {
        console.log("Using normal function:", this.name);
    }
};

userFixed.showName(); // Rahul
