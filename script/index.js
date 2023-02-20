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

// =================
// ================= БЛОК DOM ЕЛЕМЕНТОВ =======================
// =================

const profileName = document.querySelector('.profile__name');
const profileMission = document.querySelector('.profile__mission');

const buttonEdit = document.querySelector('.profile__btn-edit');
const popUpEdit = document.querySelector('.popup_edit');
const inputName = document.querySelector('.popup__input_name');
const inputMission = document.querySelector('.popup__input_mission');


const buttonAdd = document.querySelector('.profile__btn-add');
const popUpAdd = document.querySelector('.popup_add');
const inputFoto = document.querySelector('.popup__input_foto');
const inputLink = document.querySelector('.popup__input_link');

const popUpPreview = document.querySelector('.popup_preview');
const popUpImage = document.querySelector('.popup__image');
const popUpFigcaption = document.querySelector('.popup__figcaption');

const buttonsClose = document.querySelectorAll('.popup__close');

const formSubmitEdit = document.querySelector('.popup__form_edit');

const formCreate = document.querySelector('.popup__form_add');

const sectionCardsWrapper = document.querySelector('.grid-places');
const template = document.querySelector('#template');

// =================
// ================= БЛОК ФУКНЦИЙ ОБРАБОТЧИКОВ=======================
// =================

let closePopup = (evt) => {
  evt.target.closest('.popup_opened').classList.toggle('popup_opened');
}

let openPopup = (popup) => {
  popup.classList.add('popup_opened');
};

let clickEdit = () => {
  inputName.value = `${profileName.textContent}`;
  inputMission.value = `${profileMission.textContent}`;
  openPopup(popUpEdit);
}
let clickAdd = () => {
  inputFoto.value = '';
  inputLink.value = '';
  openPopup(popUpAdd);
}

let clickSubmit = (evt) => {
  evt.preventDefault();

  profileName.textContent = `${inputName.value}`;
  profileMission.textContent = `${inputMission.value}`;
  closePopup(evt);
};

let openPreview = (evt) => {
  popUpImage.src = evt.target.src;
  popUpFigcaption.textContent = evt.target.closest('.cards').querySelector('.cards__title').textContent;
  openPopup(popUpPreview);
}

let handlerLike = (evt) => {
  evt.target.classList.toggle('cards__btn-like_active');
};

let handlerTrash = (evt) => {
  evt.target.closest('.cards').remove();
};

const renderCards = (wrap, item) => {
  wrap.append(getCardsItems(item));
};

const addNewCards = (wrap, item) => {
  wrap.prepend(getCardsItems(item));
};

let clickCreate = (evt) => {
  evt.preventDefault();
  let item = {};
  item.name = `${inputFoto.value}`;
  item.link = `${inputLink.value}`;
  addNewCards(sectionCardsWrapper, item);
  closePopup(evt);
}

const getCardsItems = (item) => {
  const newItemElement = template.content.cloneNode(true);
  const newItemTitle = newItemElement.querySelector('.cards__title')
  const newItemImage = newItemElement.querySelector('.cards__image')
  newItemTitle.textContent = item.name;
  newItemImage.src = item.link;

  const buttonLike = newItemElement.querySelector('.cards__btn-like');
  const buttonTrash = newItemElement.querySelector('.cards__trash')
  const buttonPreview = newItemElement.querySelector('.cards__image');

  buttonLike.addEventListener('click', handlerLike);
  buttonTrash.addEventListener('click', handlerTrash);
  buttonPreview.addEventListener('click', openPreview);

  return newItemElement;
};

initialCards.forEach((item) => {
  renderCards(sectionCardsWrapper, item);
});

// =================
// ================= БЛОК СЛУШАТЕЛЕЙ СОБЫТИЙ =======================
// =================

formSubmitEdit.addEventListener('submit', clickSubmit);
formCreate.addEventListener('submit', clickCreate);
buttonEdit.addEventListener('click', clickEdit);
buttonAdd.addEventListener('click', clickAdd);
buttonsClose.forEach(function (item) {
  item.addEventListener('click', (e) => {
    closePopup(e);
  })
});

