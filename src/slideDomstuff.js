import { Slides } from "./imgSlideClassMod";
export default Slides.prototype.toDom = function () {
  const slide = document.createElement("div");
  slide.classList.add("slide");
  const slideImage = new Image(40, 40);
  slideImage.classList.add("slideImage");
  slideImage.src = this.imgSrc;
  slide.appendChild(slideImage);
  const navCircle = document.createElement("input");
  navCircle.setAttribute("type", "radio");
  navCircle.setAttribute("name", "slideCheck");
  navCircle.classList.add(`navCircle_${this.ind}`);
  slide.appendChild(navCircle);
  return slide;
};
