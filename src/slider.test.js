import { showSlides } from "./slider";

describe("showSlides test", () => {
  global.window.document.body.innerHTML = `<div class="slider">
    <div class="slider-wrapper">
      <div class="slider-counter">
        <div class="slider-prev">
          <img src="dest/left.svg" alt="prev" />
        </div>
        <div class="slider-next">
          <img src="dest/right.svg" alt="next" />
        </div>
      </div>
      <div class="slide">
        <img src="/dest/4gWEQhzuTyJmx.png" alt="img1" />
      </div>
      <div class="slide">
        <img src="dest/KZYo98Ve7q.png" alt="img2" />
      </div>
      <div class="slide">
        <img src="dest/yJppRDr8d8spt4PC.png" alt="img3" />
      </div>
      <div class="slide">
        <img src="dest/ZWR9xUOvliy3F.png" alt="img4" />
      </div>
    </div>
  </div>`;
  const prev = document.querySelector(".slider-prev");
  it("should showSlides", () => {
    const event = new window.Event("click", { bubbles: true });
    prev.dispatchEvent(event);
    showSlides();
    expect(showSlides).toBe("function");
  });
});
