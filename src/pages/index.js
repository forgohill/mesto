import './index.css';
// import { initialCards } from "../utils/cards.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";

import {
  buttonEdit,
  buttonAvatar,
  inputName,
  inputMission,
  buttonAdd,
  formEdit,
  formCreate,
  formAvatar,
  formTrash,
  template,
  formValidationConfig,
  interactionConfig,
  configApi
} from "../utils/constants.js";

import { Section } from '../components/Section.js';
import { PopupConfirmDelete } from "../components/PopupConfirmDelete.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from '../components/Api.js'
import { data } from 'autoprefixer';
// валидатор формы
const formValidatorEditProfile = new FormValidator(formValidationConfig, formEdit);
const formValidatorAddCard = new FormValidator(formValidationConfig, formCreate);
// валидация формы попап аватара
const formValidatorAvatar = new FormValidator(formValidationConfig, formAvatar);

// =================
// ================= БЛОК ЭКЗЕМПЛЯРОВ ОБРАБОТЧИКОВ=======================
// =================

const userInfo = new UserInfo(interactionConfig);
// СОЗДАЁМ АПИ С КОНИФГУРАЦИЕЙ
const api = new Api(configApi);


const handleFormEdit = (data) => {
  api.patchUserInfo(data); // отправляем на сервер Имя и Проффессию
  userInfo.setUserInfo(data);
  editPopup.closePopup();
}

const handleFormAdd = (data) => {
  setCardsApi(data);
}

const handleFormAvatar = (avatarLink) => {
console.log(avatarLink);
patchAvatar(avatarLink);
avatarPopup.closePopup();
}

const clickEdit = () => {
  const data = userInfo.getUserInfo();
  inputName.value = data.name;
  inputMission.value = data.mission;
  formValidatorEditProfile.resetValidation();
  editPopup.openPopup();
}

const clickAvatar = () => {
  console.log('clickAvatar');
  formValidatorAvatar.resetValidation();
  avatarPopup.openPopup();
}


const clickAdd = () => {
  formValidatorAddCard.resetValidation();
  addPopup.openPopup();
}

const createCard = (item, myId) => {
  const card = new Card(item,
    template,
    handleCardClick,
    putLikeCard,
    deleteLikeCard,
    buttonTrashCards,
    myId);
  const elementCard = card.returnCard();
  return elementCard;
};

const deleteCard = (card) => {
  card.deleteCard();
  popupConfirmDelete.closePopup(card);
};

const handleCardClick = (name, link) => {
  popupPreview.openPopup(name, link);
};

const handleDeleteForm = (card, cardId) => {
  console.log(card);
  console.log(cardId);

  deleteCardApi(card, cardId);
};

const buttonTrashCards = (card, cardId) => {
  console.log('DELETE MUTHER FUCKER');
  console.log(cardId);
  popupConfirmDelete.openPopup(card, cardId);
  popupConfirmDelete.deleteEventListeners();
}


const editPopup = new PopupWithForm(interactionConfig.selectorPopupEdit, handleFormEdit);
const addPopup = new PopupWithForm(interactionConfig.selectorPopupAdd, handleFormAdd);
const avatarPopup = new PopupWithForm(interactionConfig.selectorPopupAvatar, handleFormAvatar);

const popupPreview = new PopupWithImage(interactionConfig.selectorPopupPreview);



const popupConfirmDelete = new PopupConfirmDelete(interactionConfig.selectorPopupTrash, handleDeleteForm);


const addSectionCard = new Section(
  {
    renderer: (item, myId) => {

      addSectionCard.addItem(createCard(item, myId));
    }
  },
  interactionConfig.selectorSectionCardsWrapper
);




const initialLoadingCardsAndUserInfo = () => {
  Promise.all([api.getUserInfo(),
  api.getCards()])
    .then((data) => {
      userInfo.refreshUserInfo(data[0]);
      addSectionCard.renderItems(data[1], data[0]);
    })
    .catch((err) => {
      console.error(err);
    })
}


const setCardsApi = (data) => {
  // console.log(item);
  api.setCard({ name: data.inputFoto, link: data.inputLink })
    .then((data) => {
      console.log(data);
      addSectionCard.addItem(createCard(data, data.owner));
      addPopup.closePopup();
    })
    .catch((err) => {
      console.error(err);
    });
}

const deleteCardApi = (card, cardId) => {
  api.deleteCard(cardId)
    .then(() => {
      card.deleteCard();
      popupConfirmDelete.closePopup(card);
    })
    .catch((err) => {
      console.error(err);
    });
};


const putLikeCard = (card, likeId) => {
  api.putLikeCard(likeId)
    .then((data) => {
      card.changeLikes(data.likes);
    })
    .catch((err) => {
      console.error(err);
    });

}

const deleteLikeCard = (card, likeId) => {
  api.deleteLikeCard(likeId)
    .then((data) => {
      card.changeLikes(data.likes);
    })
    .catch((err) => {
      console.error(err);
    });
}


const patchAvatar = (avatarLink) => {
  api.patchAvatar(avatarLink)
  .then((data) => {


    userInfo.refreshUserInfo(data);

  })
  .catch((err) => {
    console.error(err);
  });
}

// =================
// ================= БЛОК СЛУШАТЕЛЕЙ СОБЫТИЙ =======================
// =================

initialLoadingCardsAndUserInfo();


editPopup.setEventListeners();
addPopup.setEventListeners();
popupPreview.setEventListeners();
avatarPopup.setEventListeners();


popupConfirmDelete.setEventListeners();


buttonEdit.addEventListener('click', clickEdit);
buttonAdd.addEventListener('click', clickAdd);
buttonAvatar.addEventListener('click', clickAvatar);

formValidatorEditProfile.enableValidation();
formValidatorAddCard.enableValidation();
formValidatorAvatar.enableValidation();
