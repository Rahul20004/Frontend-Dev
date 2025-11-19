let expenses = [8000, 1500, 12000, 3000, 2000];

let total = expenses[0] + expenses[1] + expenses[2] + expenses[3] + expenses[4];
let average = total / expenses.length;

// Add 10% tax
total += total * 0.10;

console.log("Total after tax:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
