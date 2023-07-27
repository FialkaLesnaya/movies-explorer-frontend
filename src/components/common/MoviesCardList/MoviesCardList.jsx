import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({
  cardList,
  isFavoriteBlock = false,
}) {
  return (
    <div className='movies-card-list'>
      {cardList.map((item) => (
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
