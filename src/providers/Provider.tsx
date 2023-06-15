import { FC } from 'react';
import { SearchContextProvider } from './SearchContext';
import { ThemeProvider } from './ThemeContext';
import { BurgerContextProvider } from './BurgerContext';
import { CountFavoritesProvider } from './CountFavorites';
import { CountCartItemsProvider } from './CountCartItems';
import { CartItemsProvider } from './CartItemsContext';

const Provider: FC = ({ children }) => {
  return (
    <ThemeProvider>
      <BurgerContextProvider>
        <SearchContextProvider>
          <CountFavoritesProvider>
            <CartItemsProvider>
              <CountCartItemsProvider>
                {children}
              </CountCartItemsProvider>
            </CartItemsProvider>
          </CountFavoritesProvider>
        </SearchContextProvider>
      </BurgerContextProvider>
    </ThemeProvider>
  );
};

export default Provider;
