import "./style.css";
import { imgObjArr } from "./imgObjArray.js";

const leftArrow = document.querySelector(".leftArrow");
// const rightArrow = document.querySelector(".rightArrow");
// const imageContainer = document.querySelector(".imageContainer");
const imageBox = document.querySelector(".imageBox");
const slidesDiv = document.querySelector(".slidesDiv");

const creditsFormatter = (creator, creatorLink, webName, imgLink) => {
  const link1 = document.createElement("a");
  link1.textContent = creator;
  link1.setAttribute("href", creatorLink);
  const link2 = document.createElement("a");
  link2.textContent = webName;
  link2.setAttribute("href", imgLink);
  const credit = document.createElement("div");
  credit.classList.add("credit");
  const span1 = document.createElement("span");
  span1.textContent = "Photo by: ";
  const span2 = document.createElement("span");
  span2.textContent = " on ";
  credit.appendChild(span1);
  credit.appendChild(link1);
  credit.appendChild(span2);
  credit.appendChild(link2);
  return credit;
};

// function imageAppend() {}

const imageSlides = (imgSrc, a, b, c, d, i) => {
  const slide = document.createElement("div");
  slide.classList.add("slide");
  const image = new Image();
  const slideImage = new Image(50);
  slideImage.classList.add("slideImage");
  image.src = imgSrc;
  slideImage.src = imgSrc;
  slide.appendChild(slideImage);
  const navCircle = document.createElement("input");
  navCircle.setAttribute("type", "radio");
  navCircle.setAttribute("name", "slideCheck");
  if (i === 0) navCircle.setAttribute("checked", "checked");
  navCircle.classList.add("navCircle");
  navCircle.addEventListener("click", () => {
    imageBox.replaceChildren(image, creditsFormatter(a, b, c, d));
  });
  slide.appendChild(navCircle);
  slidesDiv.appendChild(slide);
  if (navCircle.checked === true) {
    imageBox.replaceChildren(image, creditsFormatter(a, b, c, d));
  }
};

for (let i = 0; i < imgObjArr.length; i++) {
  const { imageSrc, creator, creatorLink, webName, imgLink } = imgObjArr[i];
  imageSlides(imageSrc, creator, creatorLink, webName, imgLink, i);
}

leftArrow.addEventListener("click", () => {
  // const radios = document.querySelectorAll('input[type="radio"]');
  // const checkedRadio = document.querySelector('input[type="radio"]:checked');
  // // const i = radios.indexOf(checkedRadio);
  // console.log(radios, checkedRadio);
});
