export class Card {
  constructor(
    { name, link, likes = [], _id, owner },
    // date,
    template,
    handleCardClick,
    putLikeCard,
    deleteLikeCard,
    buttonTrashCards,
    myId) {
    this._name = name;
    this._link = link;

    this._counterLikes = likes;
    this._lengthCounterLikes = likes.length;

    this._id = _id;
    this._owner = owner;
    // this._date = date;
    this._template = template.content;
    this._handleCardClick = handleCardClick;

    this._putLike = putLikeCard;
    this._deleteLike = deleteLikeCard;

    this._buttonTrashCards = buttonTrashCards;
    this._myId = myId;
  }

  // _handlerLike() {
  //   this._likeButton.classList.toggle('cards__btn-like_active');
  // }

  // _verificationLike(likes) {
  //   // debugger;

  //   // likes.forEach(element => {
  //   //   console.log(likes._id);
  //   // });

  //   if (
  //     likes.some((element) => {

  //       element._id === this._myId._id;
  //     })) {

  //     return likes;
  //   }
  // }

  _returnlikeDisplay() {
    return this._likeDisplay;
  }

  _verificationLike(likes) {
    // console.log(this._id);
    console.log(this._myId._id);
    const arrayIdLike = likes.map((element) => {
      return element._id;
    })
    console.log(arrayIdLike);

    console.log(
      arrayIdLike.some((element) => {
        // debugger;
        return element === this._myId._id;
        // return element === 'aeb0d4ac2d2484437550c60d';
      })
    )

    if (arrayIdLike.some((element) => {
      // debugger;
      return element === this._myId._id;
      // return element === 'aeb0d4ac2d2484437550c60d';
    })) {
      return true
    } return false;

    // return likes?.some((element) => {
    //   // debugger;
    //   element._id === this._myId._id;
    // });
  }



  _handlerLike() {

    if (this._verificationLike(this._counterLikes)) {
      this._deleteLike(this, this._id);
    } else {
      this._putLike(this, this._id);
    }
  }

  // renameCounterLikes(likes) {
  //   // debugger;
  //   console.log(likes);
  //   this._counterLikes = likes;
  //   // debugger;
  //   this._sumLikes = this._counterLikes.length;
  //   // _returnlikeDisplay()
  //   this._returnlikeDisplay().textContent = this._sumLikes;
  // }


  changeLikes(likes) {
    // console.log(likes);
    this._counterLikes = likes;
    // debugger;
    this._sumLikes = this._counterLikes.length;

    // this._likeDisplay.style.display = 'none';


    // _returnlikeDisplay()
    this._likeDisplay.textContent = this._sumLikes;
    // this._returnlikeDisplay().textContent = this._sumLikes;
    // this._returnlikeDisplay().textContent = 100000;
    // console.log(this._returnlikeDisplay());
    // console.log(this._returnlikeDisplay().textContent);
    // this._likeDisplay.textContent = this._counterLikes.length;

    if (this._verificationLike(likes)) {
      console.log('true');
      this._likeButton.classList.add('cards__btn-like_active');
    } else {
      console.log('false');
      this._likeButton.classList.remove('cards__btn-like_active');
    }
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
      console.log('clickLike');
      this._handlerLike();
    });

    // this._likeButton.addEventListener('click', () => {
    //   this._handlerLike();
    // });


    // this._trashButton.addEventListener('click', () => {
    //   this._handlerTrash();
    // });

    this._trashButton.addEventListener('click', () => {
      this._buttonTrashCards(this, this._id);
    });


    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  returnCard() {
    this._getTemplateCard();
    this._setEventListeners();
    this._elementCard.querySelector('.cards__title').textContent = this._name;


    // this._handlerLike(this._counterLikes);

    // this._cardImage.src = this._date.link;
    // this._cardImage.alt = this._date.name;

    this._likeDisplay = this._template.querySelector('.cards__counter-like');

    this.changeLikes(this._counterLikes);

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    console.log(this._name);
    console.log(this._likeDisplay.textContent);
    // console.log(this._likeDisplay);
    // console.log(this._counterLikes.length);
    this._likeDisplay.textContent = this._lengthCounterLikes;
    // this._likeDisplay.textContent = this._counterLikes.length;

    // console.log(this._likeDisplay);


    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
    // console.log(this._myId);
    // console.log(this._owner);
    // console.log(this._myId);
    if (this._owner._id === this._myId._id) {
      // console.log('ОП НИХУЯ=============================================');
      return this._elementCard;
    } else {
      this._trashButton.style.display = 'none';
      // console.log('ОП ПИЗДЕЦ');
      return this._elementCard;
    }

    // return this._elementCard;
  }
}
