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
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";



// валидатор формы
const formValidatorEditProfile = new FormValidator(formValidationConfig, formEdit);
const formValidatorAddCard = new FormValidator(formValidationConfig, formCreate);



// =================
// ================= БЛОК ФУКНЦИЙ ОБРАБОТЧИКОВ=======================
// =================


const userInfo = new UserInfo(interactionConfig);


const handleFormEdit = (data) => {
  userInfo.setUserInfo(data);
  editPopup.closePopup();
}

const handleFormAdd = (data) => {
  console.log(data);
  const item = {};
  item.name = `${data.inputFoto}`;
  item.link = `${data.inputLink}`;
  addSectionCard.addItem(createCard(item));
  addPopup.closePopup();
}

const clickEdit = () => {
  const data = userInfo.getUserInfo();
  inputName.value = data.name;
  inputMission.value = data.mission;
  formValidatorEditProfile.resetValidation();
  editPopup.openPopup();
}

const clickAdd = () => {
  formValidatorAddCard.resetValidation();
  addPopup.openPopup();
}
const createCard = (item) => {
  const card = new Card(item, template, handleCardClick);
  const elementCard = card.returnCard();
  return elementCard;
};

const handleCardClick = (elementCard) => {
  popupPreview.openPopup(elementCard);
};

const editPopup = new PopupWithForm(interactionConfig.popUpEdit, handleFormEdit);
const addPopup = new PopupWithForm(interactionConfig.popUpAdd, handleFormAdd);
const popupPreview = new PopupWithImage(interactionConfig.popUpPreview);

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


// =================
// ================= БЛОК СЛУШАТЕЛЕЙ СОБЫТИЙ =======================
// =================


editPopup.setEventListeners();
addPopup.setEventListeners();
popupPreview.setEventListeners();


buttonEdit.addEventListener('click', clickEdit);
buttonAdd.addEventListener('click', clickAdd);


formValidatorEditProfile.enableValidation();
formValidatorAddCard.enableValidation();
