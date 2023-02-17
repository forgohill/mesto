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



const sectionCardsWrapper = document.querySelector('.grid-places');
const template = document.querySelector('#template');

// ===== СОЗДАНИЕ КАРТОЧКИ
const getCardsItems = (item) => {
  const newItemElement = template.content.cloneNode(true);
  const newItemTitle = newItemElement.querySelector('.cards__title')
  const newItemImage = newItemElement.querySelector('.cards__image')
  newItemTitle.textContent = item.name;
  newItemImage.src = item.link;

  return newItemElement;
};
// console.log(newItemElement);
// ===== РЕНДЕР КАРТОЧЕК
const renderCards = (wrap, item) => {
  wrap.append(getCardsItems(item));
};
const addNewCards = (wrap, item) => {
  wrap.prepend(getCardsItems(item));
};
// ===== ИНИЦИАЦИЯ КАРТОЧЕК
initialCards.forEach((item) => {
  // console.log(item.name);
  // console.log(item.link);
  renderCards(sectionCardsWrapper, item);
});

/**
 * <section class="grid-places"></section>
 *
 * <template class="template">
 *  <article class="grid-places__cards cards">
 *    <img src="" alt="Место загруженное пользователем" class="cards__image">
 *  <div class="cards__wrapper">
 *    <h2 class="cards__title"></h2>
 *    <button type="button" aria-label="Понравилось" class="cards__btn-like"></button>
 *  </div>
 *    <button class="cards__trash links"></button>
 *  </article>
 * </template>
 * */


//  ==== КОНСТАНТЫ ДЛЯ РЕДАКТИРОВАНИЯ ПРОФИЛЯ
const buttonEdit = document.querySelector('.profile__btn-edit');
const popUpEdit = document.querySelector('.popup_edit');
// console.log(popUpEdit.classList);

const profileName = document.querySelector('.profile__name');
const profileMission = document.querySelector('.profile__mission');

const inputName = document.querySelector('.popup__input_name');
const inputMission = document.querySelector('.popup__input_mission');

//  ==== КОНСТАНТЫ ДЛЯ ДОБАВЛЕНИЯ КАРТОЧКИ
const buttonAdd = document.querySelector('.profile__btn-add');
const popUpAdd = document.querySelector('.popup_add');
// console.log(popUpAdd.classList);

const inputFoto = document.querySelector('.popup__input_foto');
const inputLink = document.querySelector('.popup__input_link');

//КНОПКА МУСОРКА
const buttonTrash = document.querySelectorAll('.cards__trash')




//  ==== КОНСТАНТЫ ДЛЯ ПОПАП КАРТИНКИ
const buttonPreview = document.querySelectorAll('.cards__image');
// console.log(buttonPreview);
const popUpPreview = document.querySelector('.popup_preview');
const popUpImage = document.querySelector('.popup__image');
const popUpFigcaption = document.querySelector('.popup__figcaption');

//  ==== КНОПКИ ЗАКРЫТЬ
const buttonClose = document.querySelectorAll('.popup__close');

//  ==== ФОРМА ПРОФИЛЬ
const formSubmitEdit = document.querySelector('.popup__form_edit');
//  ==== ФОРМА ДОБАВИТЬ
const formCreate = document.querySelector('.popup__form_add');


//  ==== ФУНКЦИЯ ЗАКРЫТИЯ
let closePopup = (evt) => {
  console.log('ворк клозет');
  // console.log(evt.target.closest('.popup_opened'));
  evt.target.closest('.popup_opened').classList.toggle('popup_opened');
}

//  ==== ФУНКЦИЯ ОТКРЫТИЯ
let openPopup = (popup) => {
  // console.log(popup);
  popup.classList.add('popup_opened');
};

//  ==== ФУНКЦИЯ РЕДАКТИРОВАНИЯ ПРОФИЛЯ
let clickEdit = () => {
  // console.log(evt);
  inputName.value = `${profileName.textContent}`;
  inputMission.value = `${profileMission.textContent}`;
  openPopup(popUpEdit);
}

//  ==== ФУНКЦИЯ ЗАПИСИ НАЗВАНИЯ И ССЫЛКИ В ОТРЫВАЕМОЕ ПРИВЬЮ
let openPreview = (sourcePreview, namePreview) => {
  // console.log(sourcePreview);
  // console.log(namePreview);
  // console.log(popUpImage);
  // console.log(popUpFigcaption);
  popUpImage.src = sourcePreview;
  popUpFigcaption.textContent = namePreview;
  openPopup(popUpPreview);
}

//  ==== ФУНКЦИЯ РЕДАКТИРОВАНИЯ ПРОФИЛЯ ИЗМЕНЕНИЯ ПРОФИЛЯ И ПРОФФЕССИИ
function clickSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = `${inputName.value}`;
  profileMission.textContent = `${inputMission.value}`;

  closePopup(evt);
};

// ===== СЛУШАЕМ ОТРАВКУ ФОРМА ПРОФИЛЯ
formSubmitEdit.addEventListener('submit', clickSubmit);
// ===== СЛУШАЕМ ОТРАВКУ ФОРМА ДОБАВИТЬ

// ===== СЛУШАЕМ РЕДАКТИРОВАНИЕ
buttonEdit.addEventListener('click', clickEdit);
// ===== СЛУШАЕМ ДОБАВЛЕНИЕ
buttonAdd.addEventListener('click', () => {
  openPopup(popUpAdd);
});
// ===== СЛУШАЕМ ЗАКРЫТИЕ ПОПАПОВ
buttonClose.forEach(function (item) {
  item.addEventListener('click', (e) => {
    // e.preventDefault()
    closePopup(e);
  })
});

// ===== СЛУШАЕМ ОТКРЫТИЕ  ПРИВЬЮ
buttonPreview.forEach(function (item) {
  item.addEventListener('click', () => {
    const namePreview = item.parentNode.querySelector('.cards__title').textContent;
    const sourcePreview = item.src;
    // console.log(sorcePreview);
    // console.log(namePreview);
    // e.preventDefault()
    // console.log(item.src);
    // console.log(item.parentNode);
    openPreview(sourcePreview, namePreview);
  })
});
// ===== СЛУШАЕМ КНОПКУ КАРЗИНУ ВНУТРИ ФУНКЦИЯ ЗАКРЫТЬ
buttonTrash.forEach(function (item) {
  item.addEventListener('click', (evt) => {
    // console.log(evt.target.closest('.cards'));
    // console.log(item.parentNode);
    evt.target.closest('.cards').remove();
  })
});


let clickCreate = (evt) => {
  evt.preventDefault();
  let item = {};
  item.name = `${inputFoto.value}`;
  item.link = `${inputLink.value}`;
  // console.log('evt.target');
  console.log('клик');
  console.log(item);
  addNewCards(sectionCardsWrapper, item);
  // closePopup(evt);
}

formCreate.addEventListener('submit', clickCreate);
