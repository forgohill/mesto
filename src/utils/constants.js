// селекторы для редактирования профиля
export const buttonEdit = document.querySelector('.profile__btn-edit');
export const inputName = document.querySelector('.popup__input_name');
export const inputMission = document.querySelector('.popup__input_mission');

// селекторы добавления карточки
export const buttonAdd = document.querySelector('.profile__btn-add');

// форма в попапе редактировать профиль
export const formEdit = document.querySelector('.popup__form_edit');
// форма в попапе добавить карточку
export const formCreate = document.querySelector('.popup__form_add');

// оболочка для импорта карточек
export const template = document.querySelector('#template');

// объектКлассовСелекторов для валидации
export const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
};

// объектКлассовСелекторов для взаимодействия
export const interactionConfig = {
  selectorName: '.profile__name',
  selectorMission: '.profile__mission',
  selectorPopupEdit: '.popup_edit',
  selectorPopupAdd: '.popup_add',
  selectorPopupPreview: '.popup_preview',
  selectorSectionCardsWrapper: '.grid-places',
};
