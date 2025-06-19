// Cat Gallery Logic
const catImages = [
  "https://picsum.photos/id/237/200/200", // looks like a cat
  "https://picsum.photos/id/1025/200/200",
  "https://picsum.photos/id/1005/200/200",
  "https://picsum.photos/id/1006/200/200",
  "https://picsum.photos/id/1003/200/200"
];

let currentIndex = 0;
const catGallery = document.getElementById("catGallery");
const loadCats = document.getElementById("loadCats");

loadCats.addEventListener("click", () => {
  const end = Math.min(currentIndex + 2, catImages.length);
  for (let i = currentIndex; i < end; i++) {
    const img = document.createElement("img");
    img.src = catImages[i];
    catGallery.appendChild(img);
  }
  currentIndex = end;
  if (currentIndex >= catImages.length) {
    loadCats.disabled = true;
    loadCats.textContent = "No more cats 😿";
  }
});

// Mood Changer Logic
const moodSelector = document.getElementById("moodSelector");
const moodImage = document.getElementById("moodImage");
const moodText = document.getElementById("moodText");

const moods = {
  happy: "https://picsum.photos/id/237/200/200",
  grumpy: "https://picsum.photos/id/1025/200/200",
  curious: "https://picsum.photos/id/1003/200/200"
};

moodSelector.addEventListener("change", () => {
  const mood = moodSelector.value;
  moodImage.src = moods[mood];
  moodText.textContent = `Mood: ${mood.charAt(0).toUpperCase() + mood.slice(1)}`;
});

// Cat Fact Generator
const facts = [
  "Cats sleep for 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats can jump 5 times their height.",
  "The oldest known pet cat existed 9,500 years ago.",
  "Cats have over 20 muscles in their ears."
];

const factBtn = document.getElementById("factBtn");
const catFact = document.getElementById("catFact");

factBtn.addEventListener("click", () => {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  catFact.textContent = fact;
});
