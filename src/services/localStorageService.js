class LocalStorageService {
  getMovies() {
    return JSON.parse(localStorage.getItem('MOVIES_STORAGE'));
  }

  setMovies(movies) {
    localStorage.setItem('MOVIES_STORAGE', JSON.stringify(movies));
  }

  getSearchValue() {
    return localStorage.getItem('MOVIES_SEARCH_STORAGE') ?? '';
  }

  setSearchValue(searchValue) {
    localStorage.setItem('MOVIES_SEARCH_STORAGE', searchValue);
  }

  getCheckboxValue() {
    return localStorage.getItem('MOVIES_SEARCH_FILTERED_STORAGE') === 'true' ?? false;
  }

  getToken() {
    return localStorage.getItem('JWT_SECRET_KEY');
  }

  setToken(token) {
    localStorage.setItem('JWT_SECRET_KEY', token);
  }

  setCheckboxValue(isFiltered) {
    localStorage.setItem(
      'MOVIES_SEARCH_FILTERED_STORAGE',
      isFiltered.toString()
    );
  }

  reset() {
    localStorage.removeItem('MOVIES_SEARCH_FILTERED_STORAGE');
    localStorage.removeItem('MOVIES_SEARCH_STORAGE');
    localStorage.removeItem('MOVIES_STORAGE');
    localStorage.removeItem('JWT_SECRET_KEY');
  }
}

export const LocalStorage = new LocalStorageService();
