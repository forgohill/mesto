const initialCards = [
  {
    name: 'Пицунда',
    link: './images/grid-places__pizunda.jpg'
  },
  {
    name: 'Биробиджан',
    link: './images/grid-places__birobidzhan.jpg'
  },
  {
    name: 'Благовещенск',
    link: './images/grid-places__blagoveshchensk.jpg'
  },
  {
    name: 'Нижний Новгород',
    link: './images/grid-places__nizhni-novgorod.jpg'
  },
  {
    name: 'Суздаль',
    link: './images/grid-places__suzdal.jpg'
  },
  {
    name: 'Донгуз-Орун',
    link: './images/grid-places__donguz-orun.jpg'
  }
];


//  ==== КОНСТАНТЫ ДЛЯ РЕДАКТИРОВАНИЯ ПРОФИЛЯ
const buttonEdit = document.querySelector('.profile__btn-edit');
const popUpEdit = document.querySelector('.popup_edit');

const profileName = document.querySelector('.profile__name');
const profileMission = document.querySelector('.profile__mission');

const inputName = document.querySelector('.popup__input_name');
const inputMission = document.querySelector('.popup__input_mission');

//  ==== КОНСТАНТЫ ДЛЯ ДОБАВЛЕНИЯ КАРТОЧКИ
const buttonAdd = document.querySelector('.profile__btn-add');
const popUpAdd = document.querySelector('.popup_add');

const inputFoto = document.querySelector('.popup__input_foto');
const inputLink = document.querySelector('.popup__input_link');

//  ==== КОНСТАНТЫ ДЛЯ ПОПАП КАРТИНКИ

const popUpPreview = document.querySelector('.popup_preview');
const popUpImage = document.querySelector('.popup__image');
const popUpFigcaption = document.querySelector('.popup__figcaption');

//  ==== КНОПКИ ЗАКРЫТЬ
const buttonClose = document.querySelectorAll('.popup__close');

//  ==== ФОРМА ПРОФИЛЬ
const formSubmitEdit = document.querySelector('.popup__form_edit');
//  ==== ФОРМА ДОБАВИТЬ
const formCreate = document.querySelector('.popup__form_add');

const sectionCardsWrapper = document.querySelector('.grid-places');
const template = document.querySelector('#template');



// =================
// ================= БЛОК ФУКНЦИЙ ОБРАБОТЧИКОВ=======================
// =================

//  ==== ФУНКЦИЯ НАЖАТИЕ КНОПКИ РЕДАКТИРОВАТЬ
let clickEdit = () => {
  inputName.value = `${profileName.textContent}`;
  inputMission.value = `${profileMission.textContent}`;
  openPopup(popUpEdit);
}

//  ==== ФУНКЦИЯ ОТПРАВКИ ФОРМЫ ПРОФИЛЯ
let clickSubmit = (evt) => {
  evt.preventDefault();

  profileName.textContent = `${inputName.value}`;
  profileMission.textContent = `${inputMission.value}`;
  closePopup(evt);
};


//  ==== ФУНКЦИЯ ЗАКРЫТИЯ
let closePopup = (evt) => {
  console.log('ворк клозет');
  evt.target.closest('.popup_opened').classList.toggle('popup_opened');
}

//  ==== ФУНКЦИЯ ОТКРЫТИЯ
let openPopup = (popup) => {
  popup.classList.add('popup_opened');
};
//  ==== ФУНКЦИЯ ЗАПИСИ НАЗВАНИЯ И ССЫЛКИ В ОТРЫВАЕМОЕ ПРИВЬЮ
let openPreview = (evt) => {
  console.log(evt.target);
  popUpImage.src = evt.target.src;
  popUpFigcaption.textContent = evt.target.closest('.cards').querySelector('.cards__title').textContent;
  openPopup(popUpPreview);
}
//ФУНКЦИЯ ПЕРЕКЛЮЧЕНИЯ ЛАЙКА
let handlerLike = (evt) => {
  evt.target.classList.toggle('cards__btn-like_active');
};

//ФУНКЦИЯ ВКЛЮЧЕНИЯ КАРЗИНЫ
let handlerTrash = (evt) => {
  evt.target.closest('.cards').remove();
};

// ===== РЕНДЕР КАРТОЧЕК ИЗ КОРОБКИ
const renderCards = (wrap, item) => {
  wrap.append(getCardsItems(item));
};

// ===== РЕНДЕР КАРТОЧЕК НОВЫХ
const addNewCards = (wrap, item) => {
  wrap.prepend(getCardsItems(item));
};

//ФУНКЦИЯ ОБРАБОТКА ФОРМЫ СОЗДАНИЯ КАРТОЧКИ
let clickCreate = (evt) => {
  evt.preventDefault();
  let item = {};
  item.name = `${inputFoto.value}`;
  item.link = `${inputLink.value}`;
  addNewCards(sectionCardsWrapper, item);
  closePopup(evt);
}

// ===== СОЗДАНИЕ КАРТОЧКИ
const getCardsItems = (item) => {
  const newItemElement = template.content.cloneNode(true);
  const newItemTitle = newItemElement.querySelector('.cards__title')
  const newItemImage = newItemElement.querySelector('.cards__image')
  newItemTitle.textContent = item.name;
  newItemImage.src = item.link;

  //КНОПКА ЛАЙК
  const buttonLike = newItemElement.querySelector('.cards__btn-like');
  //КНОПКА МУСОРКА
  const buttonTrash = newItemElement.querySelector('.cards__trash')
  //КНОПКА ПРИВЬЮ
  const buttonPreview = newItemElement.querySelector('.cards__image');

  // ===== СЛУШАЕМ ЛАЙК
  buttonLike.addEventListener('click', handlerLike);
  // ===== СЛУШАЕМ МУСОРКУ
  buttonTrash.addEventListener('click', handlerTrash);
  // ===== СЛУШАЕМ ОТКРЫТИЕ  ПРИВЬЮ
  buttonPreview.addEventListener('click', openPreview);
  return newItemElement;
};

// ===== ИНИЦИАЦИЯ КАРТОЧЕК
initialCards.forEach((item) => {
  renderCards(sectionCardsWrapper, item);
});

// ===== СЛУШАЕМ ОТРАВКУ ФОРМА ПРОФИЛЯ
formSubmitEdit.addEventListener('submit', clickSubmit);
// ===== СЛУШАЕМ ОТРАВКУ ФОРМА ДОБАВИТЬ
formCreate.addEventListener('submit', clickCreate);
// ===== СЛУШАЕМ РЕДАКТИРОВАНИЕ
buttonEdit.addEventListener('click', clickEdit);
// ===== СЛУШАЕМ ДОБАВЛЕНИЕ
buttonAdd.addEventListener('click', () => {
  openPopup(popUpAdd);
});
// ===== СЛУШАЕМ ЗАКРЫТИЕ ПОПАПОВ
buttonClose.forEach(function (item) {
  item.addEventListener('click', (e) => {
    closePopup(e);
  })
});

