// q5_boolean.js

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Access condition
if (isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Try changing the values above to test multiple outcomes
