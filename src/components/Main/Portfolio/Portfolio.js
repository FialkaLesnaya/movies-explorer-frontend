import './Portfolio.css';

function Portfolio() {
  const links = [
    {
      title: 'Статичный сайт',
    },
    {
      title: 'Адаптивный сайт',
    },
    {
      title: 'Одностраничное приложение',
    },
  ];

  return (
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>

      <div className='portfolio__list'>
        {links.map((item) => (
          <div className='portfolio__item'>
            <h4 className='portfolio__item-title'>{item.title}</h4>

            <div className='portfolio__item-icon'></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
