// q1_scope.js

// Global variable
let bonus = 5000;

function calculateSalary() {
    // Local variable
    let salary = 40000;

    // Local variable to test scoping
    let isPermanent = true;   // Change this to false for testing

    if (isPermanent) {
        salary += bonus;
    }

    console.log("Total Salary (inside function):", salary);
}

// Function call
calculateSalary();

// Check global scope
console.log("Global bonus remains:", bonus);
