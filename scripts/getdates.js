// ============================
// Dynamic Dates
// ============================
document.getElementById("currentyear").textContent =
  new Date().getFullYear();

document.getElementById("lastModified").textContent =
  `Last Modification: ${document.lastModified}`;

// ============================
// Dark / Light Mode Toggle
// ============================
const toggleButton = document.getElementById("themeToggle");
const body = document.body;

// Load saved preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light-mode");
  toggleButton.textContent = "☀️";
}

// Toggle theme
toggleButton.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  const isLight = body.classList.contains("light-mode");
  toggleButton.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
