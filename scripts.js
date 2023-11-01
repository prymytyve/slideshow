const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");
const imageContainer = document.querySelector(".imageContainer");
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

function imageAppend() {}

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
  navCircle.addEventListener("click", (e) => {
    imageBox.replaceChildren(image, creditsFormatter(a, b, c, d));
  });
  slide.appendChild(navCircle);
  slidesDiv.appendChild(slide);
  if (navCircle.checked === true) {
    imageBox.replaceChildren(image, creditsFormatter(a, b, c, d));
  }
};

const imageObjArr = [
  {
    imageSrc: "./img/1.jpg",
    creator: "Maëva Vigier",
    creatorLink:
      "https://unsplash.com/@maeva_vgr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    webName: "Unsplash",
    imgLink:
      "https://unsplash.com/photos/a-train-traveling-down-train-tracks-next-to-a-tall-building-Ti8E5_ZoP8s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    imageSrc: "./img/2.jpg",
    creator: "Joshua Kettle",
    creatorLink:
      "https://unsplash.com/@joshuakettle?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    webName: "Unsplash",
    imgLink:
      "https://unsplash.com/photos/a-mountain-range-covered-in-snow-under-a-cloudy-sky-f1Ve8K7y7NQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    imageSrc: "./img/3.jpg",
    creator: "Jack Swords",
    creatorLink:
      "https://unsplash.com/@jswords?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    webName: "Unsplash",
    imgLink:
      "https://unsplash.com/photos/an-aerial-view-of-a-winding-road-near-a-beach-v5-TLuYsOsk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    imageSrc: "./img/4.jpg",
    creator: "NEOM",
    creatorLink:
      "https://unsplash.com/@neom?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    webName: "Unsplash",
    imgLink:
      "https://unsplash.com/photos/a-view-of-a-mountain-range-in-the-desert-t3dlLOhdEzs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    imageSrc: "./img/5.jpg",
    creator: "Travis Leery",
    creatorLink:
      "https://unsplash.com/@jersey_photos?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    webName: "Unsplash",
    imgLink:
      "https://unsplash.com/photos/a-lighthouse-sitting-on-top-of-a-rocky-beach-under-a-cloudy-sky-mEzCmIg_OU0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    imageSrc: "./img/6.jpg",
    creator: "Kristaps Ungurs",
    creatorLink:
      "https://unsplash.com/@kristapsungurs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    webName: "Unsplash",
    imgLink:
      "https://unsplash.com/photos/an-aerial-view-of-a-forest-with-lots-of-trees-PMIYom6wzAc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    imageSrc: "./img/7.jpg",
    creator: "Martin Marek",
    creatorLink:
      "https://unsplash.com/@martys111?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    webName: "Unsplash",
    imgLink:
      "https://unsplash.com/photos/a-view-of-a-mountain-range-covered-in-fog--y9T0XDEUYo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    imageSrc: "./img/8.jpg",
    creator: "Joshua Kettle",
    creatorLink:
      "https://unsplash.com/@joshuakettle?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    webName: "Unsplash",
    imgLink:
      "https://unsplash.com/photos/a-view-of-a-mountain-with-a-very-tall-peak-PhJS-gbFpLE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    imageSrc: "./img/9.jpg",
    creator: "Travis Leery",
    creatorLink:
      "https://unsplash.com/@jersey_photos?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    webName: "Unsplash",
    imgLink:
      "https://unsplash.com/photos/the-sun-is-setting-over-the-water-on-the-beach-GZJGPB2QsbY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    imageSrc: "./img/10.jpg",
    creator: "Valentin Balan",
    creatorLink:
      "https://unsplash.com/@valentinbalan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    webName: "Unsplash",
    imgLink:
      "https://unsplash.com/photos/a-group-of-rock-formations-in-the-desert-FkKuf0airVQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
];
for (let i = 0; i < imageObjArr.length; i++) {
  const { imageSrc, creator, creatorLink, webName, imgLink } = imageObjArr[i];
  imageSlides(imageSrc, creator, creatorLink, webName, imgLink, i);
}
