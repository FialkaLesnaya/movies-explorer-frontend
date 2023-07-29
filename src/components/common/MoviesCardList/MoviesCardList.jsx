import { useCallback } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({
  cardList,
  isFavoriteBlock = false,
  limit = 5,
  onSetLike,
  onDeleteLike,
  savedMovies = [],
}) {
  const savedIds = savedMovies.map(item => item.movieId);

  const getLikedId = useCallback((movieId) => {
    const savedMovie = savedMovies.filter(item => item.movieId === movieId)[0];

    if (savedMovie) {
      return savedMovie._id;
    }

    return null;
  }, [savedMovies]);

  return (
    <div className='movies-card-list'>
      {cardList.slice(0, limit).map((item) => (
        <MoviesCard
          key={item.movieId}
          movie={item}
          likedId={getLikedId(item.movieId)}
          isLiked={savedIds.includes(item.movieId)}
          isFavoriteBlock={isFavoriteBlock}
          onSetLike={onSetLike}
          onDeleteLike={onDeleteLike}
        />
      ))}
    </div>
  );
}

export default MoviesCardList;
