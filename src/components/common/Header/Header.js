import './Header.css';

function Header({ isMainPage }) {
  return (
    <div className='header'>
      <a href='/' className='header__logo'></a>

      {!isMainPage && (
        <div className='header__nav'>
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
        </div>
      )}

      {isMainPage && (
        <div className='header__auth-nav'>
          <a href='/signup' className='header__link-base header__auth-link'>
            Регистрация
          </a>

          <a
            href='/signin'
            className='header__link-base header__auth-link header__auth-link--button'
          >
            Войти
          </a>
        </div>
      )}

      {!isMainPage && (
        <a href='/profile' className='header__link-base header__account-link'>
          <span className='header__account-link-text'>Аккаунт</span>

          <div className='header__account-link-icon'></div>
        </a>
      )}
    </div>
  );
}

export default Header;
