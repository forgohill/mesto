export class Card {
  // static _retemplate = document.querySelector('#template').content;


  constructor(date, template, openPreview) {
    this._date = date;
    this._template = template.content;
    this._openPreview = openPreview;
  }

  _getCardsItems() {

  }

  _initialCards() {

  }

  _handlerLike = (evt) => {
    evt.target.classList.toggle('cards__btn-like_active');
  }
  _handlerTrash = (evt) => {
    evt.target.closest('.cards').remove();
  }

  returnCard() {

    this._elementCard = this._template.cloneNode(true).children[0];

    this._elementCard.querySelector('.cards__title').textContent = this._date.name;
    this._elementCard.querySelector('.cards__image').src = this._date.link;
    this._elementCard.querySelector('.cards__image').alt = this._date.name;

    this._elementCard.querySelector('.cards__btn-like').addEventListener('click', this._handlerLike);
    this._elementCard.querySelector('.cards__trash').addEventListener('click', this._handlerTrash);
    this._elementCard.querySelector('.cards__image').addEventListener('click', this._openPreview);

    // this._review = Card._retemplate.cloneNode(true).children[0];
    // this._elementCard.querySelector('.cards');
    // .children[0]
    // console.log(this._elementCard.querySelector('.cards'));
    // console.log(this._elementCard);
    // console.log(this._review);
    // console.log('хуяк');
    // console.log(this._template);
    // console.log(this._date);
    return this._elementCard;
  }


}

// const getCardsItems = (item) => {
//   const newItemElement = template.content.cloneNode(true);
//   const newItemTitle = newItemElement.querySelector('.cards__title')
//   const newItemImage = newItemElement.querySelector('.cards__image')
//   newItemTitle.textContent = item.name;
//   newItemImage.src = item.link;
//   newItemImage.alt = item.name;
//   const buttonLike = newItemElement.
//   const buttonTrash = newItemElement.
//   const buttonPreview = newItemElement.

//   buttonLike.addEventListener('click', handlerLike);
//   buttonTrash.addEventListener('click', handlerTrash);
//   buttonPreview.addEventListener('click', openPreview);

//   return newItemElement;
// };

/*
const openPreview = (evt) => {
  popUpImage.src = evt.target.src;
  popUpImage.alt = evt.target.alt;
  popUpFigcaption.textContent = evt.target.closest('.cards').querySelector('.cards__title').textContent;
  openPopup(popUpPreview);
}

const handlerLike = (evt) => {
  evt.target.classList.toggle('cards__btn-like_active');
};

const handlerTrash = (evt) => {
  evt.target.closest('.cards').remove();
};
*/
