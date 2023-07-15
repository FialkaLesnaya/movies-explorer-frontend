import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import './App.css';
import ErrorPage from 'components/ErrorPage/ErrorPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />} />
        
        <Route
          path='/movies'
          element={<div>movies</div>}
        />

        <Route
          path='/saved-movies'
          element={<div>saved-movies</div>}
        />

        <Route
          path='/profile'
          element={<div>Login</div>}
        />

        <Route
          path='/signin'
          element={<div>sign-in</div>}
        />

        <Route
          path='/signup'
          element={<div>sign-in</div>}
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
