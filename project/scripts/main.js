// ===============================
// Japan Uncharted Trip Planner
// Clean Production Version
// ===============================

// ===============================
// DOM ELEMENTS
// ===============================

const yearSpan = document.getElementById("currentYear");
const form = document.getElementById("trip-form");
const output = document.getElementById("trip-output");
const progress = document.getElementById("progress");
const costEl = document.getElementById("cost");
const payBtn = document.getElementById("pay-btn");
const paymentMsg = document.getElementById("payment-msg");
const downloadBtn = document.getElementById("download-btn");

// ===============================
// INITIAL SETUP
// ===============================

// Auto-update footer year
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ===============================
// TRIP OBJECT CREATION
// ===============================

function createTrip(name, month, tripType, duration, budget, stay, interests) {
  return { name, month, tripType, duration, budget, stay, interests };
}

// ===============================
// SUMMARY GENERATION
// ===============================

function generateTripSummary(trip) {
  const interestList =
    trip.interests.length > 0
      ? trip.interests.join(", ")
      : "General exploration";

  let seasonMessage = "";

  if (trip.month === "Spring") {
    seasonMessage = "You’ll experience cherry blossoms and mild weather.";
  } else if (trip.month === "Summer") {
    seasonMessage = "Expect festivals, beaches, and vibrant nightlife.";
  } else if (trip.month === "Autumn") {
    seasonMessage = "Enjoy colorful foliage and relaxed sightseeing.";
  } else if (trip.month === "Winter") {
    seasonMessage = "Prepare for snowy scenery and cozy hot springs.";
  }

  return `
    <h3>Your Japan Trip Plan</h3>
    <p><strong>Traveler:</strong> ${trip.name}</p>
    <p><strong>Trip Type:</strong> ${trip.tripType}</p>
    <p><strong>Travel Season:</strong> ${trip.month}</p>
    <p><strong>Duration:</strong> ${trip.duration} days</p>
    <p><strong>Budget Level:</strong> ${trip.budget}</p>
    <p><strong>Accommodation:</strong> ${trip.stay}</p>
    <p><strong>Main Interests:</strong> ${interestList}</p>
    <p>${seasonMessage}</p>
  `;
}

// ===============================
// LOCAL STORAGE
// ===============================

function saveTrip(trip) {
  localStorage.setItem("japanTrip", JSON.stringify(trip));
}

function loadTrip() {
  const storedTrip = localStorage.getItem("japanTrip");

  if (storedTrip) {
    const trip = JSON.parse(storedTrip);
    output.innerHTML = generateTripSummary(trip);
  }
}

// ===============================
// FORM HANDLING
// ===============================

if (form) {
  // Progress bar update
  form.addEventListener("input", () => {
    const filled = form.querySelectorAll("input:valid, select:valid").length;
    const total = form.querySelectorAll("input, select").length;
    progress.style.width = `${(filled / total) * 100}%`;
  });

  // Form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const month = document.getElementById("month").value;
    const tripType = document.getElementById("trip-type").value;
    const duration = document.getElementById("duration").value;
    const budget = document.getElementById("budget").value;
    const stay = document.getElementById("stay").value;

    const checkedBoxes = document.querySelectorAll(
      "input[name='interests']:checked"
    );
    const interests = Array.from(checkedBoxes).map((cb) => cb.value);

    const trip = createTrip(
      name,
      month,
      tripType,
      duration,
      budget,
      stay,
      interests
    );

    output.innerHTML = generateTripSummary(trip);
    saveTrip(trip);
    output.scrollIntoView({ behavior: "smooth" });

    // Simple cost estimate
    const dailyCost =
      budget.includes("Budget") ? 80 :
      budget.includes("Mid-range") ? 150 :
      budget.includes("Luxury") ? 300 : 100;

    const totalCost = dailyCost * parseInt(duration);
    if (costEl) costEl.textContent = `$${totalCost}`;
  });
}

// ===============================
// PAYMENT & DOWNLOAD
// ===============================

if (payBtn) {
  payBtn.addEventListener("click", () => {
    paymentMsg.textContent = "💳 Payment system coming soon.";
  });
}

if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    window.print();
  });
}

// ===============================
// TYPEWRITER EFFECT (Single Clean Version)
// ===============================

const textEl = document.getElementById("type-text");

if (textEl) {
  const fullText = textEl.dataset.text;
  let index = 0;

  function typeWriter() {
    if (index < fullText.length) {
      textEl.textContent += fullText.charAt(index);
      index++;

      let delay = 35;
      if (fullText.charAt(index) === "." || fullText.charAt(index) === ",") {
        delay = 150;
      }

      setTimeout(typeWriter, delay);
    }
  }

  textEl.textContent = "";
  typeWriter();
}

// ===============================
// HERO SLIDESHOW (Safe Version)
// ===============================

const slides = document.querySelectorAll(".hero > div");

if (slides.length > 1) {
  let current = 0;

  function nextSlide() {
    slides[current].style.opacity = 0;
    current = (current + 1) % slides.length;
    slides[current].style.opacity = 1;
  }

  setInterval(nextSlide, 6000);
}

// ===============================
// INITIAL LOAD
// ===============================

loadTrip();
