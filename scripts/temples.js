document.addEventListener("DOMContentLoaded", () => {

  // ===== FOOTER DATES =====
  const yearSpan = document.getElementById("currentYear");
  const lastModSpan = document.getElementById("lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (lastModSpan) {
    lastModSpan.textContent = document.lastModified;
  }

  // ===== HAMBURGER MENU =====
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // ===== SCROLL REVEAL =====
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

  // ===== FILTER BUTTONS =====
  const filterButtons = document.querySelectorAll(".filters button");
  const temples = document.querySelectorAll(".temple");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;

      temples.forEach(temple => {
        if (filter === "all" || temple.dataset.category === filter) {
          temple.style.display = "block";
          temple.classList.add("show");
        } else {
          temple.style.display = "none";
        }
      });
    });
  });

});
