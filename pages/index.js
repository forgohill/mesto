import { initialCards } from "../utils/cards.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";

import {
  profileName,
  profileMission,
  buttonEdit,
  popUpEdit,
  inputName,
  inputMission,
  buttonAdd,
  popUpAdd,
  inputFoto,
  inputLink,
  popUpPreview,
  popUpImage,
  popUpFigcaption,
  buttonsClose,
  formEdit,
  formCreate,
  sectionCardsWrapper,
  template,
  bodysPopup,
  formValidationConfig,
  interactionConfig,
} from "../utils/constants.js";

import { Section } from '../components/Section.js';
import { Popup } from "../components/Popup.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
// =================
// ================= БЛОК DOM ЕЛЕМЕНТОВ =======================
// =================
// const profileName = document.querySelector('.profile__name');
// const profileMission = document.querySelector('.profile__mission');

// // селекторы для редактирования профиля
// const buttonEdit = document.querySelector('.profile__btn-edit');
// const popUpEdit = document.querySelector('.popup_edit');
// const inputName = document.querySelector('.popup__input_name');
// const inputMission = document.querySelector('.popup__input_mission');

// // селекторы добавления карточки
// const buttonAdd = document.querySelector('.profile__btn-add');
// const popUpAdd = document.querySelector('.popup_add');
// const inputFoto = document.querySelector('.popup__input_foto');
// const inputLink = document.querySelector('.popup__input_link');

// // селекторы для включения превью
// const popUpPreview = document.querySelector('.popup_preview');
// const popUpImage = document.querySelector('.popup__image');
// const popUpFigcaption = document.querySelector('.popup__figcaption');

// // кнопка закрыть
// const buttonsClose = document.querySelectorAll('.popup__close');

// // форма в попапе редактировать профиль
// const formEdit = document.querySelector('.popup__form_edit');
// // форма в попапе добавить карточку
// const formCreate = document.querySelector('.popup__form_add');

// // оболочка для импорта карточек
// const sectionCardsWrapper = document.querySelector('.grid-places');
// const template = document.querySelector('#template');

// // тело попапа для заыртия на оверлее
// const bodysPopup = document.querySelectorAll('.popup');

// // объектКлассовСелекторов для валидации
// const formValidationConfig = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__submit',
//   inactiveButtonClass: 'popup__submit_disabled',
//   inputErrorClass: 'popup__input_type_error',
// };

// валидатор формы
const formValidatorEditProfile = new FormValidator(formValidationConfig, formEdit);
const formValidatorAddCard = new FormValidator(formValidationConfig, formCreate);



// =================
// ================= БЛОК ФУКНЦИЙ ОБРАБОТЧИКОВ=======================
// =================



// const closePopup = (popup) => {
//   popup.classList.remove('popup_opened');
//   // document.removeEventListener('keydown', closeByEscape);
// }

// const closeByEscape = (evt) => {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');

//     closePopup(openedPopup);
//   }
// };

// const openPopup = (popup) => {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closeByEscape);
// };

const editPopup = new Popup(interactionConfig.popUpEdit);
const clickEdit = (popup) => {
  inputName.value = `${profileName.textContent}`;
  inputMission.value = `${profileMission.textContent}`;
  formValidatorEditProfile.resetValidation();
  // openPopup(popUpEdit);

  editPopup.openPopup();
}

const addPopup = new Popup(interactionConfig.popUpAdd);
const clickAdd = () => {
  formCreate.reset();
  formValidatorAddCard.resetValidation();
  // openPopup(popUpAdd);

  addPopup.openPopup();
}

const clickSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = `${inputName.value}`;
  profileMission.textContent = `${inputMission.value}`;
  closePopup(popUpEdit);
};

const popupPreview = new PopupWithImage(interactionConfig.popUpPreview);

// const openPreview = (link, name) => {
//   popUpImage.src = link;
//   popUpImage.alt = name;
//   popUpFigcaption.textContent = name;
//   openPopup(popUpPreview);
// }



const createCard = (item) => {
  const card = new Card(item, template, handleCardClick);
  const elementCard = card.returnCard();
  return elementCard;
};

const handleCardClick = (elementCard) => {
  popupPreview.openPopup(elementCard);
}

// const renderCards = (item, wrap) => {
//   const elementCard = createCard(item);
//   wrap.append(elementCard);
// };


// const renderCards = (item) => {
//   const elementCard = createCard(item);
// };


// const addNewCards = (item, wrap) => {
//   const elementCard = createCard(item);
//   wrap.prepend(elementCard);
// };


const addSectionCard = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      addSectionCard.addItem(createCard(item));
    }
  },
  interactionConfig.sectionCardsWrapper

);

addSectionCard.renderItems();



const clickCreate = (evt) => {
  evt.preventDefault();

  const item = {};
  item.name = `${inputFoto.value}`;
  item.link = `${inputLink.value}`;
  addSectionCard.addItem(createCard(item));
  // addNewCards(item, sectionCardsWrapper);

  evt.target.reset();

  closePopup(popUpAdd);
}


// initialCards.forEach((item) => {
//   renderCards(item, sectionCardsWrapper);
// });

// =================
// ================= БЛОК СЛУШАТЕЛЕЙ СОБЫТИЙ =======================
// =================

formEdit.addEventListener('submit', clickSubmit);
formCreate.addEventListener('submit', clickCreate);

buttonEdit.addEventListener('click', clickEdit);
buttonAdd.addEventListener('click', clickAdd);

// buttonsClose.forEach(function (item) {
//   item.addEventListener('click', (e) => {
//     closePopup(e.target.closest('.popup'))
//   });
// });

// bodysPopup.forEach(function (item) {
//   item.addEventListener('click', (e) => {
//     if (e.target.classList.contains('popup')) {
//       closePopup(e.target.closest('.popup'))
//     }
//   });
// })

formValidatorEditProfile.enableValidation();
formValidatorAddCard.enableValidation();
