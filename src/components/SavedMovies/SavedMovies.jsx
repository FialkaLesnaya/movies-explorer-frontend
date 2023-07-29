import Footer from 'components/common/Footer/Footer';
import './SavedMovies.css';
import Header from 'components/common/Header/Header';
import LoadingButton from 'components/common/LoadingButton/LoadingButton';
import SearchForm from 'components/common/SearchForm/SearchForm';
import MoviesCardList from 'components/common/MoviesCardList/MoviesCardList';
import useCardLimit from 'hooks/useCardLimit';
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
  });
  const { cardLimit, handleLoadMore } = useCardLimit();

  return (
    <>
      <Header />
      <main className='saved-movies'>
        <section className='saved-movies__container'>
          <SearchForm handleSearch={handleSearch} />

          <MoviesCardListStates
            isError={isSavedError}
            isLoading={isSavedLoading}
            nothingFound={savedMovies.length === 0 && hasSearchValue}
            tryToSearch={savedMovies.length === 0 && !hasSearchValue}
          />

          {savedMovies.length > 0 && (
            <MoviesCardList
              savedMovies={savedMovies}
              cardList={savedMovies}
              limit={cardLimit}
              isFavoriteBlock
              onSetLike={onSetLike}
              onDeleteLike={onDeleteLike}
            />
          )}

          {savedMovies.length > cardLimit && (
            <LoadingButton onChange={handleLoadMore} />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
