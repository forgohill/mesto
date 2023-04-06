// =================
// ================= БЛОК DOM ЕЛЕМЕНТОВ =======================
// =================
export const profileName = document.querySelector('.profile__name');
export const profileMission = document.querySelector('.profile__mission');

// селекторы для редактирования профиля
export const buttonEdit = document.querySelector('.profile__btn-edit');
export const popUpEdit = document.querySelector('.popup_edit');
export const inputName = document.querySelector('.popup__input_name');
export const inputMission = document.querySelector('.popup__input_mission');

// селекторы добавления карточки
export const buttonAdd = document.querySelector('.profile__btn-add');
export const popUpAdd = document.querySelector('.popup_add');
export const inputFoto = document.querySelector('.popup__input_foto');
export const inputLink = document.querySelector('.popup__input_link');

// селекторы для включения превью
export const popUpPreview = document.querySelector('.popup_preview');
export const popUpImage = document.querySelector('.popup__image');
export const popUpFigcaption = document.querySelector('.popup__figcaption');

// кнопка закрыть
export const buttonsClose = document.querySelectorAll('.popup__close');

// форма в попапе редактировать профиль
export const formEdit = document.querySelector('.popup__form_edit');
// форма в попапе добавить карточку
export const formCreate = document.querySelector('.popup__form_add');

// оболочка для импорта карточек
export const sectionCardsWrapper = document.querySelector('.grid-places');
export const template = document.querySelector('#template');

// тело попапа для закрытия на оверлее
export const bodysPopup = document.querySelectorAll('.popup');

// объектКлассовСелекторов для валидации
export const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
};

// объектКлассовСелекторов для взаимодествия
export const interactionConfig = {
  selectorName: '.profile__name',
  selectorMission: '.profile__mission',

  // селекторы для редактирования профиля
  buttonEdit: '.profile__btn-edit',
  popUpEdit: '.popup_edit',
  inputName: '.popup__input_name',
  inputMission: '.popup__input_mission',

  // селекторы добавления карточки
  buttonAdd: '.profile__btn-add',
  popUpAdd: '.popup_add',
  inputFoto: '.popup__input_foto',
  inputLink: '.popup__input_link',

  // селекторы для включения превью
  popUpPreview: '.popup_preview',
  popUpImage: '.popup__image',
  popUpFigcaption: '.popup__figcaption',

  // кнопка закрыть
  buttonsClose: '.popup__close',

  // форма в попапе редактировать профиль
  formEdit: '.popup__form_edit',
  // форма в попапе добавить карточку
  formCreate: '.popup__form_add',

  // оболочка для импорта карточек
  sectionCardsWrapper: '.grid-places',
  template: '#template',

  // тело попапа для закрытия на оверлее
  bodysPopup: '.popup',
};
