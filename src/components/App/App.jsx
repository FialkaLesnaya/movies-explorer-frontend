import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import './App.css';
import ErrorPage from 'components/ErrorPage/ErrorPage';
import Movies from 'components/Movies/Movies';
import SavedMovies from 'components/SavedMovies/SavedMovies';
import Profile from 'components/Profile/Profile';
import Register from 'components/Register/Register';
import Login from 'components/Login/Login';
import { useCallback, useEffect, useState } from 'react';
import {
  CurrentUserContext,
  currentUserObject,
} from 'contexts/CurrentUserContext';
import { MainApi } from 'utils/MainApi';
import { LocalStorage } from 'services/localStorageService';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(currentUserObject);
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    setLoggedIn(true);
  }, []);

  const handleUserDataChange = useCallback((formData) => {
    setCurrentUser(formData);
  }, []);

  const handeLogOut = useCallback(() => {
      LocalStorage.reset();
      setLoggedIn(false);
      setCurrentUser(currentUserObject);
      navigate("/signin", { replace: true });
  }, [navigate]);

  useEffect(() => {
    if (LocalStorage.getToken()) {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      MainApi.checkMe()
        .then((data) => {
          setCurrentUser(data);
          
        })
        .catch((err) => {
          console.log(`Ошибка загрузки данных ${err}`);
        });
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Main />} />

          <Route path='/movies' element={<Movies />} />

          <Route path='/saved-movies' element={<SavedMovies />} />

          <Route
            path='/profile'
            element={<Profile handeLogOut={handeLogOut} handleUserDataChange={handleUserDataChange} />}
          />

          <Route path='/signin' element={<Login handleLogin={handleLogin} />} />

          <Route path='/signup' element={<Register />} />

          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
