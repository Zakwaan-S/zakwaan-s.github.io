// Theme Toggle
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// Dummy Weather Data
const forecastData = [
  { day: "Tomorrow", temp: "22°C", condition: "Sunny" },
  { day: "Day After", temp: "19°C", condition: "Cloudy" },
  { day: "In 3 Days", temp: "18°C", condition: "Rainy" }
];

const getWeather = document.getElementById("getWeather");
const cityInput = document.getElementById("cityInput");
const weatherDisplay = document.getElementById("weatherDisplay");
const forecastGrid = document.getElementById("forecastGrid");

getWeather.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (!city) return alert("Please enter a city name");

  weatherDisplay.innerHTML = `<h3>${city}</h3><p>Temperature: 21°C</p><p>Condition: Partly Cloudy</p>`;

  // Show dummy forecast
  forecastGrid.innerHTML = "";
  forecastData.forEach(day => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h4>${day.day}</h4>
      <p>${day.temp}</p>
      <p>${day.condition}</p>
    `;
    forecastGrid.appendChild(card);
  });
});

// Canvas animation: Aurora-style glow
const canvas = document.getElementById("bgAnimation");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 30 + 10;
    this.color = `hsla(${Math.random() * 360}, 100%, 75%, 0.1)`;
    this.speedX = (Math.random() - 0.5) * 2;
    this.speedY = (Math.random() - 0.5) * 2;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function initAurora() {
  particles = [];
  for (let i = 0; i < 80; i++) {
    particles.push(new Particle());
  }
}

function animateAurora() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateAurora);
}

initAurora();
animateAurora();
