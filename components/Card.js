export class Card {
  constructor(date, template, openPreview) {
    this._date = date;
    this._template = template.content;
    this._openPreview = openPreview;
  }

  _handlerLike = () => {
    this._likeButton.classList.toggle('cards__btn-like_active');
  }

  _handlerTrash = () => {
    this._elementCard.remove();
    this._elementCard = null;
  }

  _handlerPreview = () => {
    this._openPreview(this._date.link, this._date.name);
  }

  _getTemplateCard = () => {
    this._elementCard = this._template.cloneNode(true).children[0];
  }

  _setEventListeners = () => {
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
      this._handlerPreview();
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
