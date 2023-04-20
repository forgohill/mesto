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

  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: this._headers
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
}


// `${this._url}me`
