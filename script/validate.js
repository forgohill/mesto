const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
};

const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.popup__error_${inputElement.id}`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
}

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.popup__error_${inputElement.id}`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
}

function toggleButton(formElement, config) {
  const buttonSubmit = formElement.querySelector(config.submitButtonSelector);
  const isFormValid = formElement.checkValidity();
  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle(config.inactiveButtonClass, !isFormValid);
}

const isValid = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
}

const disableSubmit = (evt) => {
  evt.preventDefault();
}

const setEventListeners = (formElement, config) => {
  formElement.addEventListener('submit', disableSubmit);
  toggleButton(formElement, config);

  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  inputList.forEach((inputElement) => {
    const formElement = inputElement.closest(config.formSelector);
    hideInputError(formElement, inputElement, config);
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, config);
      toggleButton(formElement, config);
    });
  });
}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(formElement => {
    setEventListeners(formElement, config);
  });
};
