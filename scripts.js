const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");
const imageContainer = document.querySelector(".imageContainer");
const imageBox = document.querySelector(".imageBox");
const slidesDiv = document.querySelector(".slidesDiv");

const imageSlides = (imgSrc, credit, i) => {
  const slide = document.createElement("div");
  slide.classList.add("slide");
  const image = new Image();
  const slideImage = new Image(50);
  slideImage.classList.add("slideImage");
  image.src = imgSrc;
  slideImage.src = imgSrc;
  slide.appendChild(slideImage);
  const credits = document.createElement("p");
  credits.textContent = credit;
  const navCircle = document.createElement("input");
  navCircle.setAttribute("type", "radio");
  navCircle.setAttribute("name", "slideCheck");
  if (i === 0) navCircle.setAttribute("checked", "checked");
  navCircle.classList.add("navCircle");
  navCircle.addEventListener("click", (e) => {
    imageBox.replaceChildren(image, credits);
  });
  slide.appendChild(navCircle);
  slidesDiv.appendChild(slide);
  if (navCircle.checked === true) imageBox.replaceChildren(image, credits);
};

const imageObjArr = [
  {
    imageSrc: "./img/1.jpg",
    credit: "Photo by: Maëva Vigier",
  },
  {
    imageSrc: "./img/2.jpg",
    credit: "Photo by: Joshua Kettle",
  },
  //{ imageSrc:, credit:}
];

for (let i = 0; i < imageObjArr.length; i++) {
  imageSlides(imageObjArr[i].imageSrc, imageObjArr[i].credit, i);
}

//Photo by <a href="https://unsplash.com/@maeva_vgr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Maëva Vigier</a> on <a href="https://unsplash.com/photos/a-train-traveling-down-train-tracks-next-to-a-tall-building-Ti8E5_ZoP8s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
//Photo by <a href="https://unsplash.com/@joshuakettle?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Joshua Kettle</a> on <a href="https://unsplash.com/photos/a-mountain-range-covered-in-snow-under-a-cloudy-sky-f1Ve8K7y7NQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
