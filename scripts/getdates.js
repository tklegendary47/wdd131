const yearSpan = document.getElementById("currentyear");
const modified = document.getElementById("lastModified");
const toggle = document.getElementById("themeToggle");

// Footer dates
yearSpan.textContent = new Date().getFullYear();
modified.textContent = `Last Modified: ${document.lastModified}`;

// Theme toggle (dark ↔ light)
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Update icon based on current mode
  toggle.textContent = document.body.classList.contains("light-mode")
    ? "🌙"  // switch to dark
    : "☀️"; // switch to light
});
