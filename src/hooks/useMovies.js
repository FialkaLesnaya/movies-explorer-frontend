import { useState, useCallback, useEffect } from 'react';
import { LocalStorage } from 'services/localStorageService';
import { MoviesApi } from 'utils/MoviesApi';

const filterMovies = (movies, isFiltered, searchValue) => {
  const lowerSearchValue = searchValue.toLowerCase();
  let filteredMovies = [];

  if (isFiltered) {
    filteredMovies = movies.filter((i) => i.duration <= 40);
  }

  if (searchValue.length > 0) {
    filteredMovies = (isFiltered ? filteredMovies : movies).filter(
      (i) =>
        i.nameRU.toLowerCase().includes(lowerSearchValue) ||
        i.nameEN.toLowerCase().includes(lowerSearchValue)
    );
  }

  return filteredMovies ?? [];
};

const useMovies = () => {
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearchValue, setHasSearchValue] = useState(false);

  useEffect(() => {
    const moviesStorage = LocalStorage.getMovies();

    if (moviesStorage) {
      setInitialMovies(moviesStorage);
      setFilteredMovies(
        filterMovies(
          moviesStorage,
          LocalStorage.getCheckboxValue(),
          LocalStorage.getSearchValue()
        )
      );
      setHasSearchValue(LocalStorage.getSearchValue().length > 0);
    }
  }, []);

  const handleLoad = useCallback(() => {
    setIsLoading(true);
    return MoviesApi.loadMovies()
      .then((data) => {
        const movies = data.map((item) => {
          return {
            ...item,
            id: undefined,
            created_at: undefined,
            updated_at: undefined,
            movieId: item.id,
            image: 'https://api.nomoreparties.co/' + item.image.url,
            thumbnail: 'https://api.nomoreparties.co/' + item.image.url,
          };
        });
        LocalStorage.setMovies(movies);
        setInitialMovies(movies);
        setIsLoading(false);
        return movies;
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = useCallback(
    (isFiltered = false, searchValue = '') => {
      LocalStorage.setCheckboxValue(isFiltered);
      LocalStorage.setSearchValue(searchValue);
      if (searchValue.length > 0 && initialMovies.length === 0) {
        return handleLoad().then((movies) => {
          setFilteredMovies(filterMovies(movies, isFiltered, searchValue));
          setHasSearchValue(searchValue.length > 0);
        });
      }
      setFilteredMovies(filterMovies(initialMovies, isFiltered, searchValue));
      setHasSearchValue(searchValue.length > 0);
    },
    [initialMovies, handleLoad]
  );

  return {
    filteredMovies,
    isError,
    isLoading,
    hasSearchValue,
    handleSearch,
  };
};

export default useMovies;
