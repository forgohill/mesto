
// объект параметров
const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
  };

// функция «запуск валидации на странице»
function enableValidation (config) {

  // список форм на странице нод -> превращенный в массив
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  // перебираем список с помощью форич
  // и применяем функцию setEventListeners
  formList.forEach(formElement => {
    // console.log(formElement);
    setEventListeners(formElement, formValidationConfig);
  });
};

const disableSubmit = (evt) => {
  evt.preventDefault();
}


// устанавливаем события прослушивания
const setEventListeners = (formElement, config) => {

  formElement.addEventListener('submit', disableSubmit);
  toggleButton(formElement, formValidationConfig);

  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  hideErrorForInput(inputList, formValidationConfig);
  // перебираем список с помощью форич
  // и навешиваем слушатель события 'input'
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButton(formElement, formValidationConfig);
    });
  });
}

const hideErrorForInput = (inputList, config) => {
  inputList.forEach((inputElement) => {
    const formElement = inputElement.closest(config.formSelector);
    hideInputError(formElement, inputElement, formValidationConfig);
  });
}


// функция добавления сообщения об ошибке
const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.popup__error_${inputElement.id}`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
}

// функция удаления сообщения об ошибке
const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.popup__error_${inputElement.id}`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
}

// функция проверки на валидность инпута
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, formValidationConfig);
  } else {
    hideInputError(formElement, inputElement, formValidationConfig);
  }
}

// блокируем и разблокируем кнопку
function toggleButton(formElement, config) {
  const buttonSubmit = formElement.querySelector(config.submitButtonSelector);
  const isFormValid = formElement.checkValidity();

  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle(config.inactiveButtonClass, !isFormValid);
}

