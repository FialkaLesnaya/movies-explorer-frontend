import { useState, useCallback, useEffect } from 'react';

const DESKTOP_ROW_ITEMS = 3;
const TABLET_ROW_ITEMS = 2;
const MOBILE_ROW_ITEMS = 1;
const DESKTOP_COLUMN_ITEMS = 4;
const TABLET_COLUMN_ITEMS = 4;
const MOBILE_COLUMN_ITEMS = 5;

const useCardLimit = () => {
  const [cardLimit, setCardLimit] = useState(
    DESKTOP_ROW_ITEMS * DESKTOP_COLUMN_ITEMS
  );

  const updateCardLimit = useCallback(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1280) {
      setCardLimit(DESKTOP_ROW_ITEMS * DESKTOP_COLUMN_ITEMS);
    } else if (screenWidth >= 768) {
      setCardLimit(TABLET_ROW_ITEMS * TABLET_COLUMN_ITEMS);
    } else {
      setCardLimit(MOBILE_ROW_ITEMS * MOBILE_COLUMN_ITEMS);
    }
  }, []);

  const handleLoadMore = useCallback(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1280) {
      setCardLimit(cardLimit + DESKTOP_ROW_ITEMS);
    } else if (screenWidth >= 768) {
      setCardLimit(cardLimit + TABLET_ROW_ITEMS);
    } else {
      setCardLimit(cardLimit + 2);
    }
  }, [cardLimit]);

  useEffect(() => {
    updateCardLimit();
    window.addEventListener('resize', updateCardLimit);
    return () => {
      window.removeEventListener('resize', updateCardLimit);
    };
  }, [updateCardLimit]);

  return {
    cardLimit,
    handleLoadMore,
  };
};

export default useCardLimit;
