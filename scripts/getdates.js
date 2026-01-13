const yearSpan = document.getElementById("currentyear");
const modified = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
modified.textContent = `Last Modified: ${document.lastModified}`;
