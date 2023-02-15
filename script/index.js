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
const buttonAdd = document.querySelector('.profile__btn-add');
const template = document.querySelector('#template');

const getCardsItems = (item) => {
  const newItemElement = template.content.cloneNode(true);
  const newItemTitle = newItemElement.querySelector('.cards__title')
  const newItemImage = newItemElement.querySelector('.cards__image')
  newItemTitle.textContent = item.name;
  newItemImage.src = item.link;
  return newItemElement;
};

const renderCards = (wrap, item) => {
  wrap.append(getCardsItems(item));
};

initialCards.forEach((item) => {
  console.log(item.name);
  console.log(item.link);
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

const buttonEdit = document.querySelector('.profile__btn-edit');
const popUp = document.querySelector('.popup');
const buttonClose = document.querySelector('.popup__close');

const profileName = document.querySelector('.profile__name');
const profileMission = document.querySelector('.profile__mission');

const inputName = document.querySelector('#name');
const inputMission = document.querySelector('#mission');

const formSubmit = document.querySelector('.popup__form');


let toggleOpenPopup = () => {
  popUp.classList.toggle('popup_opened');
}

function clickEdit() {
  inputName.value = `${profileName.textContent}`;
  inputMission.value = `${profileMission.textContent}`;
  toggleOpenPopup();
}

function clickSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = `${inputName.value}`;
  profileMission.textContent = `${inputMission.value}`;

  toggleOpenPopup();
};

formSubmit.addEventListener('submit', clickSubmit);
buttonEdit.addEventListener('click', clickEdit);
buttonClose.addEventListener('click', toggleOpenPopup);

