// q5_hoisting.js
"use strict";

/*
Memory Hoisting State BEFORE execution:

var score → hoisted but initialized as undefined
function announce → hoisted completely (function body also)
let status → hoisted but NOT initialized (TDZ error)
function startGame → fully hoisted

console.log(score); → prints undefined
announce(); → works (function fully hoisted)
startGame(); → ERROR because status is in TDZ
*/

console.log(score);  // undefined
announce();          // works

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

startGame(); // ❌ Error, status in TDZ

function startGame() {
    console.log(status);
}
