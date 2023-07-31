import { useState, useCallback, useEffect } from 'react';

const filterMovies = (movies, isFiltered, searchValue, hasPreselectedMovies = false) => {
  const lowerSearchValue = searchValue.toLowerCase();
  let filteredMovies = hasPreselectedMovies ? movies : [];

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

const useSearch = ({ initialMovies, hasPreselectedMovies = false }) => {
  const [movies, setMovies] = useState([]);
  const [hasSearchValue, setHasSearchValue] = useState(false);

  useEffect(() => {
    if (hasPreselectedMovies) {
      setMovies(initialMovies);
    }
  }, [initialMovies, hasPreselectedMovies]);

  const handleSearch = useCallback(
    (isFiltered = false, searchValue = '') => {
      const filteredMovies = filterMovies(
        initialMovies,
        isFiltered,
        searchValue,
        hasPreselectedMovies,
      );
      setMovies(filteredMovies);
      setHasSearchValue(searchValue.length > 0);
    },
    [initialMovies, hasPreselectedMovies]
  );

  return { movies, handleSearch, hasSearchValue };
};

export default useSearch;
