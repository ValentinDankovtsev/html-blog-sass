import { Slider } from "./slider";
jest.mock("./slider");

describe("MockSlider test", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    Slider.mockClear();
  });
  it("We can check if the Slider called the class constructor:", () => {
    const slider = new Slider();
    expect(Slider).toHaveBeenCalledTimes(1);
    expect(slider).toBeInstanceOf(Slider);
    expect(slider).toBeTruthy();
    expect(typeof Slider).toBe("function");
    expect(typeof slider).toBe("object");
  });
  it("Show that mockClear() is working:", () => {
    expect(Slider).not.toHaveBeenCalled();
  });
});
