// селекторы для редактирования профиля
export const buttonEdit = document.querySelector('.profile__btn-edit');
export const buttonAvatar = document.querySelector('.profile__avatar-button');
export const inputName = document.querySelector('.popup__input_name');
export const inputMission = document.querySelector('.popup__input_mission');

// селекторы добавления карточки
export const buttonAdd = document.querySelector('.profile__btn-add');

// форма в попапе редактировать профиль
export const formEdit = document.querySelector('.popup__form_edit');
// форма в попапе изменить аватар
export const formAvatar = document.querySelector('.popup__form_avatar');

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
  selectorAvatar: '.profile__avatar',
  selectorPopupEdit: '.popup_edit',
  selectorPopupAdd: '.popup_add',
  selectorPopupAvatar: '.popup_avatar',
  selectorPopupPreview: '.popup_preview',
  selectorPopupTrash: '.popup_trash',
  selectorSectionCardsWrapper: '.grid-places',
};

export const configApi = {
  url: 'https://nomoreparties.co/v1/cohort-64/',
  headers: {
    'content-type': 'application/json',
    authorization: 'fedbf8d8-f685-4219-bcb3-9f8a312759fb'
  }
};
