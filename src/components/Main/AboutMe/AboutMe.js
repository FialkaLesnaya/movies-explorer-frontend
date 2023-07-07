import './AboutMe.css';

function AboutMe() {
  return (
    <div className='about-me'>
      <h2 className='about-me__title'>Студентка</h2>

      <div className='about-me__content'>
        <div className='about-me__info'>
          <h3 className='about-me__name'>Фиалка</h3>

          <p className='about-me__description'>Фронтенд-разработчица, 21 год</p>

          <p className='about-me__story'>
            Мой идеальный дом был бы маленькой норкой хоббита, спрятанной
            глубоко в лесу. это было бы теплое и гостеприимное место для всех,
            кто случайно наткнулся на него.
          </p>

          <a href='#' className='about-me__link'>GitHub</a>
        </div>

        <div className='about-me__photo'></div>
      </div>
    </div>
  );
}

export default AboutMe;
