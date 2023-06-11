import { FC } from 'react';
import { SearchContextProvider } from './SearchContext';
import { ThemeProvider } from './ThemeContext';
<<<<<<< HEAD
import { BurgerContextProvider } from './BurgerContext';
=======
>>>>>>> main

const Provider: FC = ({ children }) => {
  return (
    <ThemeProvider>
<<<<<<< HEAD
      <BurgerContextProvider>
        <SearchContextProvider>
          {children}
        </SearchContextProvider>
      </BurgerContextProvider>
=======
      <SearchContextProvider>
        {children}
      </SearchContextProvider>
>>>>>>> main
    </ThemeProvider>
  );
};

export default Provider;
