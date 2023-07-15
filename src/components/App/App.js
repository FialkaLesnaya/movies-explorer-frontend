import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import './App.css';
import ErrorPage from 'components/ErrorPage/ErrorPage';
import Movies from 'components/Movies/Movies';
import SavedMovies from 'components/SavedMovies/SavedMovies';
import Profile from 'components/Profile/Profile';
import Register from 'components/Register/Register';
import Login from 'components/Login/Login';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />} />
        
        <Route
          path='/movies'
          element={<Movies />}
        />

        <Route
          path='/saved-movies'
          element={<SavedMovies />}
        />

        <Route
          path='/profile'
          element={<Profile />}
        />

        <Route
          path='/signin'
          element={<Login />}
        />

        <Route
          path='/signup'
          element={<Register />}
        />

        <Route
          path='*'
          element={<ErrorPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
