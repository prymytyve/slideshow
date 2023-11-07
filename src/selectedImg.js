import creditsFormatter from "./creditsFormatterMethod";
import { Slides } from "./imgSlideClassMod";

export default Slides.prototype.showThis = function (v) {
  const div = document.createElement("div");
  div.classList.add("imgAndCredits");
  const image = new Image();
  image.src = this.imgSrc;
  div.appendChild(image);
  creditsFormatter;
  div.appendChild(this.creditsFormatter());

  if (v === "right") {
    div.style.left = "50%";
    setTimeout(function transition() {
      div.style.transform = "translateX(-50%)";
    }, 100);
  } else if (v === "left") {
    div.style.right = "50%";
    setTimeout(function transition() {
      div.style.transform = "translateX(50%)";
    }, 100);
  } else {
    div.classList.add("noTransition");
  }

  return div;
};
