const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const select = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  select.appendChild(option);
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

const button = document.querySelector("button");

button.addEventListener("click", e => {
  const ripple = document.createElement("span");
  ripple.style.position = "absolute";
  ripple.style.inset = "0";
  ripple.style.borderRadius = "12px";
  ripple.style.background = "rgba(255,255,255,0.25)";
  ripple.style.animation = "ripple 0.4s ease-out";
  ripple.style.pointerEvents = "none";

  button.style.position = "relative";
  button.appendChild(ripple);

  setTimeout(() => ripple.remove(), 400);
});


const featureLabels = document.querySelectorAll(".features label");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

featureLabels.forEach(label => observer.observe(label));
