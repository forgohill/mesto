import { initialCards } from "./cards.js";
import { Card } from "./Card.js";
// import FormValidator from "./FormValidator.js";
import * as validate from "./validate.js";

// =================
// ================= БЛОК DOM ЕЛЕМЕНТОВ =======================
// =================
// console.log(Card);
// console.dir(Card);
// console.log(validate);
// поля профиля
const profileName = document.querySelector('.profile__name');
const profileMission = document.querySelector('.profile__mission');

// селекторы для редактирования профиля
const buttonEdit = document.querySelector('.profile__btn-edit');
const popUpEdit = document.querySelector('.popup_edit');
const inputName = document.querySelector('.popup__input_name');
const inputMission = document.querySelector('.popup__input_mission');

// селекторы добавления карточки
const buttonAdd = document.querySelector('.profile__btn-add');
const popUpAdd = document.querySelector('.popup_add');
const inputFoto = document.querySelector('.popup__input_foto');
const inputLink = document.querySelector('.popup__input_link');

// селекторы для включения превью
const popUpPreview = document.querySelector('.popup_preview');
const popUpImage = document.querySelector('.popup__image');
const popUpFigcaption = document.querySelector('.popup__figcaption');

// кнопка закрыть
const buttonsClose = document.querySelectorAll('.popup__close');

// форма в попапе редактировать профиль
const formEdit = document.querySelector('.popup__form_edit');
// форма в попапе добавить карточку
const formCreate = document.querySelector('.popup__form_add');

// оболочка для импорта карточек
const sectionCardsWrapper = document.querySelector('.grid-places');
const template = document.querySelector('#template');

// тело попапа для заыртия на оверлее
const bodysPopup = document.querySelectorAll('.popup');

// =================
// ================= БЛОК ФУКНЦИЙ ОБРАБОТЧИКОВ=======================
// =================



const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

const closeByEscape = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');

    closePopup(openedPopup);
  }
};

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

const clickEdit = (popup) => {
  inputName.value = `${profileName.textContent}`;
  inputMission.value = `${profileMission.textContent}`;
  // resetValidation(formEdit, formValidationConfig);
  openPopup(popUpEdit);
}

const clickAdd = () => {
  formCreate.reset();
  // resetValidation(formCreate, formValidationConfig);
  openPopup(popUpAdd);
}

const clickSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = `${inputName.value}`;
  profileMission.textContent = `${inputMission.value}`;
  closePopup(popUpEdit);
};

const openPreview = (evt) => {
  popUpImage.src = evt.target.src;
  popUpImage.alt = evt.target.alt;
  popUpFigcaption.textContent = evt.target.closest('.cards').querySelector('.cards__title').textContent;
  openPopup(popUpPreview);
}

// const handlerLike = (evt) => {
//   evt.target.classList.toggle('cards__btn-like_active');
// };

// const handlerTrash = (evt) => {
//   evt.target.closest('.cards').remove();
// };


const renderCards = (item, template, wrap) => {
  const elementCard = new Card(item, template, openPreview);
  wrap.append(elementCard.returnCard());
};


const addNewCards = (item, template, wrap) => {
  const elementCard = new Card(item, template, openPreview);
  wrap.prepend(elementCard.returnCard());
};

// const renderCards = (wrap, item) => {
//   wrap.append(getCardsItems(item));
// };

// const addNewCards = (wrap, item) => {
//   wrap.prepend(getCardsItems(item));
// };

const clickCreate = (evt) => {
  evt.preventDefault();

  const item = {};
  item.name = `${inputFoto.value}`;
  item.link = `${inputLink.value}`;
  addNewCards(item, template, sectionCardsWrapper);
  evt.target.reset();

  closePopup(popUpAdd);
}


const getCardsItems = (item) => {
  const newItemElement = template.content.cloneNode(true);
  const newItemTitle = newItemElement.querySelector('.cards__title')
  const newItemImage = newItemElement.querySelector('.cards__image')
  newItemTitle.textContent = item.name;
  newItemImage.src = item.link;
  newItemImage.alt = item.name;
  const buttonLike = newItemElement.querySelector('.cards__btn-like');
  const buttonTrash = newItemElement.querySelector('.cards__trash')
  const buttonPreview = newItemElement.querySelector('.cards__image');

  buttonLike.addEventListener('click', handlerLike);
  buttonTrash.addEventListener('click', handlerTrash);
  buttonPreview.addEventListener('click', openPreview);

  return newItemElement;
};

initialCards.forEach((item) => {
  renderCards(item, template, sectionCardsWrapper);
});

// =================
// ================= БЛОК СЛУШАТЕЛЕЙ СОБЫТИЙ =======================
// =================

formEdit.addEventListener('submit', clickSubmit);
formCreate.addEventListener('submit', clickCreate);
buttonEdit.addEventListener('click', clickEdit);
buttonAdd.addEventListener('click', clickAdd);

buttonsClose.forEach(function (item) {
  item.addEventListener('click', (e) => {
    closePopup(e.target.closest('.popup'))
  });
});

bodysPopup.forEach(function (item) {
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup')) {
      closePopup(e.target.closest('.popup'))
    }
  });
})

// validate.enableValidation(validate.formValidationConfig);
