// q4_array.js

// Create 8 random scores between 30–100
let scores = Array.from({ length: 8 }, () => 
    Math.floor(Math.random() * 71) + 30
);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

let average = scores.reduce((acc, val) => acc + val, 0) / scores.length;

let passedCount = scores.filter(score => score >= 50).length;

console.log("Scores:", scores);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Average:", average.toFixed(2));
console.log("Passed Students:", passedCount);
