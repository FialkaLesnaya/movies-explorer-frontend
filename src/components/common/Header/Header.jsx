import { useCallback, useContext, useState } from 'react';
import AccountLinkButton from '../AccountLinkButton/AccountLinkButton';
import Logo from '../Logo/Logo';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import './Header.css';
import { CurrentUserContext } from 'contexts/CurrentUserContext';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentUserContext = useContext(CurrentUserContext);
  const loggedIn =
    currentUserContext.name !== '' && currentUserContext.email !== '';

  const openMenuClick = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenuClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className='header'>
      <Logo />

      {loggedIn && (
        <nav className='header__nav'>
          <NavLink
            to='/movies'
            className={({ isActive }) =>
              'header__link-base header__nav-link' + (isActive ? ' header__nav-link--active' : '')
            }
          >
            Фильмы
          </NavLink>

          <NavLink
          className={({ isActive }) =>
            'header__link-base header__nav-link' + (isActive ? ' header__nav-link--active' : '')
          }
            to='/saved-movies'
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
      )}

      {!loggedIn && (
        <nav className='header__auth-nav'>
          <Link className='header__link-base header__auth-link' to='/signup' >
            Регистрация
          </Link>

          <Link
            className='header__link-base header__auth-link header__auth-link--button'
            to='/signin'
          >
            Войти
          </Link>
        </nav>
      )}

      {loggedIn && (
        <div className='header__menu-button' onClick={openMenuClick}></div>
      )}

      {loggedIn && (
        <div className='header__account-link'>
          <AccountLinkButton />
        </div>
      )}

      <MobileNavigation isMenuOpen={isMenuOpen} onCloseMenu={closeMenuClick} />
    </header>
  );
}

export default Header;
