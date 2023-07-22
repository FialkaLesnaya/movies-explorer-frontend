import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <h4 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h4>
      
      <div className='footer__content'>
        <p className='footer__copyright'>&#169; 2023</p>
        
        <ul className='footer__links'>
          <li className='footer__link-item'>
            <a className='footer__link' href='https://practicum.yandex.ru/' rel="noreferrer" target='_blank'>Яндекс.Практикум</a>
          </li>
          
          <li className='footer__link-item'>
            <a className='footer__link' href='https://github.com/FialkaLesnaya/' rel="noreferrer" target='_blank'>Github</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
