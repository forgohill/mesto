export class Card {
  constructor(
    { name, link, likes = [], _id, owner },
    // date,
    template,
    handleCardClick,
    buttonTrashCards,
    myId) {
    this._name = name;
    this._link = link;

    this._counerLikes = likes;
    this._id = _id;
    this._owner = owner;
    // this._date = date;
    this._template = template.content;
    this._handleCardClick = handleCardClick;
    this._buttonTrashCards = buttonTrashCards;
    this._myId = myId;
  }

  _handlerLike() {
    this._likeButton.classList.toggle('cards__btn-like_active');
  }

  // _handlerTrash() {
  //   this._buttonTrashCards();
  //   this._elementCard.remove();
  //   this._elementCard = null;
  // }


  deleteCard() {
    // this._buttonTrashCards();
    this._elementCard.remove();
    this._elementCard = null;
  }

  _getTemplateCard() {
    this._elementCard = this._template.cloneNode(true).children[0];
  }

  _setEventListeners() {
    this._cardImage = this._elementCard.querySelector('.cards__image');
    this._likeButton = this._elementCard.querySelector('.cards__btn-like');
    this._trashButton = this._elementCard.querySelector('.cards__trash');

    this._likeButton.addEventListener('click', () => {
      this._handlerLike();
    });

    // this._trashButton.addEventListener('click', () => {
    //   this._handlerTrash();
    // });

    this._trashButton.addEventListener('click', () => {
      this._buttonTrashCards(this);
    });


    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  returnCard() {
    this._getTemplateCard();
    this._setEventListeners();
    this._elementCard.querySelector('.cards__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    console.log(this._owner);
    // this._cardImage.src = this._date.link;
    // this._cardImage.alt = this._date.name;

    this._likes = this._template.querySelector('.cards__counter-like');

    // this._likes.textContent = this._date.likes.length;
    // console.log(this._myId);

    return this._elementCard;
  }
}
