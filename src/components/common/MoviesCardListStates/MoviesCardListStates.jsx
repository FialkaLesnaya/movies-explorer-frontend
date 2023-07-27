import Preloader from '../Preloader/Preloader';
import './MoviesCardListStates.css';

function MoviesCardListStates({
  tryToSearch = false,
  nothingFound = false,
  isError = false,
  isLoading = false,
}) {
  return (
    <div className='movies-card-list-states'>
      {isError && (
        <p className='movies-card-list-states__text movies-card-list-states__text--error'>
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      )}

      {isLoading && <Preloader />}

      {!isLoading && !isError && nothingFound && (
        <p className='movies-card-list-states__text'>Ничего не найдено</p>
      )}

      {!isLoading && !isError && tryToSearch && (
        <p className='movies-card-list-states__text'>Начните вводите название фильма для отображения результатов</p>
      )}
    </div>
  );
}

export default MoviesCardListStates;
