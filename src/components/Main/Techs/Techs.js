import './Techs.css';

function Techs() {
  const list = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

  return (
    <div className='techs'>
      <h2 className='techs__title'>Технологии</h2>

      <div className='techs__content'>
        <h3 className='techs__content-title'>7 технологий</h3>

        <p className='techs__content-description'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>

        <div className='techs__content-list'>
          {list.map((value) => (
            <div className='techs__content-item'>{value}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Techs;