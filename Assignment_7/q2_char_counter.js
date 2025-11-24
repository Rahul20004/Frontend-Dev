// Q2 - Live Character Counter with warning behavior

const textArea = document.getElementById("message");
const counterDisplay = document.getElementById("counter");
const resetButton = document.getElementById("resetBtn");

const maxCharacters = 100;

// Update counter text and color
function updateCounter() {
  const currentLength = textArea.value.length;
  const remaining = maxCharacters - currentLength;
  counterDisplay.textContent = `Remaining characters: ${remaining >= 0 ? remaining : 0}`;

  // Default color (black)
  counterDisplay.style.color = "black";

  if (remaining <= 20 && remaining > 0) {
    counterDisplay.style.color = "orange"; // yellow-ish
  } else if (remaining <= 0) {
    counterDisplay.style.color = "red";
  }
}

// Prevent typing beyond limit using preventDefault()
textArea.addEventListener("keydown", (event) => {
  const allowedKeys = [
    "Backspace",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
    "Tab"
  ];

  const currentLength = textArea.value.length;

  if (currentLength >= maxCharacters && !allowedKeys.includes(event.key)) {
    event.preventDefault(); // do not allow more characters
  }
});

// Update on input
textArea.addEventListener("input", updateCounter);

// Reset button clears everything
resetButton.addEventListener("click", () => {
  textArea.value = "";
  updateCounter();
});

// Initialize display
updateCounter();
