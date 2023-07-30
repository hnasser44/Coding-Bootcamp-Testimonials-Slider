const prevButtons = document.querySelectorAll(".prev-btn");
const nextButtons = document.querySelectorAll(".next-btn");

const slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextButtons.forEach((nextButton) => {
  nextButton.addEventListener("click", () => {
    counter++;
    carousel();
  });
});

prevButtons.forEach((prevButton) => {
  prevButton.addEventListener("click", () => {
    counter--;
    carousel();
  });
});

function carousel() {
  // working with slides
  if (counter === slides.length) {
    counter = 0;
  }

  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
