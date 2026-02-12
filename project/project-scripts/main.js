// ===============================
// Japan Uncharted Trip Planner
// ===============================

// DOM ELEMENTS
const form = document.querySelector("#trip-form");
const output = document.querySelector("#trip-output");

// ===============================
// FUNCTIONS
// ===============================

// Build a trip object
function createTrip(name, month, interests) {
  return {
    traveler: name,
    travelMonth: month,
    interests: interests
  };
}

// Generate trip message using template literals
function generateTripSummary(trip) {
  const interestList = trip.interests.length > 0
    ? trip.interests.join(", ")
    : "general exploration";

  let seasonMessage = "";

  if (trip.travelMonth === "Spring") {
    seasonMessage = "Cherry blossoms and mild weather await you.";
  } else if (trip.travelMonth === "Summer") {
    seasonMessage = "Festivals, beaches, and vibrant nightlife await you.";
  } else if (trip.travelMonth === "Autumn") {
    seasonMessage = "Colorful foliage and calm sightseeing await you.";
  } else if (trip.travelMonth === "Winter") {
    seasonMessage = "Snowy landscapes and cozy hot springs await you.";
  }

  return `
    <h3>Your Japan Adventure Plan</h3>
    <p><strong>Traveler:</strong> ${trip.traveler}</p>
    <p><strong>Travel Season:</strong> ${trip.travelMonth}</p>
    <p><strong>Top Interests:</strong> ${interestList}</p>
    <p>${seasonMessage}</p>
  `;
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

// ===============================
// EVENT LISTENER
// ===============================

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const month = document.querySelector("#month").value;

  const checkedBoxes = document.querySelectorAll(
    "input[name='interests']:checked"
  );

  const interests = Array.from(checkedBoxes).map(
    (checkbox) => checkbox.value
  );

  const trip = createTrip(name, month, interests);

  output.innerHTML = generateTripSummary(trip);
  saveTrip(trip);
});

// ===============================
// INITIAL LOAD
// ===============================

loadTrip();
