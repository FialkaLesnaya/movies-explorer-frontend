import { useCallback } from 'react';
import { MainApi } from 'utils/MainApi';

const useCardLike = () => {
  const onSetLike = useCallback(
    (movie) => {
      MainApi.likeMovie({ ...movie, owner: '1' });
    },
    []
  );

  const onDeleteLike = useCallback((movieId) => {
    MainApi.deleteLikeMovie(movieId);
  }, []);

  return {
    onSetLike,
    onDeleteLike,
  };
};

export default useCardLike;
