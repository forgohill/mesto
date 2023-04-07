export class Card {
  constructor(date, template, handleCardClick) {
    this._date = date;
    this._template = template.content;
    this._handleCardClick = handleCardClick;
  }

  _handlerLike() {
    this._likeButton.classList.toggle('cards__btn-like_active');
  }

  _handlerTrash() {
    this._elementCard.remove();
    this._elementCard = null;
  }

  _getTemplateCard() {
    this._elementCard = this._template.cloneNode(true).children[0];
  }

  _setEventListeners() {
    this._cardImage = this._elementCard.querySelector('.cards__image');
    this._likeButton = this._elementCard.querySelector('.cards__btn-like');
    this._likeTrash = this._elementCard.querySelector('.cards__trash');

    this._likeButton.addEventListener('click', () => {
      this._handlerLike();
    });
    this._likeTrash.addEventListener('click', () => {
      this._handlerTrash();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._elementCard);
    });
  }

  returnCard() {
    this._getTemplateCard();
    this._setEventListeners();
    this._elementCard.querySelector('.cards__title').textContent = this._date.name;
    this._cardImage.src = this._date.link;
    this._cardImage.alt = this._date.name;



    return this._elementCard;
  }
}
