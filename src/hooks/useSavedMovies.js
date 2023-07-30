import { useState, useEffect, useCallback } from 'react';
import { MainApi } from 'utils/MainApi';

const useSavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState([]);
  const [isSavedError, setISavedError] = useState(false);
  const [isLikeError, setIsLikeError] = useState(false);
  const [isSavedLoading, setIsSavedLoading] = useState(false);

  const onLoad = useCallback(() => {
    setIsSavedLoading(true);
    MainApi.loadSavedMovies()
      .then((response) => {
        setSavedMovies(response.data);
        setIsSavedLoading(false);
      })
      .catch(() => {
        setISavedError(true);
        setIsSavedLoading(false);
      });
  }, []);

  const onSetLike = useCallback(
    (movie) => {
      setIsLikeError(false);
      MainApi.likeMovie({ ...movie, owner: '1' })
        .then((response) => {
          setSavedMovies([...savedMovies, response.data]);
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
        .then((response) => {
          setSavedMovies(savedMovies.filter((item) => item.movieId !== response.data.movieId));
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
    isSavedError,
    isLikeError,
    isSavedLoading,
    onSetLike,
    onDeleteLike,
  };
};

export default useSavedMovies;
