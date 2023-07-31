import Footer from 'components/common/Footer/Footer';
import './SavedMovies.css';
import Header from 'components/common/Header/Header';
import SearchForm from 'components/common/SearchForm/SearchForm';
import MoviesCardList from 'components/common/MoviesCardList/MoviesCardList';
import useSearch from 'hooks/useSearch';
import MoviesCardListStates from 'components/common/MoviesCardListStates/MoviesCardListStates';
import useSavedMovies from 'hooks/useSavedMovies';

function SavedMovies() {
  const {
    savedMovies,
    isSavedError,
    isLikeError,
    isSavedLoading,
    onSetLike,
    onDeleteLike,
  } = useSavedMovies();
  const { movies, handleSearch, hasSearchValue } = useSearch({
    initialMovies: savedMovies,
    hasPreselectedMovies: true,
  });

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
      <Footer />
    </>
  );
}

export default SavedMovies;
