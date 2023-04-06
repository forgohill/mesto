export class UserInfo {
  constructor({ selectorName, selectorMission }) {
    this._name = document.querySelector(selectorName);
    this._mission = document.querySelector(selectorMission);

  }

  getUserInfo() {
    const data = {};

    data.name = this._name.textContent;
    data.mission = this._mission.textContent;

    console.log(data);

    return data;

  }


  setUserInfo({ inputName, inputMission }) {
    // console.log(data)

    this._name.textContent = inputName;
    this._mission.textContent = inputMission;

    console.log(inputMission);
    console.log(inputName);

  }

}
