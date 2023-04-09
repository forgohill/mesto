export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;

    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._buttonSubmit = formElement.querySelector(config.submitButtonSelector);


  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.popup__error_${inputElement.id}`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.popup__error_${inputElement.id}`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = '';
  }

  _toggleButton() {
    const isFormValid = this._formElement.checkValidity();
    this._buttonSubmit.disabled = !isFormValid;
    this._buttonSubmit.classList.toggle(this._config.inactiveButtonClass, !isFormValid);
  }

  _isValid(inputElement) {

    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement,);
    }
  }

  _disableSubmit(evt) { evt.preventDefault(); }

  _setEventListeners() {
    this._formElement.addEventListener('submit', this._disableSubmit);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButton();
      });
    });
  }

  _resetInputError() {

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  resetValidation() {
    this._resetInputError();
    this._toggleButton();
  }

  enableValidation() {
    this._setEventListeners();
  }
}
