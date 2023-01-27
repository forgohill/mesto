const buttonEdit = document.querySelector('.profile__btn-edit');
const popUp = document.querySelector('.popup');
const buttonClose = document.querySelector('.popup__close');

const profileName = document.querySelector('.profile__name');
const profileMission = document.querySelector('.profile__mission');

const inputName = document.querySelector('#name');
const inputMission = document.querySelector('#mission');

const formSubmit = document.querySelector('.popup__form');

function clickEdit() {
  inputName.placeholder = `${profileName.textContent}`;
  inputMission.placeholder = `${profileMission.textContent}`;
  popUp.classList.add('popup_opened');
}

function clickClose() {
  // обнуляем плейсхолдеры
  inputName.value = "";
  inputMission.value = "";

  popUp.classList.remove('popup_opened');
}

function clickSubmit(evt) {
  evt.preventDefault();


  // конструкции которые не дают записать пустой заголовок
  // и миссию, если инпуты пустые и нажать СОХРАНИТЬ

  if (inputName.value != "") {
    profileName.textContent = `${inputName.value}`;
  } else {
    profileName.textContent = `${inputName.placeholder}`;
  };

  if (inputMission.value != "") {
    profileMission.textContent = `${inputMission.value}`;
  } else {
    profileMission.textContent = `${inputMission.placeholder}`;
  };
}

formSubmit.addEventListener('submit', clickSubmit);
buttonEdit.addEventListener('click', clickEdit);
buttonClose.addEventListener('click', clickClose);

