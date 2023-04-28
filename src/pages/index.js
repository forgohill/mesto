import './index.css';

// ИМПОРТ КОНСТАНТ
import {
  buttonEdit,
  buttonAvatar,
  inputName,
  inputMission,
  buttonAdd,
  formEdit,
  formCreate,
  formAvatar,
  template,
  formValidationConfig,
  interactionConfig,
  configApi
} from "../utils/constants.js";

// ИМПОРТ КЛАССОВ
import { Card } from "../components/Card.js";
import { Section } from '../components/Section.js';
import { FormValidator } from "../components/FormValidator.js";
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

// СОЗДАЕМ ОБРАБОТЧИК ПРОФИЛЯ
const userInfo = new UserInfo(interactionConfig);
// СОЗДАЁМ АПИ С КОНИФГУРАЦИЕЙ
const api = new Api(configApi);

// ОБРАБОТЧИК формы редактировать профиль
const handleFormEdit = (data) => {
  patchUserInfo(data);
  editPopup.closePopup();
}

// ОБРАБОТЧИК формы добавления карточки
const handleFormAdd = (data) => {
  setCardsApi(data);
}

// ОБРАБОТЧИК формы редактирования аватара
const handleFormAvatar = (avatarLink) => {
  console.log(avatarLink);
  patchAvatar(avatarLink);
  avatarPopup.closePopup();
}

// ОТКРЫТИЕ попап редактировать профиль
const clickEdit = () => {
  const data = userInfo.getUserInfo();
  inputName.value = data.name;
  inputMission.value = data.mission;
  formValidatorEditProfile.resetValidation();
  editPopup.openPopup();
}

// ОТКРЫТИЕ попап редактировать аватар
const clickAvatar = () => {
  console.log('clickAvatar');
  formValidatorAvatar.resetValidation();
  avatarPopup.openPopup();
}

// ОТКРЫТИЕ попап добавить карточку
const clickAdd = () => {
  formValidatorAddCard.resetValidation();
  addPopup.openPopup();
}

// СОЗДАНИЕ новой карточки
const createCard = (item, myId) => {
  const card = new Card(item,
    template,
    handleCardClick,
    putLikeCard,
    deleteLikeCard,
    handleTrashCards,
    myId);
  const elementCard = card.returnCard();
  return elementCard;
};


// ???
const deleteCard = (card) => {
  card.deleteCard();
  popupConfirmDelete.closePopup(card);
};

// ОБРАБОТЧИК запуск привью при клике на карточку
const handleCardClick = (name, link) => {
  popupPreview.openPopup(name, link);
};


// ОБРАБОТЧИК отправка на сервер команды DELETE
const handleDeleteForm = (card, cardId) => {
  deleteCardApi(card, cardId);
};

// ОБРАБОТЧИК нажатие на кнопку корзина
const handleTrashCards = (card, cardId) => {
  popupConfirmDelete.openPopup(card, cardId);
  popupConfirmDelete.deleteEventListeners();
}

// БЛОК СОЗДАНИЯ ПОПАПов
const editPopup = new PopupWithForm(interactionConfig.selectorPopupEdit, handleFormEdit);
const addPopup = new PopupWithForm(interactionConfig.selectorPopupAdd, handleFormAdd);
const avatarPopup = new PopupWithForm(interactionConfig.selectorPopupAvatar, handleFormAvatar);
const popupPreview = new PopupWithImage(interactionConfig.selectorPopupPreview);
const popupConfirmDelete = new PopupConfirmDelete(interactionConfig.selectorPopupTrash, handleDeleteForm);

// СОЗДАНИЕ класса Секция , слой для введения карточек в body
const addSectionCard = new Section(
  {
    renderer: (item, myId) => {

      addSectionCard.addItem(createCard(item, myId));
    }
  },
  interactionConfig.selectorSectionCardsWrapper
);

// ЗАПУСК ИНИЦИАЛИЗАЦИИ ИНФОРМАЦИИ С СЕРВЕРА
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

// ОБРАБОТКА ОТПРАВКИ ЮЗЕРИНФО НА СЕРВЕР
const patchUserInfo = (data) => {
  editPopup.loadingProcess(true, 'Сохранить...')
  api.patchUserInfo(data)
    .then((data) => {
      userInfo.refreshUserInfo(data);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      editPopup.loadingProcess(false);
    });
}

// ОБРАБОТКА ОТПРАВКИ НОВОЙ КАРТОЧКИ НА СЕРВЕР
const setCardsApi = (data) => {
  addPopup.loadingProcess(true, 'Загрузка...');
  api.setCard({ name: data.inputFoto, link: data.inputLink })
    .then((data) => {
      addSectionCard.addItem(createCard(data, data.owner));
      addPopup.closePopup();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      addPopup.loadingProcess(false);
    });
}

// ОБРАБОТКА ОТПРАВКИ НОВОЙ КАРТОЧКИ НА СЕРВЕР
const deleteCardApi = (card, cardId) => {
  popupConfirmDelete.loadingProcess(true, 'Удаление...');
  api.deleteCard(cardId)
    .then(() => {
      card.deleteCard();
      popupConfirmDelete.closePopup(card);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      popupConfirmDelete.loadingProcess(false);
    });
};

// ОБРАБОТКА ОТПРАВКА НА СЕРВЕР ИНФОРМАЦИИ О ТО ЧТО УСТАНОВИЛИ ЛАЙК
const putLikeCard = (card, likeId) => {
  api.putLikeCard(likeId)
    .then((data) => {
      card.changeLikes(data.likes);
    })
    .catch((err) => {
      console.error(err);
    });

}

// ОБРАБОТКА ОТПРАВКА НА СЕРВЕР ИНФОРМАЦИИ О ТО ЧТО УБРАЛИ ЛАЙК
const deleteLikeCard = (card, likeId) => {
  api.deleteLikeCard(likeId)
    .then((data) => {
      card.changeLikes(data.likes);
    })
    .catch((err) => {
      console.error(err);
    });
}

// ОБРАБОТКА ОТПРАВКА НА СЕРВЕР ОБНОВЛЕНИЯ АВАТАРКИ
const patchAvatar = (avatarLink) => {
  avatarPopup.loadingProcess(true, 'Сохранение...');
  api.patchAvatar(avatarLink)
    .then((data) => {
      userInfo.refreshUserInfo(data);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      avatarPopup.loadingProcess(false);
    });
}

// ИНИЦИАЛИЗИРУЕМ КАРТОЧКИ И ЮЗЕРИНФО С СЕРВЕРА
initialLoadingCardsAndUserInfo();

// =================
// ================= БЛОК СЛУШАТЕЛЕЙ СОБЫТИЙ =======================
// =================
editPopup.setEventListeners();
addPopup.setEventListeners();
popupPreview.setEventListeners();
avatarPopup.setEventListeners();
popupConfirmDelete.setEventListeners();


buttonEdit.addEventListener('click', clickEdit);
buttonAdd.addEventListener('click', clickAdd);
buttonAvatar.addEventListener('click', clickAvatar);


// ВКЛЮЧАЕМ ВАЛИАДЦИЮ НА ПОПОПАПА У КОТОРЫХ ЕСТЬ ИНПУТЫ
formValidatorEditProfile.enableValidation();
formValidatorAddCard.enableValidation();
formValidatorAvatar.enableValidation();


