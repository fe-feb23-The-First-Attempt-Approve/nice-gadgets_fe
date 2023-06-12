import { FC } from 'react';
import { SearchContextProvider } from './SearchContext';
import { ThemeProvider } from './ThemeContext';
import { BurgerContextProvider } from './BurgerContext';
import { CountFavoritesProvider } from './CountFavorites';
import { CountCartItemsProvider } from './CountCartItems';

const Provider: FC = ({ children }) => {
  return (
    <ThemeProvider>
      <BurgerContextProvider>
        <SearchContextProvider>
          <CountFavoritesProvider>
            <CountCartItemsProvider>
              {children}
            </CountCartItemsProvider>
          </CountFavoritesProvider>
        </SearchContextProvider>
      </BurgerContextProvider>
    </ThemeProvider>
  );
};

export default Provider;
