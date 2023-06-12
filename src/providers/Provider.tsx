import { FC } from 'react';
import { SearchContextProvider } from './SearchContext';
import { ThemeProvider } from './ThemeContext';
import { BurgerContextProvider } from './BurgerContext';

const Provider: FC = ({ children }) => {
  return (
    <ThemeProvider>
      <BurgerContextProvider>
        <SearchContextProvider>
          {children}
        </SearchContextProvider>
      </BurgerContextProvider>
    </ThemeProvider>
  );
};

export default Provider;
