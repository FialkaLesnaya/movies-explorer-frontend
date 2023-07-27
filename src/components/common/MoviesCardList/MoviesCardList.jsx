import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList({
  cardList,
  isFavoriteBlock = false,
  isError = false,
  isLoading = false,
}) {
  return (
    <div className='movies-card-list'>
      {isError && (
        <p>
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      )}
      {isLoading && (
        <Preloader />
      )}
      {!isLoading && !isError && cardList.length === 0 && (
        <p className='movies-card-list__empty-text'>Ничего не найдено</p>
      )}

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
