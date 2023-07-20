import './MoviesCard.css';

function MoviesCard() {
  return (
    <div className='movies-card'>
      <div className='movies-card__header'>
        <div className='movies-card__info'>
          <h3 className='movies-card__title'>33 слова о дизайне</h3>

          <p className='movies-card__time'>1ч 47м</p>
        </div>

        <button className='movies-card__action movies-card__action--not-fill' type='button'></button>
      </div>

      <div className='movies-card__photo'></div>
    </div>
  );
}

export default MoviesCard;
