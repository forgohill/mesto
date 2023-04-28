import { Popup } from './Popup.js';

export class PopupConfirmDelete extends Popup {
  constructor(selectorPopup, submitForm) {
    super(selectorPopup);
    this._submitForm = submitForm;

    this._popupForm = this._popup.querySelector('.popup__form');
    // this._popupImage = this._popup.querySelector('.popup__image');
    // this._popupTitle = this._popup.querySelector('.popup__figcaption');

    this._buttonSubmit = this._popupForm.querySelector('.popup__submit');
    this._startNameSubmit = this._buttonSubmit.textContent;
  }

  _disableSubmit(evt) { evt.preventDefault(); }

  loadingProcess(startLoading, message) {
    if (startLoading) {
      this._buttonSubmit.textContent = message;
    } else {
      this._buttonSubmit.textContent = this._startNameSubmit;
    }
  }

  openPopup(card, cardId) {
    super.openPopup();
    this._card = card;
    this._cardId = cardId;
    console.log(this._cardId);
    // this._popupImage.src = link;
    // this._popupImage.alt = name.textContent;
    // this._popupTitle.textContent = name.textContent;

  }

  deleteEventListeners() {
    this._popupForm.addEventListener('submit', (evt) => {
      // debugger;
      this._disableSubmit(evt);

      console.log('сабмит');
      this._submitForm(this._card, this._cardId);
      // this._submitForm(this._getInputValues());
    });
    // super.setEventListeners();
  }

  closePopup() {
    // debugger;

    this._popupForm.reset();
    // console.log(this._popupForm);
    super.closePopup();
  }
}
