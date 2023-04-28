import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
  constructor(selectorPopup, submitForm,) {
    super(selectorPopup);
    this._submitForm = submitForm;

    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));

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

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach(item => {
      inputValues[item.name] = item.value;
    });
    return inputValues;
  }

  setEventListeners() {
    this._popupForm.addEventListener('submit', (evt) => {
      this._disableSubmit(evt);
      this._submitForm(this._getInputValues());
    });
    super.setEventListeners();
  }

  closePopup() {
    this._popupForm.reset();
    console.log(this._buttonSubmit);
    super.closePopup();
  }
}
