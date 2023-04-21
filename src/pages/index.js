import './index.css';
// import { initialCards } from "../utils/cards.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";

import {
  buttonEdit,
  inputName,
  inputMission,
  buttonAdd,
  formEdit,
  formCreate,
  template,
  formValidationConfig,
  interactionConfig,
  configApi
} from "../utils/constants.js";

import { Section } from '../components/Section.js';
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from '../components/Api.js'
import { data } from 'autoprefixer';
// валидатор формы
const formValidatorEditProfile = new FormValidator(formValidationConfig, formEdit);
const formValidatorAddCard = new FormValidator(formValidationConfig, formCreate);

// =================
// ================= БЛОК ЭКЗЕМПЛЯРОВ ОБРАБОТЧИКОВ=======================
// =================

const userInfo = new UserInfo(interactionConfig);
// СОЗДАЁМ АПИ С КОНИФГУРАЦИЕЙ
const api = new Api(configApi);

// const cardsApi = () => {
//   api.getCards()
//     // загрузка карточек с API
//     // cardsApi
//     .then((data) => {
//       const addSectionCard = new Section(
//         {
//           data,
//           renderer: (item) => {
//             addSectionCard.addItem(createCard(item));
//           }
//         },
//         interactionConfig.selectorSectionCardsWrapper
//       );

//       addSectionCard.renderItems();
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };


const handleFormEdit = (data) => {
  api.patchUserInfo(data); // отправляем на сервер Имя и Проффессию
  userInfo.setUserInfo(data);
  editPopup.closePopup();
}

const handleFormAdd = (data) => {
  const item = {};
  item.name = `${data.inputFoto}`;
  item.link = `${data.inputLink}`;
  console.log(item);


  api.setCards(item);
  // debugger;
  // cardsApi();
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

const handleCardClick = (name, link) => {
  popupPreview.openPopup(name, link);
};

const editPopup = new PopupWithForm(interactionConfig.selectorPopupEdit, handleFormEdit);
const addPopup = new PopupWithForm(interactionConfig.selectorPopupAdd, handleFormAdd);
const popupPreview = new PopupWithImage(interactionConfig.selectorPopupPreview);

const getUserInfoApi = api.getUserInfo();
// обновление UserInfo
getUserInfoApi
  .then((data) => {
    console.log(data);
    userInfo.refreshUserInfo(data);
  })
  .catch((err) => {
    console.error(err);
  });

// const addSectionCard = new Section(
//   {
//     data: initialCards,
//     renderer: (item) => {
//       addSectionCard.addItem(createCard(item));
//     }
//   },
//   interactionConfig.selectorSectionCardsWrapper
// );

// addSectionCard.renderItems();


const addSectionCard = new Section(
  {
    renderer: (item) => {
      addSectionCard.addItem(createCard(item));
    }
  },
  interactionConfig.selectorSectionCardsWrapper
);



const cardsApi = api.getCards();
// загрузка карточек с API
cardsApi
  .then((data) => {
    // console.log(data);
    addSectionCard.renderItems(data);
  })
  .catch((err) => {
    console.error(err);
  });



/*
const cardsApi = api.getCards();
// загрузка карточек с API
cardsApi
  .then((data) => {
    const addSectionCard = new Section(
      {
        data,
        renderer: (item) => {
          addSectionCard.addItem(createCard(item));
        }
      },
      interactionConfig.selectorSectionCardsWrapper
    );

    addSectionCard.renderItems();
  })
  .catch((err) => {
    console.error(err);
  });
*/




// cardsApi();
// userInfo.getServerUserInfo();

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
