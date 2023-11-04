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
const playLabel = document.querySelector('label[for="playCheck"]');
const slideInterval = document.querySelector("#interval");
const slideIntLabel = document.querySelector('[for="interval"]');
const intervalWrapper = document.querySelector(".intervalWrapper");

showThis;

imgObjArr.forEach((imgObj) => {
  const slide = new Slides(...Object.values(imgObj));
  toDom;
  slidesDiv.insertBefore(slide.toDom(), rightArrow);
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
  bigImgHandler(next);
};

play.addEventListener("click", () => {
  function yes() {
    playIntDiv.classList.remove("hidden");
    runInterval = setInterval(autoPlay, playValue());
    play.disabled = true;
    playLabel.classList.add("unavail");
    setTimeout(function () {
      play.disabled = false;
      playLabel.classList.remove("unavail");
    }, 3000);
    playLabel.textContent = "Stop";
    playLabel.classList.remove("off");
    playLabel.classList.add("on");
  }
  function no() {
    playIntDiv.classList.add("hidden");
    clearInterval(runInterval);
    playLabel.textContent = "Play";
    playLabel.classList.remove("on");
    playLabel.classList.add("off");
  }
  play.checked === true ? yes() : no();
});
check.addEventListener("click", () => {
  slideInterval.disabled = false;
  slideIntLabel.classList.remove("unavail");
  clearInterval(runInterval);
  runInterval = setInterval(autoPlay, playValue());
  playInt.value = playValue() / 1000;
  intervalWrapper.classList.add("hidden");
});

slideInterval.addEventListener("click", () => {
  slideInterval.disabled = true;
  slideIntLabel.classList.add("unavail");
  intervalWrapper.classList.remove("hidden");
});
