// q1_parser.js
"use strict";

// Mixed API data
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

// Loop through each value
for (let item of apiData) {

    // Convert to number
    let numValue = Number(item);

    // Convert to boolean
    let boolValue = Boolean(item);

    // Convert to string
    let strValue = String(item);

    console.log(`Original: ${item} | Number: ${numValue} | Boolean: ${boolValue} | String: "${strValue}"`);

    // Validate numeric values
    if (!isNaN(numValue) && item !== " " && item !== "100px") {
        validNumbers.push(numValue);
    } else if (isNaN(numValue)) {
        invalidNumbers.push(item);
    }
}

console.log("\nValid Numeric Data:", validNumbers);
console.log("Invalid Numeric Data:", invalidNumbers);
