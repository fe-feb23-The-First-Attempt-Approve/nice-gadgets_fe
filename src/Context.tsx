import { createContext, useContext, useState } from 'react';

interface Props {
  collapseSearchBar: () => void;
  toggleSearch: () => void;
  isSearching: boolean;
}

const Context = createContext<Props | undefined>(undefined);

export const Provider: React.FC = ({ children }) => {
  const [isSearching, setIsSearching] = useState(false);

  const collapseSearchBar = () => {
    setIsSearching(false);
  };

  const toggleSearch = () => {
    setIsSearching(prevState => !prevState);
  };

  return (
    <Context.Provider value={{ collapseSearchBar, toggleSearch, isSearching }}>
      {children}
    </Context.Provider>
  );
};

export const useNavigation = (): Props => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useNavigation must be used within a Provider');
  }

  return context;
};
