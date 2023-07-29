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
      headers: this.headers,
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
      headers: this.headers,
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    });
  }

  editProfile(name, email) {
    return this._request(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });
  }
  
  checkMe() {
    return this._request(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        ...this.headers,
      },
    });
  }

  loadSavedMovies() {
    return this._request(`${this.baseUrl}/movies`, { headers: this.headers });
  }

  likeMovie(data) {
    return this._request(`${this.baseUrl}/movies`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data),
    });
  }

  deleteLikeMovie(movieId) {
    return this._request(`${this.baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this.headers,
    });
  }
}

export const MainApi = new MainApiService({
  baseUrl: 'http://localhost:3001',
  headers: {
    authorization: localStorage.getItem('JWT_SECRET_KEY'),
    'Content-Type': 'application/json',
  },
});
