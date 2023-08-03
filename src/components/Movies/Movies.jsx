import Footer from 'components/common/Footer/Footer';
import './Movies.css';
import Header from 'components/common/Header/Header';
import LoadingButton from '../common/LoadingButton/LoadingButton';
import SearchForm from 'components/common/SearchForm/SearchForm';
import MoviesCardList from 'components/common/MoviesCardList/MoviesCardList';
import MoviesCardListStates from 'components/common/MoviesCardListStates/MoviesCardListStates';
import useCardLimit from 'hooks/useCardLimit';
import useSavedMovies from 'hooks/useSavedMovies';
import useMovies from 'hooks/useMovies';
import { LocalStorage } from 'services/localStorageService';
import NotificationDialog from 'components/common/NotificationDialog/NotificationDialog';
import { useEffect, useState } from 'react';

function Movies() {
  const { cardLimit, handleLoadMore } = useCardLimit();
  const [isErrorOpened, setIsErrorOpened] = useState(false);
  const {
    savedMovies,
    isSavedError,
    isSavedLoading,
    isLikeError,
    onSetLike,
    onDeleteLike,
  } = useSavedMovies();

  useEffect(() => {
    setIsErrorOpened(isLikeError);
  }, [isLikeError]);

  const { filteredMovies, isError, isLoading, hasSearchValue, handleSearch } =
    useMovies();

  const hasAnyState = isError || isSavedError || isLoading || isSavedLoading;

  return (
    <>
      <Header />
      <main className='movies'>
        <section className='movies__container'>
          <SearchForm
            defaultIsChecked={LocalStorage.getCheckboxValue()}
            defaultSearchValue={LocalStorage.getSearchValue()}
            handleSearch={handleSearch}
          />

          <MoviesCardListStates
            isError={isError || isSavedError}
            isLoading={isLoading || isSavedLoading}
            nothingFound={filteredMovies.length === 0 && hasSearchValue}
            tryToSearch={filteredMovies.length === 0 && !hasSearchValue}
          />

          {!hasAnyState && filteredMovies.length > 0 && (
            <MoviesCardList
              savedMovies={savedMovies}
              onSetLike={onSetLike}
              onDeleteLike={onDeleteLike}
              cardList={filteredMovies}
              limit={cardLimit}
            />
          )}

          {!hasAnyState && filteredMovies.length > cardLimit && (
            <LoadingButton onChange={handleLoadMore} />
          )}
        </section>
      </main>

      <NotificationDialog isOpened={isErrorOpened} handleClose={setIsErrorOpened} />
      <Footer />
    </>
  );
}

export default Movies;
