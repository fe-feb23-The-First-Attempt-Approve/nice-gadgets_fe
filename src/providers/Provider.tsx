import { FC } from 'react';
import { SearchContextProvider } from './SearchContext';
import { ThemeProvider } from './ThemeContext';
import { BurgerContextProvider } from './BurgerContext';
import { CountFavoritesProvider } from './CountFavorites';
import { CountCartItemsProvider } from './CountCartItems';
import { CartContextProvider } from './CartContext';

const Provider: FC = ({ children }) => {
  return (
    <ThemeProvider>
      <CartContextProvider>
        <BurgerContextProvider>
          <SearchContextProvider>
            <CountFavoritesProvider>
              <CountCartItemsProvider>
                {children}
              </CountCartItemsProvider>
            </CountFavoritesProvider>
          </SearchContextProvider>
        </BurgerContextProvider>
      </CartContextProvider>
    </ThemeProvider>
  );
};

export default Provider;
