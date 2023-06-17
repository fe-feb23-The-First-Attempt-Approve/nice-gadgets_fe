import { FC } from 'react';
import { SearchContextProvider } from './SearchContext';
import { ThemeProvider } from './ThemeContext';
import { BurgerContextProvider } from './BurgerContext';
import { CountFavoritesProvider } from './CountFavorites';
import { CartItemProvider } from './CartItemsContext';

const Provider: FC = ({ children }) => {
  return (
    <ThemeProvider>
      <BurgerContextProvider>
        <SearchContextProvider>
          <CountFavoritesProvider>
            <CartItemProvider>
              {children}
            </CartItemProvider>
          </CountFavoritesProvider>
        </SearchContextProvider>
      </BurgerContextProvider>
    </ThemeProvider>
  );
};

export default Provider;
