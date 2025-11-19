let marks = [88, 75, 92, 81, 69];  // 5 subjects

// Validation: Any mark < 35 → Detained
let hasFailed = marks.some(m => m < 35);

let total = marks.reduce((a, b) => a + b, 0);
let percentage = (total / 500) * 100;

if (hasFailed) {
  console.log("Detained");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
  console.log("Promoted");
} else {
  console.log("Detained");
}

console.log("Percentage:", percentage.toFixed(2) + "%");
