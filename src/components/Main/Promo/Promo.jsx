import NavTab from '../NavTab/NavTab';
import './Promo.css';

function Promo() {
  return (
    <div className='promo'>
      <div className='promo__banner'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>

        <div className='promo__nav'>
          <NavTab />
        </div>
      </div>
    </div>
  );
}

export default Promo;
