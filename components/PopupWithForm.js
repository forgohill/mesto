import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
  constructor(selectorPopup, submitForm) {
    super(selectorPopup);
    this._submitForm = submitForm;

    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));

  }

  _disableSubmit(evt) { evt.preventDefault(); }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach(item => {

      // console.log(item.name);
      // console.log(item.value);

      inputValues[item.name] = item.value;
      // console.log(inputValues);

    });
    return inputValues;
  }

  setEventListeners() {
    this._popupForm.addEventListener('submit', (evt) => {
      this._disableSubmit(evt);
      // console.log('click')
      this._submitForm(this._getInputValues());
    });
    super.setEventListeners();
  }

  closePopup() {
    // console.log(super.closePopup);
    // console.log(this._popup);
    // console.log(this._popupForm);
    // console.log(this._inputList);

    // this._getInputValues();

    // console.log(inputValues);
    this._popupForm.reset();
    super.closePopup();


  }
}
