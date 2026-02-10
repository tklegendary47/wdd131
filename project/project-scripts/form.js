/* PRODUCT LIST */
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];


const select = document.getElementById("product");
products.forEach(p => {
  const o = document.createElement("option");
  o.value = p.id;
  o.textContent = p.name;
  select.appendChild(o);
});

/* CARD REVEAL */
const card = document.getElementById("card");
new IntersectionObserver(e=>{
  if(e[0].isIntersecting) card.classList.add("visible");
},{threshold:.3}).observe(card);

/* FOOTER INFO */
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

/* MOBILE GESTURES */
let startY = 0;
window.addEventListener("touchstart", e => {
  startY = e.touches[0].clientY;
});
window.addEventListener("touchend", e => {
  const endY = e.changedTouches[0].clientY;
  if (startY - endY > 120) {
    document.querySelector("button").focus();
  }
});

/* KONAMI EASTER EGG */
const konami = "ARROWUPARROWUPARROWDOWNARROWDOWNARROWLEFTARROWRIGHTARROWLEFTARROWRIGHTBA";
let buffer = "";
addEventListener("keydown", e => {
  buffer += e.key.toUpperCase();
  if (buffer.includes(konami)) {
    document.body.style.filter = "hue-rotate(180deg)";
    alert("🕹 Konami Mode Activated");
    buffer = "";
  }
});

/* DEV-ONLY RESET (KONAMI + R) */
let devSequence = "";
window.addEventListener("keydown", e => {
  devSequence += e.key.toUpperCase();

  if (devSequence.includes("ARROWUPARROWUPARROWDOWNARROWDOWNARROWLEFTARROWRIGHTARROWLEFTARROWRIGHTBAR")) {
    localStorage.removeItem("reviewStats");
    alert("🧪 Dev Mode: Review counter reset");
    devSequence = "";
  }

  if (devSequence.length > 100) devSequence = "";
});
