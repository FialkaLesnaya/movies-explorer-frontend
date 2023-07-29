import Footer from 'components/common/Footer/Footer';
import './SavedMovies.css';
import Header from 'components/common/Header/Header';
import LoadingButton from 'components/common/LoadingButton/LoadingButton';
import SearchForm from 'components/common/SearchForm/SearchForm';
import MoviesCardList from 'components/common/MoviesCardList/MoviesCardList';
import useCardLimit from 'hooks/useCardLimit';
import useSearch from 'hooks/useSearch';
import MoviesCardListStates from 'components/common/MoviesCardListStates/MoviesCardListStates';

function SavedMovies() {
  return (
    <div>
    then</div>
  )
  // const { initialSavedMovies, isError, isLoading } = useLoadSavedMovies();
  // const { movies, handleSearch, hasSearchValue } = useSearch({ initialMovies: initialSavedMovies });
  // const { cardLimit, handleLoadMore } = useCardLimit();

  // return (
  //   <>
  //     <Header />
  //     <main className='saved-movies'>
  //       <section className='saved-movies__container'>
  //         <SearchForm handleSearch={handleSearch} />

  //         <MoviesCardListStates
  //           isError={isError}
  //           isLoading={isLoading}
  //           nothingFound={movies.length === 0 && hasSearchValue}
  //           tryToSearch={movies.length === 0 && !hasSearchValue}
  //         />

  //         {movies.length > 0 && (
  //           <MoviesCardList
  //             cardList={initialSavedMovies}
  //             limit={cardLimit}
  //             isFavoriteBlock
  //           />
  //         )}

  //         {movies.length > 0 &&
  //           movies.length > cardLimit && (
  //             <LoadingButton onChange={handleLoadMore} />
  //           )}
  //       </section>
  //     </main>
  //     <Footer />
  //   </>
  // );
}

export default SavedMovies;
