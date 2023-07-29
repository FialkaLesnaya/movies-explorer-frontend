import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({
  cardList,
  isFavoriteBlock = false,
  limit = 5,
  handleLike,
  handleDeleteLike,
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
          handleLike={handleLike}
          handleDeleteLike={handleDeleteLike}
        />
      ))}
    </div>
  );
}

export default MoviesCardList;
