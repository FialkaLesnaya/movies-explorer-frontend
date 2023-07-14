import MainTitle from '../MainTitle/MainTitle';
import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className='about-me'>
      <MainTitle title='Студентка' />

      <div className='about-me__content'>
        <div className='about-me__info'>
          <h3 className='about-me__name'>Фиалка</h3>

          <p className='about-me__description'>Фронтенд-разработчица, 21 год</p>

          <p className='about-me__story'>
            Мой идеальный дом был бы маленькой норкой хоббита, спрятанной
            глубоко в лесу. это было бы теплое и гостеприимное место для всех,
            кто случайно наткнулся на него.
          </p>

          <a href='https://github.com/FialkaLesnaya/' rel="noreferrer" target="_blank" className='about-me__link'>
            GitHub
          </a>
        </div>

        <div className='about-me__photo'></div>
      </div>

      <Portfolio />
    </div>
  );
}

export default AboutMe;
