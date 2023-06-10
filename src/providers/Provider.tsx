import { FC } from 'react';
import { SearchContextProvider } from './SearchContext';
import { ThemeProvider } from './ThemeContext';

const Provider: FC = ({ children }) => {
  return (
    <ThemeProvider>
      <SearchContextProvider>
        {children}
      </SearchContextProvider>
    </ThemeProvider>
  );
};

export default Provider;
