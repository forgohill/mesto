import { initialCards } from "../utils/cards.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

import {
  profileName,
  profileMission,
  buttonEdit,
  popUpEdit,
  inputName,
  inputMission,
  buttonAdd,
  popUpAdd,
  inputFoto,
  inputLink,
  popUpPreview,
  popUpImage,
  popUpFigcaption,
  buttonsClose,
  formEdit,
  formCreate,
  sectionCardsWrapper,
  template,
  bodysPopup,
  formValidationConfig,
} from "../utils/constants.js";




// import { Popup } from "./Popup.js";
// import { PopupWithImage } from "./PopupWithImage.js";
// import { PopupWithForm } from "./PopupWithForm.js";
// import { UserInfo } from "./UserInfo.js";

export class Section {
  constructor(
    { data, renderer },
    containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;

    this._contaner = document.querySelector(containerSelector);

  }



  addItem = (element) => {
    this._contaner.prepend(element);
  }

  renderItems = () => {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });

  }


}
