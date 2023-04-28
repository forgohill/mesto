import { Popup } from './Popup.js';

export class PopupConfirmDelete extends Popup {
  constructor(selectorPopup, submitForm) {
    super(selectorPopup);
    this._submitForm = submitForm;

    this._popupForm = this._popup.querySelector('.popup__form');

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
  }

  deleteEventListeners() {
    this._popupForm.addEventListener('submit', (evt) => {
      this._disableSubmit(evt);
      this._submitForm(this._card, this._cardId);
    });
  }

  closePopup() {
    this._popupForm.reset();
    super.closePopup();
  }
}
