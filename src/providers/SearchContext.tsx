import {
  FC,
  createContext,
  useContext,
  useState,
} from 'react';

interface SearchContextValue {
  toggleSearch: () => void;
  closeSearch: () => void;
  isSearching: boolean;
}

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

export const SearchContextProvider: FC = ({ children }) => {
  const [isSearching, setIsSearching] = useState(false);

  const toggleSearch = () => {
    setIsSearching(prevState => !prevState);
  };

  const closeSearch = () => {
    setIsSearching(false);
  };

  const contextValue: SearchContextValue = {
    toggleSearch,
    closeSearch,
    isSearching,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchPanel = (): SearchContextValue => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearchPanel must be used within a Provider');
  }

  return context;
};
