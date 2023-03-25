export class Card {
  constructor(date, template, openPreview) {
    this._date = date;
    this._template = template.content;
    this._openPreview = openPreview;
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

    return this._elementCard;
  }
}
