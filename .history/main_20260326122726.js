

// const hamburger = document.getElementById("hamburger");
// const navMenu = document.getElementById("navMenu");

// hamburger.addEventListener("click", () => {
//   navMenu.classList.toggle("active");
// });

// const radios = document.querySelectorAll('input[name="plan"]');

// const single = document.getElementById("singleContent");
// const double = document.getElementById("doubleContent");

// const toggles = document.querySelectorAll(".toggle");

// single.classList.add("active");
// double.classList.remove("active");

// radios.forEach((radio, i) => {
//   radio.addEventListener("change", () => {

   
//     toggles.forEach(t => t.classList.remove("active"));
//     toggles[i].classList.add("active");

//     if (radio.value === "single") {
//       single.classList.add("active");
//       double.classList.remove("active");
//     } else {
//       double.classList.add("active");
//       single.classList.remove("active");
//     }

//   });
// });

// const images = [
//   "./assets/Perfume1.png",
//   "./assets/Perfume2.png",
//   "./assets/Perfume3.png"
// ];

// let currentIndex = 0;

// const mainImage = document.getElementById("mainImage");
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");
// const dots = document.querySelectorAll(".dot");

// mainImage.src = images[currentIndex];
// updateDots();
// updateButtons();

// function updateDots() {
//   dots.forEach(dot => dot.classList.remove("active"));
//   dots[currentIndex].classList.add("active");
// }

// function updateButtons() {
//   prevBtn.disabled = currentIndex === 0;
//   nextBtn.disabled = currentIndex === images.length - 1;
// }

// nextBtn.addEventListener("click", () => {
//   if (currentIndex < images.length - 1) {
//     currentIndex++;
//     mainImage.src = images[currentIndex];
//     updateDots();
//     updateButtons();
//   }
// })
// prevBtn.addEventListener("click", () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     mainImage.src = images[currentIndex];
//     updateDots();
//     updateButtons();
//   }
// });

// dots.forEach((dot, index) => {
//   dot.addEventListener("click", () => {
//     currentIndex = index;
//     mainImage.src = images[currentIndex];
//     updateDots();
//     updateButtons();
//   });
// });


const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const images = [
  "./assets/Perfume1.png",
  "./assets/Bottle1.png",
  "./assets/Bottle2.png",
  "./assets/Bottle3.png",
  "./assets/Bottle5.png"
];

let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");
const thumbs = document.querySelectorAll(".thumb");

function updateGallery(index) {
  currentIndex = index;
  mainImage.src = images[index];

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index % dots.length);
  });

  thumbs.forEach((t, i) => {
    t.classList.toggle("active", i === index);
  });
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateGallery(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateGallery(currentIndex);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    updateGallery(i);
  });
});

thumbs.forEach((thumb, i) => {
  thumb.addEventListener("click", () => {
    updateGallery(i);
  });
});

updateGallery(0);

const planRadios = document.querySelectorAll("input[name='plan']");
const singleContent = document.getElementById("singleContent");
const doubleContent = document.getElementById("doubleContent");

planRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "single") {
      singleContent.classList.add("active");
      doubleContent.classList.remove("active");
    } else {
      doubleContent.classList.add("active");
      singleContent.classList.remove("active");
    }
    updateCartLink();
  });
});

const cartBtn = document.querySelector(".cart-btn");

function getSelectedValue(name) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.nextElementSibling?.innerText || el.value : "";
}

function updateCartLink() {
  const plan = document.querySelector("input[name='plan']:checked")?.value;

  let fragrance = "";

  if (plan === "single") {
    fragrance = getSelectedValue("fragrance");
  } else {
    const f1 = getSelectedValue("fragrance1");
    const f2 = getSelectedValue("fragrance2");
    fragrance = f1 + "-" + f2;
  }

  cartBtn.onclick = () => {
    window.location.href = `/cart?plan=${plan}&fragrance=${fragrance}`;
  };
}

document.querySelectorAll("input[type='radio']").forEach(r => {
  r.addEventListener("change", updateCartLink);
});

updateCartLink();

const counters = document.querySelectorAll(".stat h2");

function runCounter() {
  counters.forEach(counter => {
    const target = parseInt(counter.innerText);
    let count = 0;

    const update = () => {
      if (count < target) {
        count += 1;
        counter.innerText = count + "%";
        requestAnimationFrame(update);
      } else {
        counter.innerText = target + "%";
      }
    };

    update();
  });
}

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    runCounter();
    observer.disconnect();
  }
});

observer.observe(document.querySelector(".stats-section"));

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    item.classList.toggle("active");

    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});
