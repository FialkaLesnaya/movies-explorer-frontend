import { useState, useEffect } from 'react';
import { MainApi } from 'utils/MainApi';

const useLoadSavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    MainApi.loadSavedMovies()
      .then((response) => {
        setSavedMovies(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return {
    savedMovies,
    isError,
    isLoading,
  };
};

export default useLoadSavedMovies;
