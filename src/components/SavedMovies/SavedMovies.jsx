import Footer from 'components/common/Footer/Footer';
import './SavedMovies.css';
import Header from 'components/common/Header/Header';
import SearchForm from 'components/common/SearchForm/SearchForm';
import MoviesCardList from 'components/common/MoviesCardList/MoviesCardList';
import useSearch from 'hooks/useSearch';
import MoviesCardListStates from 'components/common/MoviesCardListStates/MoviesCardListStates';
import useSavedMovies from 'hooks/useSavedMovies';
import NotificationDialog from 'components/common/NotificationDialog/NotificationDialog';
import { useEffect, useState } from 'react';

function SavedMovies() {
  const [isErrorOpened, setIsErrorOpened] = useState(false);
  const {
    savedMovies,
    isSavedError,
    isSavedLoading,
    isLikeError,
    onSetLike,
    onDeleteLike,
  } = useSavedMovies();
  const { movies, handleSearch, hasSearchValue } = useSearch({
    initialMovies: savedMovies,
    hasPreselectedMovies: true,
  });

  useEffect(() => {
    setIsErrorOpened(isLikeError);
  }, [isLikeError]);

  return (
    <>
      <Header />
      <main className='saved-movies'>
        <section className='saved-movies__container'>
          <SearchForm handleSearch={handleSearch} canFilterWithoutSearch />

          <MoviesCardListStates
            isError={isSavedError}
            isLoading={isSavedLoading}
            nothingFound={movies.length === 0 && hasSearchValue}
            tryToSearch={movies.length === 0 && !hasSearchValue}
          />

          {movies.length > 0 && (
            <MoviesCardList
              savedMovies={savedMovies}
              cardList={movies}
              limit={movies.length}
              isFavoriteBlock
              onSetLike={onSetLike}
              onDeleteLike={onDeleteLike}
            />
          )}
        </section>
      </main>
      <NotificationDialog isOpened={isErrorOpened} handleClose={setIsErrorOpened} />
      <Footer />
    </>
  );
}

export default SavedMovies;
