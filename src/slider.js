const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".slider-prev");
const next = document.querySelector(".slider-next");

let slideIndex = 1;

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((item) => {
    const slide = item;
    slide.style.display = "none";
  });

  slides.forEach(() => {
    // const slide = item;
    // slide.style.display = "block";
    slides[slideIndex - 1].style.display = "block";
  });
}

function plusSlide(n) {
  showSlides((slideIndex += n));
}
if (prev !== null) {
  prev.addEventListener("click", () => {
    plusSlide(-1);
  });
}

if (next !== null) {
  next.addEventListener("click", () => {
    plusSlide(-1);
  });
}

showSlides(slideIndex);
