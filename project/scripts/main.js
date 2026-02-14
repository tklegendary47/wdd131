// ===============================
// Japan Uncharted Trip Planner
// ===============================
const yearSpan = document.getElementById("currentYear");
yearSpan.textContent = new Date().getFullYear();
// DOM ELEMENTS
const form = document.querySelector("#trip-form");
const output = document.querySelector("#trip-output");

// ===============================
// FUNCTIONS
// ===============================

// Build a trip object
function createTrip(name, month, tripType, duration, budget, stay, interests, currency) {
  return { name, month, tripType, duration, budget, stay, interests, currency };
}


document.querySelector("#download-btn").addEventListener("click", () => {
  window.print();
});


document.querySelector("#pay-btn").addEventListener("click", () => {
  document.querySelector("#payment-msg").innerHTML = `
    <p>✅ Payment successful! Your trip has been reserved.</p>
    <p>✈️ Confirmation email sent (demo).</p>
  `;
});


const el = document.getElementById("type-text");
if (el) {
  const text = el.dataset.text;
  let i = 0;

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }

  type();
}

const typeTarget = document.getElementById("type-text");

if (typeTarget) {
  const text = typeTarget.dataset.text;
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typeTarget.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 35); // typing speed
    }
  }

  typeEffect();
}

const progress = document.getElementById("progress");
const costEl = document.getElementById("cost");
const payBtn = document.getElementById("pay-btn");
const paymentMsg = document.getElementById("payment-msg");

form.addEventListener("submit", () => {
  const days = 5 + Math.floor(Math.random() * 5);
  const cost = days * 120;

  costEl.textContent = "$" + cost;
  progress.style.width = "100%";
});

payBtn.addEventListener("click", () => {
  paymentMsg.textContent = "💳 Payment system coming soon.";
});





form.addEventListener("input", () => {
  const filled = form.querySelectorAll("input:valid, select:valid").length;
  const total = form.querySelectorAll("input, select").length;
  progress.style.width = `${(filled / total) * 100}%`;
});


function typeWriter() {
  if (i < fullText.length) {
    textEl.textContent += fullText.charAt(i);

    let delay = 35;
    if (fullText.charAt(i) === "." || fullText.charAt(i) === ",") {
      delay = 200;
    }

    i++;
    setTimeout(typeWriter, delay);
  }
}



// Generate trip message using template literals
function generateTripSummary(trip) {
  const interestList = trip.interests.length > 0
    ? trip.interests.join(", ")
    : "general exploration";

  let seasonMessage = "";

  if (trip.travelMonth === "Spring") {
    seasonMessage = "You’ll experience cherry blossoms and mild weather.";
  } else if (trip.travelMonth === "Summer") {
    seasonMessage = "Expect festivals, beaches, and vibrant nightlife.";
  } else if (trip.travelMonth === "Autumn") {
    seasonMessage = "Enjoy colorful foliage and relaxed sightseeing.";
  } else if (trip.travelMonth === "Winter") {
    seasonMessage = "Prepare for snowy scenery and cozy hot springs.";
  }

  return `
    <h3>Your Japan Trip Plan</h3>
    <p><strong>Traveler:</strong> ${trip.traveler}</p>
    <p><strong>Trip Type:</strong> ${trip.tripType}</p>
    <p><strong>Travel Season:</strong> ${trip.travelMonth}</p>
    <p><strong>Duration:</strong> ${trip.duration} days</p>
    <p><strong>Budget Level:</strong> ${trip.budget}</p>
    <p><strong>Accommodation:</strong> ${trip.stay}</p>
    <p><strong>Main Interests:</strong> ${interestList}</p>
    <p>${seasonMessage}</p>
  `;
}


function estimateDailyCost(budget) {
  if (budget.includes("Budget")) return 80;
  if (budget.includes("Mid-range")) return 150;
  if (budget.includes("Luxury")) return 300;
  return 100;
}

function convertCurrency(amount, currency) {
  const rate = 150; // fake USD → JPY
  return currency === "JPY" ? amount * rate : amount;
}



// Save trip to localStorage
function saveTrip(trip) {
  localStorage.setItem("japanTrip", JSON.stringify(trip));
}

// Load trip from localStorage
function loadTrip() {
  const storedTrip = localStorage.getItem("japanTrip");

  if (storedTrip) {
    const trip = JSON.parse(storedTrip);
    output.innerHTML = generateTripSummary(trip);
  }
}


const slides = document.querySelectorAll('.hero > div');
let current = 0;

function nextSlide() {
  slides[current].style.opacity = 0;
  current = (current + 1) % slides.length;
  slides[current].style.opacity = 1;
}

setInterval(nextSlide, 6000); // fade every 6 seconds

// ===============================
// EVENT LISTENER
// ===============================

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const month = document.querySelector("#month").value;
  const tripType = document.querySelector("#trip-type").value;
  const duration = document.querySelector("#duration").value;
  const budget = document.querySelector("#budget").value;
  const stay = document.querySelector("#stay").value;

  const checkedBoxes = document.querySelectorAll("input[name='interests']:checked");
  const interests = Array.from(checkedBoxes).map(cb => cb.value);

  const trip = createTrip(name, month, tripType, duration, budget, stay, interests);

  output.innerHTML = generateTripSummary(trip);
  saveTrip(trip);
  output.scrollIntoView({ behavior: "smooth" });
});

const textEl = document.getElementById("type-text");

if (textEl) {
  const fullText = textEl.textContent.trim();

  // Split into sentences
  const sentences = fullText.split(". ").map(sentence => sentence.trim());

  textEl.textContent = "";

  let sentenceIndex = 0;
  let charIndex = 0;

  function typeSentence() {
    if (sentenceIndex < sentences.length) {
      const currentSentence = sentences[sentenceIndex];

      if (charIndex < currentSentence.length) {
        textEl.textContent += currentSentence.charAt(charIndex);
        charIndex++;
   let delay = 35;
if (currentSentence.charAt(charIndex) === "," ) delay = 120;
setTimeout(typeSentence, delay);
      } else {
        // End of sentence → add period + line break
        textEl.textContent += ".\n";
        sentenceIndex++;
        charIndex = 0;
        setTimeout(typeSentence, 600); // pause between sentences
      }
    }
  }



  typeSentence();
}






// ===============================
// INITIAL LOAD
// ===============================

loadTrip();
