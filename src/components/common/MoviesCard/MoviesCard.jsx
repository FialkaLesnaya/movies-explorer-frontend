import { useCallback } from 'react';
import './MoviesCard.css';

function MoviesCard({
  movie,
  isFavoriteBlock = false,
  isLiked = false,
  onSetLike,
  onDeleteLike,
  likedId,
}) {
  const iconStyle = isLiked
    ? 'movies-card__action--fill'
    : 'movies-card__action--not-fill';

  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;

  const formattedTime = hours + 'ч ' + minutes + 'м';

  const onClick = useCallback(
    (event) => {
      event.preventDefault();
      if (isLiked) {
        onDeleteLike(likedId);
        return;
      }
      onSetLike(movie);
    },
    [isLiked, movie, onSetLike, onDeleteLike, likedId]
  );

  return (
    <a
      className='movies-card'
      href={movie.trailerLink}
      target='_blank'
      rel='noreferrer'
    >
      <div className='movies-card__header'>
        <div className='movies-card__info'>
          <h3 className='movies-card__title' title={movie.nameRu}>{movie.nameRU}</h3>

          <p className='movies-card__time'>{formattedTime}</p>
        </div>

        <button
          className={
            'movies-card__action ' +
            (isFavoriteBlock ? 'movies-card__action--close' : iconStyle)
          }
          type='button'
          onClick={onClick}
        ></button>
      </div>

      <img
        src={movie.image}
        alt={movie.nameRU}
        className='movies-card__photo'
      />
    </a>
  );
}

export default MoviesCard;
