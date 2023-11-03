import "./style.css";
import { imgObjArr } from "./imgObjArray.js";
import { slideArray, Slides } from "./imgSlideClassMod";
import toDom from "./slideDomstuff";
import showThis from "./selectedImg";

const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");
const imageBox = document.querySelector(".imageBox");
const slidesDiv = document.querySelector(".slidesDiv");
const play = document.querySelector("#playCheck");
const playInt = document.querySelector("#playInt");
const playIntDiv = document.querySelector(".playIntDiv");
const check = document.querySelector(".check");

showThis;

imgObjArr.forEach((imgObj) => {
  const slide = new Slides(...Object.values(imgObj));
  toDom;
  slidesDiv.appendChild(slide.toDom());
});

function bigImgHandler(i) {
  const thisRadioBtn = document.querySelector(`.navCircle_${i}`);
  thisRadioBtn.checked = true;
  slideArray.forEach((slide) => {
    const slideIndex = slideArray.indexOf(slide);
    slideIndex === i ? (slide.currentImg = true) : (slide.currentImg = false);
  });
  imageBox.replaceChildren(slideArray[i].showThis());
}

(function firstLoad() {
  bigImgHandler(0);
})();

const navCircles = document.querySelectorAll('input[class^="navCircle"]');
navCircles.forEach((navCircle) => {
  navCircle.addEventListener("click", () => {
    const indexVal = Number(navCircle.getAttribute("class").split("_").pop());
    bigImgHandler(indexVal);
  });
});

function getCurrentImg() {
  const thisImg = slideArray.find((obj) => obj.currentImg === true);
  return slideArray.indexOf(thisImg);
}

leftArrow.addEventListener("click", () => {
  const i = getCurrentImg();
  if (i <= 0) return;
  let prev = i - 1;
  bigImgHandler(prev);
});

rightArrow.addEventListener("click", () => {
  const i = getCurrentImg();
  if (i >= slideArray.length - 1) return;
  let next = i + 1;
  bigImgHandler(next);
});

const playValue = () => {
  let playIntVal = playInt.value;
  if (playIntVal <= 2) {
    playIntVal = 3;
    playInt.setAttribute("value", playIntVal);
  } else if (playIntVal >= 16) {
    playIntVal = 15;
    playInt.setAttribute("value", playIntVal);
  }
  return playIntVal * 1000;
};

let runInterval;

const autoPlay = () => {
  const i = getCurrentImg();
  let next = i + 1;
  if (i >= slideArray.length - 1) next = 0;
  console.log(playValue());
  bigImgHandler(next);
};

play.addEventListener("click", () => {
  function yes() {
    playIntDiv.classList.remove("hidden");
    runInterval = setInterval(autoPlay, playValue());
    play.disabled = true;
    setTimeout(function () {
      play.disabled = false;
    }, 3000);
  }
  function no() {
    playIntDiv.classList.add("hidden");
    clearInterval(runInterval);
  }
  play.checked === true ? yes() : no();
});

check.addEventListener("click", () => {
  clearInterval(runInterval);
  runInterval = setInterval(autoPlay, playValue());
  playInt.value = playValue() / 1000;
});
