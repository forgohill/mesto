const buttonEdit = document.querySelector('.profile__btn-edit');
const popUp = document.querySelector('.popup');
const buttonClose = document.querySelector('.popup__close');

const profileName = document.querySelector('.profile__name');
const profileMission = document.querySelector('.profile__mission');

const inputName = document.querySelector('#name');
const inputMission = document.querySelector('#mission');

const formSubmit = document.querySelector('.popup__form');


let toggleOpenPopup = () => {
  popUp.classList.toggle('popup_opened');
}

function clickEdit() {
  inputName.value = `${profileName.textContent}`;
  inputMission.value = `${profileMission.textContent}`;
  toggleOpenPopup();
}

function clickClose() {
  toggleOpenPopup();
}

function clickSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = `${inputName.value}`;
  profileMission.textContent = `${inputMission.value}`;

  toggleOpenPopup();
};

formSubmit.addEventListener('submit', clickSubmit);
buttonEdit.addEventListener('click', clickEdit);
buttonClose.addEventListener('click', clickClose);

