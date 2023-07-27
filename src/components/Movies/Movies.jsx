import Footer from 'components/common/Footer/Footer';
import './Movies.css';
import Header from 'components/common/Header/Header';
import LoadingButton from '../common/LoadingButton/LoadingButton';
import SearchForm from 'components/common/SearchForm/SearchForm';
import MoviesCardList from 'components/common/MoviesCardList/MoviesCardList';
import useLoadMovies from 'hooks/useLoadMovies';
import useSearch from 'hooks/useSearch';

function Movies() {
  const { initialMovies, isError, isLoading } = useLoadMovies();

  const { movies, handleSearch } = useSearch({ initialMovies });

  return (
    <>
      <Header isMainPage={false} />
      <main className='movies'>
        <section className='movies__container'>
          <SearchForm handleSearch={handleSearch} />
          <MoviesCardList
            cardList={movies}
            isError={isError}
            isLoading={isLoading}
          />
          <LoadingButton />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
