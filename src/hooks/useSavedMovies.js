import { useState, useEffect, useCallback } from 'react';
import { MainApi } from 'utils/MainApi';

const useSavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLikeError, setIsLikeError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onLoad = useCallback(() => {
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

  const onSetLike = useCallback(
    (movie) => {
      setIsLikeError(false);
      MainApi.likeMovie({ ...movie, owner: '1' })
        .then((data) => {
          const movies = savedMovies;
          movies.push(data);
          setSavedMovies(movies);
        })
        .catch(() => {
          setIsLikeError(true);
        });
    },
    [savedMovies]
  );

  const onDeleteLike = useCallback(
    (id) => {
      setIsLikeError(false);
      MainApi.deleteLikeMovie(id)
        .then(() => {
          setSavedMovies(savedMovies.filter((item) => item._id !== id));
        })
        .catch(() => {
          setIsLikeError(true);
        });
    },
    [savedMovies]
  );

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  return {
    savedMovies,
    isError,
    isLikeError,
    isLoading,
    onSetLike,
    onDeleteLike,
  };
};

export default useSavedMovies;
