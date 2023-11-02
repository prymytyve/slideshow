export const slideArray = [];

export class Slides {
  constructor(img, creator, creatorLink, webName, imgLink) {
    this._img = img;
    this._creator = creator;
    this._creatorLink = creatorLink;
    this._webName = webName;
    this._imgLink = imgLink;
    this.add(this);
  }
  _checked = false;

  add = (val) => {
    slideArray.push(val);
  };

  get ind() {
    const i = slideArray.indexOf(this);
    return i;
  }
  get imgSrc() {
    return this._img;
  }

  get creator() {
    return this._creator;
  }

  get creatorLink() {
    return this._creatorLink;
  }

  get webName() {
    return this._webName;
  }

  get imgLink() {
    return this._imgLink;
  }

  get currentImg() {
    return this._checked;
  }

  set currentImg(val) {
    this._checked = val;
  }
}
