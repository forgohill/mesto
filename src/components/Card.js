export class Card {
  constructor(
    { name, link, likes = [], _id, owner }, // json объект с сервера
    // date,
    template, // заготовка карточки
    handleCardClick, // включатель попапИмейдж
    putLikeCard, // отправляем лайк на сервер
    deleteLikeCard, // удаляем лайк с сервера
    handleTrashCards,
    myId) {
    this._name = name; // имя карточки
    this._link = link; // ссылка картинки

    this._counterLikes = likes; // массив с лайками
    this._lengthCounterLikes = likes.length; // длинна массива с лайками

    this._id = _id; // ID конкретной карточки
    this._owner = owner; // объект с данными владельца карточки

    this._template = template.content; // забираем разметку заготовки
    this._handleCardClick = handleCardClick; // включатель попапИмейдж

    this._putLike = putLikeCard; // отправляем лайк на сервер
    this._deleteLike = deleteLikeCard; // удаляем лайк с сервера

    this._handleTrashCards = handleTrashCards; // нажатие на корзину
    this._myId = myId; // объект в котором есть мой ID
  }

  // верификация наличия моего лайка в массиве лайков
  _verificationLike(likes) {
    const arrayIdLike = likes.map((element) => {
      return element._id;
    })

    if (arrayIdLike.some((element) => {
      return element === this._myId._id;
    })) {
      return true
    } return false;
  }


  // изменение состояния лайка
  _handlerLike() {
    if (this._verificationLike(this._counterLikes)) {
      this._deleteLike(this, this._id);
    } else {
      this._putLike(this, this._id);
    }
  }

  // покрасить лайк
  _paintLike(likes) {
    if (this._verificationLike(likes)) {
      this._likeButton.classList.add('cards__btn-like_active');
    } else {
      this._likeButton.classList.remove('cards__btn-like_active');
    }
  }

  // изменить состояние лайка
  changeLikes(likes) {
    this._counterLikes = likes;
    this._sumLikes = this._counterLikes.length;
    this._likeDisplay.textContent = this._sumLikes;
    this._paintLike(likes);
  }

  // удалить карточку
  deleteCard() {
    this._elementCard.remove();
    this._elementCard = null;
  }

  // забираем разметку
  _getTemplateCard() {
    this._elementCard = this._template.cloneNode(true).children[0];
  }

  // навешиваем слушатели
  _setEventListeners() {
    this._cardImage = this._elementCard.querySelector('.cards__image');
    this._likeButton = this._elementCard.querySelector('.cards__btn-like');
    this._trashButton = this._elementCard.querySelector('.cards__trash');

    this._likeButton.addEventListener('click', () => {
      this._handlerLike();
    });

    this._trashButton.addEventListener('click', () => {
      this._handleTrashCards(this, this._id);
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  // рендер карточки
  returnCard() {
    this._getTemplateCard();
    this._setEventListeners();
    this._elementCard.querySelector('.cards__title').textContent = this._name;
    this._likeDisplay = this._elementCard.querySelector('.cards__counter-like');

    this._paintLike(this._counterLikes);

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._likeDisplay.textContent = this._lengthCounterLikes;

    // отключаем корзину на чужих краточках
    if (this._owner._id === this._myId._id) {
      return this._elementCard;
    } else {
      this._trashButton.style.display = 'none';
      return this._elementCard;
    }
  }
}
