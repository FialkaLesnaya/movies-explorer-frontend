import './MoviesCard.css';

function MoviesCard({
  item: { title, duration, isLiked, image },
  isFavoriteBlock = false,
}) {
  const iconStyle = isLiked
    ? 'movies-card__action--fill'
    : 'movies-card__action--not-fill';

  return (
    <div className='movies-card'>
      <div className='movies-card__header'>
        <div className='movies-card__info'>
          <h3 className='movies-card__title'>{title}</h3>

          <p className='movies-card__time'>{duration}</p>
        </div>

        <button
          className={
            'movies-card__action ' +
            (isFavoriteBlock ? 'movies-card__action--close' : iconStyle)
          }
          type='button'
        ></button>
      </div>

      <img src={image} alt={title} className='movies-card__photo'/>
    </div>
  );
}

export default MoviesCard;
