// q4_debug.js
"use strict";

function showMessage() {
    // greeting was undeclared → strict mode blocks implicit globals
    let greeting = "Welcome";
    console.log(greeting);
}

showMessage();

/*
EXPLANATION:
Under strict mode, variables MUST be declared.
Without let/var/const, JS tries to create a global variable → strict mode throws error.
Fix: Declare variable properly in local scope.
*/

// Add watch variable:
// debugger;
