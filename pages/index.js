const buttonEdit = document.querySelector('.profile__btn-edit');
const popUp = document.querySelector('.popup');
const buttonClose = document.querySelector('.popup__close');

const profileName = document.querySelector('.profile__name');
const profileMission = document.querySelector('.profile__mission');

const inputName = document.querySelector('.popup__name');
const inputMission = document.querySelector('.popup__mission');

const buttonSubmit = document.querySelector('.popup__form');

function clickEdit() {
  popUp.classList.add('popup_opened');
  inputName.value = `${profileName.textContent}`;
  inputMission.value = `${profileMission.textContent}`;
}

function clickClose() {
  popUp.classList.remove('popup_opened');
}

function clickSubmit(evt) {
  profileName.textContent = `${inputName.value}`;
  profileMission.textContent = `${inputMission.value}`;
  evt.preventDefault();
}

buttonSubmit.addEventListener('submit', clickSubmit);
buttonEdit.addEventListener('click', clickEdit);
buttonClose.addEventListener('click', clickClose);

