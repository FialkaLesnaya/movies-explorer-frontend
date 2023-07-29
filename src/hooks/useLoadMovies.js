import { CurrentUserContext } from 'contexts/CurrentUserContext';
import { useState, useEffect, useContext } from 'react';
import { MoviesApi } from 'utils/MoviesApi';

const useLoadMovies = () => {
  const [initialMovies, setInitialMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    MoviesApi.loadMovies()
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
        setInitialMovies(movies);
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
