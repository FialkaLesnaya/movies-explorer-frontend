import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({
  cardList,
  isFavoriteBlock = false,
  limit = 5,
}) {

  return (
    <div className='movies-card-list'>
      {cardList.slice(0, limit).map((item) => (
        <MoviesCard
          key={item.id}
          movie={item}
          isFavoriteBlock={isFavoriteBlock}
        />
      ))}
    </div>
  );
}

export default MoviesCardList;
