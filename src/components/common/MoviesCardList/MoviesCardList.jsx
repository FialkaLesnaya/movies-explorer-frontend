import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ cardList, isFavoriteBlock = false }) {
  return (
    <div className='movies-card-list'>
      {cardList.length === 0 && (<p className='movies-card-list__empty-text'>Результатов не найдено</p>)}

      {cardList.map((item) => (
        <MoviesCard key={item.id} movie={item} isFavoriteBlock={isFavoriteBlock} />
      ))}
    </div>
  );
}

export default MoviesCardList;
