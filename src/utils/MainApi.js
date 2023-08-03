import { LocalStorage } from 'services/localStorageService';

class MainApiService {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return res.json().then((err) => Promise.reject(err.message));
  }

  register(name, password, email) {
    return this._request(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
      }),
    });
  }

  login(password, email) {
    return this._request(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    });
  }

  editProfile(name, email) {
    return this._request(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });
  }

  checkMe() {
    return this._request(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: this._getHeaders(),
    });
  }

  loadSavedMovies() {
    return this._request(`${this.baseUrl}/movies`, {
      headers: this._getHeaders(),
    });
  }

  likeMovie(data) {
    return this._request(`${this.baseUrl}/movies`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify(data),
    });
  }

  deleteLikeMovie(movieId) {
    return this._request(`${this.baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._getHeaders(),
    });
  }

  _getHeaders() {
    return {
      ...this.headers,
      authorization: LocalStorage.getToken(),
    };
  }
}

export const MainApi = new MainApiService({
  baseUrl: 'https://api.listik-fialki.nomoreparties.sbs',
  headers: {
    'Content-Type': 'application/json',
  },
});
