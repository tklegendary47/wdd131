
document.addEventListener("DOMContentLoaded", () => {
 
<<<<<<< HEAD
  // Dynamic year
  document.getElementById("currentYear").textContent = new Date().getFullYear();
  // Footer last modified
document.getElementById("lastModified").textContent = document.lastModified;


 // ===== HAMBURGER MENU =====
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuBtn.classList.toggle("open");

    // change icon ☰ ↔ ✖
    if (menuBtn.classList.contains("open")) {
      menuBtn.textContent = "✖";
    } else {
      menuBtn.textContent = "☰";
    }
  });



// Intersection Observer for reveal animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

/* ===== PARTICLE BACKGROUND ===== */
const canvas = document.createElement("canvas");
canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = -2;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
let particles = [];

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.addEventListener("resize", resize);

=======
  // Footer last modified
document.getElementById("lastModified").textContent = document.lastModified;

// Intersection Observer for reveal animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

/* ===== PARTICLE BACKGROUND ===== */
const canvas = document.createElement("canvas");
canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = -2;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
let particles = [];

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.addEventListener("resize", resize);

>>>>>>> a5d19ae25d37a4db40b36f6802aeaa7ebc19dc98
for (let i = 0; i < 70; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dy: Math.random() * 0.4 + 0.1
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(160,140,100,0.35)";

  particles.forEach(p => {
    p.y += p.dy;
    if (p.y > canvas.height) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}
animateParticles();

/* ===== FILTER FUNCTIONALITY ===== */
const filterButtons = document.querySelectorAll(".filters button");
const temples = document.querySelectorAll(".temple");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    // Active button styling
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    temples.forEach(temple => {
      const category = temple.dataset.category;

      if (filter === "all" || category === filter) {
        temple.style.display = "block";
        requestAnimationFrame(() => {
          temple.classList.add("show");
        });
      } else {
        temple.classList.remove("show");
        setTimeout(() => {
          temple.style.display = "none";
        }, 300);
      }
    });
  });
});

/* ===== SCROLL-LINKED PARALLAX ===== */
const hero = document.querySelector(".hero");
const parallaxLayer = document.querySelector(".parallax");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Hero cinematic motion
  hero.style.backgroundPositionY = `${scrollY * 0.4}px`;

  // Background depth layer
  parallaxLayer.style.transform = `translateY(${scrollY * 0.15}px)`;
});
});