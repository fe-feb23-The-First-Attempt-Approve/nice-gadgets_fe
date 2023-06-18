import {
  FC, createContext, useContext, useEffect, useState,
} from 'react';

interface CountFavoritesContextProps {
  countFavorites: number;
  updateCountFavorites: (newCount: number) => void;
}

const CountFavoritesContext = createContext<CountFavoritesContextProps>({
  countFavorites: 0,
  updateCountFavorites: () => {},
});

const CountFavoritesProvider: FC = ({ children }) => {
  const [countFavorites, setCountFavorites] = useState(0);

  const updateCountFavorites = (newCount: number) => {
    setCountFavorites(newCount);
  };

  const contextValue: CountFavoritesContextProps = {
    countFavorites,
    updateCountFavorites,
  };

  return (
    <CountFavoritesContext.Provider value={contextValue}>
      {children}
    </CountFavoritesContext.Provider>
  );
};

interface FavoriteItemContextValue {
  favoriteItems: string[];
  favoriteItemCount: number;
  updateFavoriteItems: (items: string[]) => void;
}

const FavoriteItemContext = createContext<FavoriteItemContextValue>({
  favoriteItems: [],
  favoriteItemCount: 0,
  updateFavoriteItems: () => {},
});

const FavoriteItemProvider: FC = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState<string[]>([]);

  useEffect(() => {
    const storedFavoriteItems = localStorage.getItem('favorites');

    if (storedFavoriteItems) {
      const parsedFavoriteItems: string[] = JSON.parse(storedFavoriteItems);

      setFavoriteItems(parsedFavoriteItems);
    }
  }, []);

  const updateFavoriteItems = (items: string[]) => {
    setFavoriteItems(items);
    localStorage.setItem('favorites', JSON.stringify(items));
  };

  const favoriteItemCount = favoriteItems.length;

  const { updateCountFavorites } = useContext(CountFavoritesContext);

  useEffect(() => {
    updateCountFavorites(favoriteItemCount);
  }, [favoriteItemCount]);

  return (
    <FavoriteItemContext.Provider value={{
      favoriteItems, favoriteItemCount, updateFavoriteItems,
    }}
    >
      {children}
    </FavoriteItemContext.Provider>
  );
};

export {
  CountFavoritesProvider,
  CountFavoritesContext,
  FavoriteItemProvider,
  FavoriteItemContext,
};
