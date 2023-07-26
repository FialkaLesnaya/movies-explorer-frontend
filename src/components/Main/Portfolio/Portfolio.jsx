import './Portfolio.css';

function Portfolio() {
  const links = [
    {
      title: 'Статичный сайт',
      link: 'https://fialkalesnaya.github.io/russian-travel/',
    },
    {
      title: 'Адаптивный сайт',
      link: 'https://fialkalesnaya.github.io/russian-travel/',
    },
    {
      title: 'Одностраничное приложение',
      link: 'https://fialkalesnaya.github.io/mesto/',
    },
  ];

  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>

      <ul className='portfolio__list'>
        {links.map((item) => (
          <li
              className='portfolio__item-container'>
            <a
              key={item.title}
              href={item.link}
              target='_blank'
              rel='noreferrer'
              className='portfolio__item'
            >
              <h4 className='portfolio__item-title'>{item.title}</h4>

              <div className='portfolio__item-icon'></div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Portfolio;
