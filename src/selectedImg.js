import creditsFormatter from "./creditsFormatterMethod";
import { Slides } from "./imgSlideClassMod";

export default Slides.prototype.showThis = function () {
  const div = document.createElement("div");
  const image = new Image();
  image.src = this.imgSrc;

  div.appendChild(image);
  creditsFormatter;
  div.appendChild(this.creditsFormatter());
  return div;
};
