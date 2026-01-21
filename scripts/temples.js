// Last modified footer
document.getElementById("lastModified").textContent = document.lastModified;

// Intersection Observer for scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

// Observe all hidden elements
document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
