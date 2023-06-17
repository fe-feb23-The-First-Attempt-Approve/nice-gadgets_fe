import { FC } from 'react';
import { SearchContextProvider } from './SearchContext';
import { ThemeProvider } from './ThemeContext';
import { BurgerContextProvider } from './BurgerContext';
import { FavoriteItemProvider } from './FavoriteItemContext';
import { CartItemProvider } from './CartItemsContext';

const Provider: FC = ({ children }) => {
  return (
    <ThemeProvider>
      <BurgerContextProvider>
        <SearchContextProvider>
          <FavoriteItemProvider>
            <CartItemProvider>
              {children}
            </CartItemProvider>
          </FavoriteItemProvider>
        </SearchContextProvider>
      </BurgerContextProvider>
    </ThemeProvider>
  );
};

export default Provider;
