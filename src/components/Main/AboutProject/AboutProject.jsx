import MainTitle from '../MainTitle/MainTitle';
import './AboutProject.css';

function AboutProject() {
  return (
    <div className='about-project'>
      <MainTitle title='О проекте' />

      <div className='about-project__info'>
        <div className='about-project__info-item'>
          <h3 className='about-project__info-title'>
            Дипломный проект включал 5 этапов
          </h3>

          <p className='about-project__info-description'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>

        <div className='about-project__info-item'>
          <h3 className='about-project__info-title'>
            На выполнение диплома ушло 5 недель
          </h3>

          <p className='about-project__info-description'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className='about-project__duration'>
        <div className='about-project__duration-item'>
          <div className='about-project__duration-title'>1 неделя</div>
          
          <p className='about-project__duration-description'>Back-end</p>
        </div>

        <div className='about-project__duration-item about-project__duration-item--light'>
          <div className='about-project__duration-title'>4 недели</div>
          
          <p className='about-project__duration-description'>Front-end</p>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
