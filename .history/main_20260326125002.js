

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const radios = document.querySelectorAll('input[name="plan"]');

const single = document.getElementById("singleContent");
const double = document.getElementById("doubleContent");

const toggles = document.querySelectorAll(".toggle");

single.classList.add("active");
double.classList.remove("active");

radios.forEach((radio, i) => {
  radio.addEventListener("change", () => {

   
    toggles.forEach(t => t.classList.remove("active"));
    toggles[i].classList.add("active");

    if (radio.value === "single") {
      single.classList.add("active");
      double.classList.remove("active");
    } else {
      double.classList.add("active");
      single.classList.remove("active");
    }

  });
});

const images = [
  "./assets/Perfume1.png",
  "./assets/Perfume2.png",
  "./assets/Perfume3.png"
];

let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

mainImage.src = images[currentIndex];
updateDots();
updateButtons();

function updateDots() {
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

function updateButtons() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === images.length - 1;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    mainImage.src = images[currentIndex];
    updateDots();
    updateButtons();
  }
})
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    mainImage.src = images[currentIndex];
    updateDots();
    updateButtons();
  }
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    mainImage.src = images[currentIndex];
    updateDots();
    updateButtons();
  });
});

const fragrance2Radios = document.querySelectorAll("input[name='fragrance2']");
const mainImage = document.getElementById("mainImage");

fragrance2Radios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      const card = radio.closest(".perfume-card");
      const img = card.querySelector("img");
      mainImage.src = img.src;
    }
  });
});


const fragranceRadios = document.querySelectorAll("input[name='fragrance']");

fragranceRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      const card = radio.closest(".perfume-card");
      const img = card.querySelector("img");
      mainImage.src = img.src;
    }
  });
});