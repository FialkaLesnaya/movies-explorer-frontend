import Footer from 'components/common/Footer/Footer';
import './Movies.css';
import Header from 'components/common/Header/Header';
import LoadingButton from '../common/LoadingButton/LoadingButton';
import SearchForm from 'components/common/SearchForm/SearchForm';
import MoviesCardList from 'components/common/MoviesCardList/MoviesCardList';
import { useCallback, useEffect, useState } from 'react';
import { MoviesApi } from 'utils/MoviesApi';

function Movies() {
  const [initialMovies, setInitialMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MoviesApi.loadMovies()
      .then((data) => {
        setInitialMovies(data);
      })
      .catch((err) => {
        console.log(`Ошибка загрузки изначальных данных ${err}`);
      });
  }, []);

  const handleSearch = useCallback(
    (isFiltered, searchValue = '') => {
      const lowerSearchValue = searchValue.toLowerCase();
      if (isFiltered) {
        const filteredMovies = initialMovies.filter(
          (movie) =>
            movie.duration <= 40 &&
            (movie.nameRU.toLowerCase().includes(lowerSearchValue) ||
              movie.nameEN.toLowerCase().includes(lowerSearchValue))
        );
        setMovies(filteredMovies);
        return;
      }

      const filteredMovies = initialMovies.filter(
        (movie) =>
          movie.nameRU.toLowerCase().includes(lowerSearchValue) ||
          movie.nameEN.toLowerCase().includes(lowerSearchValue)
      );
      setMovies(filteredMovies);
    },
    [initialMovies]
  );

  return (
    <>
      <Header isMainPage={false} />
      <main className='movies'>
        <section className='movies__container'>
          <SearchForm handleSearch={handleSearch} />
          <MoviesCardList cardList={movies} />
          <LoadingButton />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
