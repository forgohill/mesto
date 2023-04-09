import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);

    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupTitle = this._popup.querySelector('.popup__figcaption');
  }

  openPopup(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name.textContent;
    this._popupTitle.textContent = name.textContent;
    super.openPopup();
  }
}
