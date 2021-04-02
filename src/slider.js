export class Slider {
  constructor(selector) {
    this.slides = document.querySelectorAll(selector);
    this.next = document.querySelector(".slider-next");
    this.currentImageIndex = 0;
    this.prev = document.querySelector(".slider-prev");

    if (this.prev) {
      this.prev.addEventListener("click", this.prevShowSlide.bind(this));
    }
    if (this.next) {
      this.next.addEventListener("click", this.nextShowSlide.bind(this));
    }
  }

  prevShowSlide() {
    this.currentImageIndex -= 1;
    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.slides.length - 1;
    }
    this.showSlides();
  }

  nextShowSlide() {
    this.currentImageIndex += 1;
    if (this.currentImageIndex >= this.slides.length) {
      this.currentImageIndex = 0;
    }
    this.showSlides();
  }

  showSlides() {
    this.slides.forEach((item) => {
      const slide = item;
      slide.style.display = "none";
    });
    if (this.slides[this.currentImageIndex]) {
      this.slides[this.currentImageIndex].style.display = "block";
    }
  }
}
