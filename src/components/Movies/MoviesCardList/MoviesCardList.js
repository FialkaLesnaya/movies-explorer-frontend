import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ cardList, isFavoriteBlock = false }) {
  return (
    <div className='movies-card-list'>
      {cardList.map((item) => (
        <MoviesCard item={item} isFavoriteBlock={isFavoriteBlock} />
      ))}
    </div>
  );
}

export default MoviesCardList;
