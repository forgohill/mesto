import { data } from "autoprefixer";

export class Api {
  constructor(config) {
    // this._config = config;
    this._url = config.url;
    this._headers = config.headers;
  }

  _checkError(res) {
    if (res.ok) { return res.json(); }
    else {
      return Promise.reject("ПРОИЗОШЕЛ БУГУРТ — СТРАДАЙ!")
    }
  }

  _renamerUserInputApi({ inputName, inputMission }) {
    const data = {};
    data.name = inputName;
    data.about = inputMission;
    return data;
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: this._headers
    })
      .then((res) => {
        return this._checkError(res);
      })
  }


  patchUserInfo({ inputName, inputMission }) {
    const data = this._renamerUserInputApi({ inputName, inputMission });
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then((res) => {
        return this._checkError(res);
      })
  }

  getCards() {
    return fetch(`${this._url}cards`, {
      method: "GET",
      headers: this._headers
    })
      .then((res) => {
        return this._checkError(res);
      })
  }

  setCard(data) {
    // const data = this._renamerUserInputApi({ inputName, inputMission });
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then((res) => {
        return this._checkError(res);
      })
  }

  getLikes() {
    return fetch(`${this._url}cards`, {
      method: "GET",
      headers: this._headers
    })
      .then((res) => {
        return this._checkError(res);
      })
  }



}
