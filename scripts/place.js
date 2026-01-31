const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
const chill = document.getElementById("chill");

function calculateWindChill(t, s) {
  return 13.12 + 0.6215*t - 11.37*Math.pow(s,0.16) + 0.3965*t*Math.pow(s,0.16);
}

if (temp <= 10 && wind > 4.8) {
  chill.textContent = calculateWindChill(temp, wind).toFixed(1) + " °C";
} else {
  chill.textContent = "N/A";
}

document.getElementById("lastModified").textContent = document.lastModified;
 document.getElementById("currentYear").textContent = new Date().getFullYear();

/* SCROLL REVEAL */
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

cards.forEach(card => observer.observe(card));
