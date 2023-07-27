import { useState, useCallback } from 'react';

const useCardLimit = () => {
  const [cardLimit, setCardLimit] = useState(3 * 4);

  const handleLoadMore = useCallback(() => {
    setCardLimit(cardLimit + 3);
  }, [cardLimit]);

  return {
    cardLimit,
    handleLoadMore,
  };
};

export default useCardLimit;
