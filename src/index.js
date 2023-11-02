import "./style.css";
import { imgObjArr } from "./imgObjArray.js";
import { slideArray, Slides } from "./imgSlideClassMod";
import toDom from "./slideDomstuff";
import showThis from "./selectedImg";

const leftArrow = document.querySelector(".leftArrow");
// const rightArrow = document.querySelector(".rightArrow");
// const imageContainer = document.querySelector(".imageContainer");
const imageBox = document.querySelector(".imageBox");
const slidesDiv = document.querySelector(".slidesDiv");

imgObjArr.forEach((imgObj) => {
  const slide = new Slides(...Object.values(imgObj));
  toDom;
  slidesDiv.appendChild(slide.toDom());
});

const navCircles = document.querySelectorAll('input[class^="navCircle"]');
navCircles.forEach((navCircle) => {
  navCircle.addEventListener("click", () => {
    const i = navCircle.getAttribute("class").split("_").pop();
    console.log(slideArray[i]);
    showThis;
    imageBox.replaceChildren(slideArray[i].showThis());
  });
});

leftArrow.addEventListener("click", () => {
  console.log(slideArray);
});
