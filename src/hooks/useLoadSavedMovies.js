import { useState, useEffect } from 'react';
import { MainApi } from 'utils/MainApi';

const useLoadSavedMovies = () => {
  const [initialSavedMovies, setInitialSavedMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    MainApi.loadSavedMovies()
      .then((response) => {
        setInitialSavedMovies(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return {
    initialSavedMovies,
    isError,
    isLoading,
  };
};

export default useLoadSavedMovies;
