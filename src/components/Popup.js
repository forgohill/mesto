export class Popup {
  constructor(selectorPopup) {
    this._popup = document.querySelector(selectorPopup);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
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
    });
  }
}
