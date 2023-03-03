
// объект параметров
const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
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
    console.log(formElement);
    setEventListeners(formElement, formValidationConfig);
  });
};

// устанавливаем события прослушивания
const setEventListeners = (formElement, config) => {

  console.log(formElement);
  console.log(config.inputSelector);


  // список инпутов на странице нод -> превращенный в массив
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));

  console.log(inputList);

  // перебираем список с помощью форич
  // и навешиваем слушатель события 'input'
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, formValidationConfig);
    });
  });
}

// функция проверки на валидность инпута
const isValid = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    // отправляем в функцию елемент слуашемого инпута
    // и стандартное сообщение браузера об ошибке
    showInputError(formElement, inputElement, inputElement.validationMessage, formValidationConfig);

    // console.log(!inputElement.validity.valid);
  } else {
     // отправляем в функцию елемент слуашемого инпута
    hideInputError(formElement, inputElement, formValidationConfig);
    // console.log(!inputElement.validity.valid);
  }
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


enableValidation(formValidationConfig);
