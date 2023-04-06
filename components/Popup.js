export class Popup {
  constructor(selectorPopup) {
    this._popup = document.querySelector(selectorPopup);
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    this.setEventListeners();
  }

  closePopup() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);

  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.closePopup();
    }
  }

  setEventListeners() {
    this.buttonClose = this._popup.querySelector('.popup__close');
    this.buttonClose.addEventListener('click', () => {
      this.closePopup();
    });
    this._popup.addEventListener('click', (e) => {
      if (e.target.classList.contains('popup')) {
        this.closePopup();
      }
    })
  }

}


// const closeByEscape = (evt) => {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');

//     closePopup(openedPopup);
//   }
// };

// bodysPopup.forEach(function (item) {
//   item.addEventListener('click', (e) => {
//     if (e.target.classList.contains('popup')) {
//       closePopup(e.target.closest('.popup'))
//     }
//   });
// })
