// Cat Gallery Logic
const catImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/640px-Felis_catus-cat_on_snow.jpg", // looks like a cat
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Felis_silvestris_catus_%28Brunei%29_02.jpg/640px-Felis_silvestris_catus_%28Brunei%29_02.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/20231125_housecat_south_meadows_PD100306.jpg/640px-20231125_housecat_south_meadows_PD100306.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Felis_silvestris_catus.008_-_A_Coru%C3%B1a.jpg/640px-Felis_silvestris_catus.008_-_A_Coru%C3%B1a.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Felis_silvestris_catus_%28Berlioz%29.JPG/640px-Felis_silvestris_catus_%28Berlioz%29.JPG"
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
  happy: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/So_happy_smiling_cat.jpg/640px-So_happy_smiling_cat.jpg",
  grumpy: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Grumpy_Cat_%2814556024763%29_%28cropped%29.jpg/640px-Grumpy_Cat_%2814556024763%29_%28cropped%29.jpg",
  curious: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Curious_Cat_-_geograph.org.uk_-_873264_2008_%28cropped%29.jpg/640px-Curious_Cat_-_geograph.org.uk_-_873264_2008_%28cropped%29.jpg"
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
