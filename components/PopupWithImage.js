import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);

    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupTitle = this._popup.querySelector('.popup__figcaption');
  }

  openPopup(element) {
    this._elementImage = element.querySelector('.cards__image');
    this._elementTitle = element.querySelector('.cards__title');

    this._popupImage.src = this._elementImage.src;
    this._popupImage.alt = this._elementTitle.textContent;
    this._popupTitle.textContent = this._elementTitle.textContent;
    super.openPopup();
  }
}
