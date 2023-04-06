export class UserInfo {
  constructor({ selectorName, selectorMission }) {
    this._name = document.querySelector(selectorName);
    this._mission = document.querySelector(selectorMission);

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
