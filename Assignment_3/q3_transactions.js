// q3_transactions.js
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let valid = [];
let invalid = [];

for (let tr of transactions) {
    try {
        if (tr === null) {
            throw new Error("Null transaction");
        }

        if (!tr.id || tr.amount === undefined) {
            throw new Error("Missing ID or Amount");
        }

        if (tr.amount < 0) {
            throw new Error("Negative Amount");
        }

        valid.push(tr);
    } 
    catch (err) {
        invalid.push({ transaction: tr, error: err.message });
    }
}

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log(`Success Count: ${valid.length}, Failed Count: ${invalid.length}`);

// Add a breakpoint manually here for debugging:
// debugger;
