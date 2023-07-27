import { useState, useCallback } from 'react';

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

const useSearch = ({ initialMovies }) => {
  const [movies, setMovies] = useState([]);
  const [hasSearchValue, setHasSearchValue] = useState(false);

  const handleSearch = useCallback(
    (isFiltered = false, searchValue = '') => {
      const filteredMovies = filterMovies(
        initialMovies,
        isFiltered,
        searchValue
      );
      setMovies(filteredMovies);
      setHasSearchValue(searchValue.length > 0);
    },
    [initialMovies]
  );

  return { movies, handleSearch, hasSearchValue };
};

export default useSearch;
