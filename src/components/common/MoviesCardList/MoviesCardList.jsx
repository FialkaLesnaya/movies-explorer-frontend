import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({
  cardList,
  isFavoriteBlock = false,
  limit = 5,
  onSetLike,
  onDeleteLike,
  savedIds = [],
}) {
  return (
    <div className='movies-card-list'>
      {cardList.slice(0, limit).map((item) => (
        <MoviesCard
          key={item.movieId}
          movie={item}
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
