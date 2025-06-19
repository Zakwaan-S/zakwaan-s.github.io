let count = 0;

const countButton = document.getElementById("countButton");
const countDisplay = document.getElementById("clickCount");

countButton.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

function changeBackground() {
  const colors = ["#ffcccb", "#a0e7e5", "#b4f8c8", "#fcd5ce", "#d0bdf4"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

function greetUser() {
  const name = document.getElementById("nameInput").value.trim();
  const greeting = document.getElementById("greeting");

  if (name === "") {
    greeting.textContent = "Please enter your name.";
  } else {
    greeting.textContent = `Hello, ${name}! Welcome to JavaScript.`;
  }
}
