import Footer from 'components/common/Footer/Footer';
import './Movies.css';
import Header from 'components/common/Header/Header';
import LoadingButton from '../common/LoadingButton/LoadingButton';
import SearchForm from 'components/common/SearchForm/SearchForm';
import MoviesCardList from 'components/common/MoviesCardList/MoviesCardList';
import useLoadMovies from 'hooks/useLoadMovies';
import useSearch from 'hooks/useSearch';
import MoviesCardListStates from 'components/common/MoviesCardListStates/MoviesCardListStates';
import useCardLimit from 'hooks/useCardLimit';
import useSavedMovies from 'hooks/useSavedMovies';

function Movies() {
  const { initialMovies, isError, isLoading } = useLoadMovies();
  const { movies, handleSearch, hasSearchValue } = useSearch({ initialMovies });
  const { cardLimit, handleLoadMore } = useCardLimit();
  const {
    savedMovies,
    isSavedError,
    isLikeError,
    isSavedLoading,
    onSetLike,
    onDeleteLike,
  } = useSavedMovies();

  return (
    <>
      <Header />
      <main className='movies'>
        <section className='movies__container'>
          <SearchForm handleSearch={handleSearch} />

          <MoviesCardListStates
            isError={isError || isSavedError}
            isLoading={isLoading || isSavedLoading}
            nothingFound={movies.length === 0 && hasSearchValue}
            tryToSearch={movies.length === 0 && !hasSearchValue}
          />

          {movies.length > 0 && (
            <MoviesCardList
              savedMovies={savedMovies}
              onSetLike={onSetLike}
              onDeleteLike={onDeleteLike}
              cardList={movies}
              limit={cardLimit}
            />
          )}

          {movies.length > 0 && movies.length > cardLimit && (
            <LoadingButton onChange={handleLoadMore} />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
