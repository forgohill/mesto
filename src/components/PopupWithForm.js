import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
  constructor(selectorPopup, submitForm,) {
    super(selectorPopup);
    this._submitForm = submitForm;

    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));
  }

  _disableSubmit(evt) { evt.preventDefault(); }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach(item => {
      inputValues[item.name] = item.value;
    });

    console.log(inputValues);
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
    super.closePopup();
  }
}
