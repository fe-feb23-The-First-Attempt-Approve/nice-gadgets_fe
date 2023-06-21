import { FC } from 'react';
import { SearchContextProvider } from './SearchContext';
import { ThemeProvider } from './ThemeContext';
import { BurgerContextProvider } from './BurgerContext';
import { FavoriteItemProvider } from './FavoriteItemContext';
import { CartItemProvider } from './CartItemsContext';
import { ProductsProvider } from './ProductsContext';
import { AuthContextProvider } from './AuthContext';

const Provider: FC = ({ children }) => {
  return (
    <ThemeProvider>
      <BurgerContextProvider>
        <SearchContextProvider>
          <FavoriteItemProvider>
            <CartItemProvider>
              <ProductsProvider>
                <AuthContextProvider>
                  {children}
                </AuthContextProvider>
              </ProductsProvider>
            </CartItemProvider>
          </FavoriteItemProvider>
        </SearchContextProvider>
      </BurgerContextProvider>
    </ThemeProvider>
  );
};

export default Provider;
