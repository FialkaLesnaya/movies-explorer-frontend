import { useCallback, useState } from 'react';
import AccountLinkButton from '../AccountLinkButton/AccountLinkButton';
import Logo from '../Logo/Logo';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import './Header.css';

function Header({ isMainPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuClick = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenuClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className='header'>
      <Logo />

      {!isMainPage && (
        <nav className='header__nav'>
          <a
            href='/movies'
            className='header__link-base header__nav-link header__nav-link--active'
          >
            Фильмы
          </a>

          <a
            href='/saved-movies'
            className='header__link-base header__nav-link'
          >
            Сохраненные фильмы
          </a>
        </nav>
      )}

      {isMainPage && (
        <nav className='header__auth-nav'>
          <a href='/signup' className='header__link-base header__auth-link'>
            Регистрация
          </a>

          <a
            href='/signin'
            className='header__link-base header__auth-link header__auth-link--button'
          >
            Войти
          </a>
        </nav>
      )}

      {!isMainPage && <div className='header__menu-button' onClick={openMenuClick}></div>}

      {!isMainPage && (<div className='header__account-link'><AccountLinkButton /></div>)}

      <MobileNavigation isMenuOpen={isMenuOpen} onCloseMenu={closeMenuClick} />
    </header>
  );
}

export default Header;
