import { FC, createContext, useState } from 'react';

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

export { CountFavoritesProvider, CountFavoritesContext };
