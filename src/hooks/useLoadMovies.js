import { useState, useEffect } from 'react';
import { MoviesApi } from 'utils/MoviesApi';

const useLoadMovies = () => {
  const [initialMovies, setInitialMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    MoviesApi.loadMovies()
      .then((data) => {
        setInitialMovies(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return {
    initialMovies,
    isError,
    isLoading,
  };
};

export default useLoadMovies;
