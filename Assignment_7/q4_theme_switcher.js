// Q4 - Theme switcher using setAttribute and data-theme

const themeButtons = document.querySelectorAll("button[data-theme-btn]");
const currentThemeLabel = document.getElementById("currentTheme");

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const chosenTheme = button.getAttribute("data-theme-btn"); // "light", "dark", "blue"
    applyTheme(chosenTheme);
  });
});

// Use setAttribute for both class and data-theme
function applyTheme(themeName) {
  const bodyElement = document.body;

  // theme-light / theme-dark / theme-blue
  const className = `theme-${themeName}`;

  bodyElement.setAttribute("class", className);
  bodyElement.setAttribute("data-theme", themeName);

  currentThemeLabel.textContent = `Current theme: ${themeName}`;
}
