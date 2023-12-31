import { NavLink } from 'react-router-dom';
import AccountLinkButton from '../AccountLinkButton/AccountLinkButton';
import './MobileNavigation.css';

function MobileNavigation({ onCloseMenu, isMenuOpen }) {
  const links = [
    {
      title: 'Главная',
      link: '/',
    },
    {
      title: 'Фильмы',
      link: '/movies',
    },
    {
      title: 'Сохранённые фильмы',
      link: '/saved-movies',
    },
  ];
  return (
    <div
      className={
        'mobile-navigation' + (isMenuOpen ? ' mobile-navigation--active' : '')
      }
    >
      <nav className='mobile-navigation__container'>
        <button
          className='mobile-navigation__close'
          type='button'
          onClick={onCloseMenu}
        ></button>

        <ul className='mobile-navigation__list'>
          {links.map((item) => (
            <li key={item.title} className='mobile-navigation__item'>
              <NavLink
                className={({ isActive }) =>
                  'mobile-navigation__item-link' +
                  (isActive ? ' mobile-navigation__item-link--active' : '')
                }
                to={item.link}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className='mobile-navigation__account-link'>
          <AccountLinkButton />
        </div>
      </nav>
    </div>
  );
}

export default MobileNavigation;
