// q2_string.js

let productName = "  wireless headphones PRO   ";

// Step 1: Trim spaces
let cleaned = productName.trim().toLowerCase();

// Step 2: Capitalize each word
let finalTitle = cleaned
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace("Pro", "Pro Edition");

// Display output
console.log("Cleaned Title:", finalTitle);
console.log("Length:", finalTitle.length);
