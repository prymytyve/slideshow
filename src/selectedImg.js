import creditsFormatter from "./creditsFormatterMethod";
const imageBox = document.querySelector(".imageBox");
import { Slides } from "./imgSlideClassMod";

export default Slides.prototype.showThis = function (v) {
  const div = document.createElement("div");
  const image = new Image();
  image.src = this.imgSrc;
  div.appendChild(image);
  creditsFormatter;
  div.appendChild(this.creditsFormatter());

  if (v === "right") {
    imageBox.style.justifyContent = "right";
    setTimeout(function transition() {
      div.style.transform = "translateX(-84%)";
    }, 100);
  } else if (v === "left") {
    imageBox.style.justifyContent = "left";
    setTimeout(function transition() {
      div.style.transform = "translateX(84%)";
    }, 100);
  } else {
    imageBox.style.justifyContent = "center";
  }

  return div;
};
