export class UserInfo {
  constructor({ selectorName, selectorMission, selectorAvatar }) {
    this._name = document.querySelector(selectorName);
    this._mission = document.querySelector(selectorMission);
    this._avatar = document.querySelector(selectorAvatar);

  }

  getServerUserInfo() {
    fetch('https://nomoreparties.co/v1/cohort-64/users/me',
      {
        method: 'GET',
        headers: {
          authorization: 'fedbf8d8-f685-4219-bcb3-9f8a312759fb'
        }
      })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this._name.textContent = data.name;
        this._mission.textContent = data.about;
        this._avatar.src = data.avatar;
        this._avatar.alt = `${data.name},${data.about}`;
      });
  }

  getUserInfo() {

    const data = {};

    data.name = this._name.textContent;
    data.mission = this._mission.textContent;
    return data;
  }


  setUserInfo({ inputName, inputMission }) {
    this._name.textContent = inputName;
    this._mission.textContent = inputMission;
  }

}
