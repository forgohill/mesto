export class UserInfo {
  constructor({ selectorName, selectorMission, selectorAvatar }) {
    this._name = document.querySelector(selectorName);
    this._mission = document.querySelector(selectorMission);
    this._avatar = document.querySelector(selectorAvatar);

  }

  refreshUserInfo(data) {
    this._name.textContent = data.name;
    this._mission.textContent = data.about;
    this._avatar.src = data.avatar;
    this._avatar.alt = `${data.name},${data.about}`;
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
