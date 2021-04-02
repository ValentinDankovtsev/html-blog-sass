import { Slider } from "./slider";

describe("Should slider work", () => {
  window.document.body.innerHTML = `
      <div class="slider-prev">
      </div>
      <div class="slider-next">
      </div>
      <li class="slide">
      <img src="" class="shown" alt="img1" />
      </li>
      <li class="slide">
      <img src="" class="shown" alt="img2 />
      </li>
      <li class="slide">
      <img src="" class="shown" alt="img3 />
      </li>
      <li class="slide">
      <img src="" class="shown" alt="img4 />
      </li>
    `;

  const prev = window.document.body.querySelector(".slider-prev");
  const next = window.document.body.querySelector(".slider-next");

  it("We can check if the Slider is the class constructor:", () => {
    const slider = new Slider(".slide");
    expect(slider).toBeInstanceOf(Slider);
    expect(slider).toBeTruthy();
    expect(typeof Slider).toBe("function");
    expect(typeof slider).toBe("object");
  });
  it("We can check work 'prev' and 'next':", () => {
    const slider = new Slider(".slide");
    expect(slider.currentImageIndex).toBe(0);
    next.click();
    expect(slider.currentImageIndex).toBe(1);
    prev.click();
    expect(slider.currentImageIndex).toBe(0);
  });
  it("We can check  showSlides should display block:", () => {
    const currentImageIndex = 0;
    const slider = new Slider(".slide");
    slider.showSlides();
    expect(slider.slides[currentImageIndex].style.display).toBe("block");
  });
  it("We can check work showSlides should display none:", () => {
    const currentImageIndex = 1;
    const slider = new Slider(".slide");
    slider.showSlides();
    expect(slider.slides[currentImageIndex].style.display).toBe("none");
  });
});
