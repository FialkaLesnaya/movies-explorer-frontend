import AccountLinkButton from '../AccountLinkButton/AccountLinkButton';
import './MobileNavigation.css';

function MobileNavigation() {
  const links = [
    {
      title: 'Главная',
      link: '/',
      isActive: false,
    },
    {
      title: 'Фильмы',
      link: '/movies',
      isActive: true,
    },
    {
      title: 'Сохранённые фильмы',
      link: '/saved-movies',
      isActive: false,
    },
  ];
  return (
    <div className='mobile-navigation'>
      <div className='mobile-navigation__container'>
        <button className='mobile-navigation__close' type='button'></button>

        <ul className='mobile-navigation__list'>
          {links.map((item) => (
            <li className='mobile-navigation__item'>
              <a
                href={item.link}
                className={
                  'mobile-navigation__item-link' +
                  (item.isActive ? ' mobile-navigation__item-link--active' : '')
                }
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='mobile-navigation__account-link'>
          <AccountLinkButton />
        </div>
      </div>
    </div>
  );
}

export default MobileNavigation;
