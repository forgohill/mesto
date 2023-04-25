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
  // const item = {};
  // item.name = `${data.inputFoto}`;
  // item.link = `${data.inputLink}`;
  // console.log(item);


  // api.setCard(item);
  setCardsApi(data);
  // debugger;
  // cardsApi();
  // addSectionCard.addItem(createCard(item));
  // addPopup.closePopup();
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

const createCard = (item, myId) => {
  const card = new Card(item,
    template,
    handleCardClick,
    buttonTrashCards
    , myId);
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

const handleDeleteForm = (card) => {
  console.log(card);
  // debugger;
  deleteCard(card);
};

const buttonTrashCards = (card) => {
  console.log('DELETE MUTHER FUCKER');
  popupConfirmDelete.openPopup(card);
  popupConfirmDelete.deleteEventListeners();
}


const editPopup = new PopupWithForm(interactionConfig.selectorPopupEdit, handleFormEdit);
const addPopup = new PopupWithForm(interactionConfig.selectorPopupAdd, handleFormAdd);
const popupPreview = new PopupWithImage(interactionConfig.selectorPopupPreview);

const popupConfirmDelete = new PopupConfirmDelete(interactionConfig.selectorPopupTrash, handleDeleteForm);


const addSectionCard = new Section(
  {
    renderer: (item, myId) => {
      // console.log(item);
      addSectionCard.addItem(createCard(item, myId));
    }
  },
  interactionConfig.selectorSectionCardsWrapper
);




// const getUserInfoApi = api.getUserInfo();
// обновление UserInfo
// getUserInfoApi
//   .then((data) => {
//     // console.log(data);
//     userInfo.refreshUserInfo(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

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

// const getCardsApi = api.getCards();

// загрузка карточек с API
// cardsApi
//   .then((data) => {
//     // console.log(data);
//     addSectionCard.renderItems(data, myId);
//   })
//   .catch((err) => {
//     console.error(err);
//   });


const initialLoadingCardsAndUserInfo = () => {
  Promise.all([api.getUserInfo(),
  api.getCards()])
    .then((data) => {
      userInfo.refreshUserInfo(data[0]);

      // console.log(data[0])// debugger;
      addSectionCard.renderItems(data[1], data[0]);
    })
    .catch((err) => {
      console.error(err);
    })
}



const likesApi = api.getLikes();


likesApi
  .then((data) => {
    // console.log(data);
    const newArr = data.map((item) => {
      return item.likes.length;
    });

    data.forEach((item) => {
      return item.likes.length;
    });

    // console.log(data);
    // console.log(newArr);

    // addSectionCard.renderItems(data);
  })
  .catch((err) => {
    console.error(err);
  });


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

initialLoadingCardsAndUserInfo();


editPopup.setEventListeners();
addPopup.setEventListeners();
popupPreview.setEventListeners();

popupConfirmDelete.setEventListeners();


buttonEdit.addEventListener('click', clickEdit);
buttonAdd.addEventListener('click', clickAdd);


formValidatorEditProfile.enableValidation();
formValidatorAddCard.enableValidation();
