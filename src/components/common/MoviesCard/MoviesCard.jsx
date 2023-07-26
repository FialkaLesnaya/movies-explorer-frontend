import './MoviesCard.css';

function MoviesCard({ movie, isFavoriteBlock = false }) {
  const iconStyle = false
    ? 'movies-card__action--fill'
    : 'movies-card__action--not-fill';

  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;

  const formattedTime = hours + 'ч ' + minutes + 'м';

  return (
    <div className='movies-card'>
      <div className='movies-card__header'>
        <div className='movies-card__info'>
          <h3 className='movies-card__title'>{movie.nameRU}</h3>

          <p className='movies-card__time'>{formattedTime}</p>
        </div>

        <button
          className={
            'movies-card__action ' +
            (isFavoriteBlock ? 'movies-card__action--close' : iconStyle)
          }
          type='button'
        ></button>
      </div>

      <img
        src={'https://api.nomoreparties.co/' + movie.image.url}
        alt={movie.nameRU}
        className='movies-card__photo'
      />
    </div>
  );
}

export default MoviesCard;
