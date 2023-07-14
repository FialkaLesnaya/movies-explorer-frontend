import './NavTab.css';

function NavTab() {
  const tabs = [
    {
      title: 'О проекте',
      link: '#about-project',
    },
    {
      title: 'Технологии',
      link: '#techs',
    },
    {
      title: 'Студент',
      link: '#about-me',
    },
  ];

  return (
    <div className='nav-tab'>
      {tabs.map((item) => (
        <a href={item.link} className='nav-tab__item'>
          {item.title}
        </a>
      ))}
    </div>
  );
}

export default NavTab;
