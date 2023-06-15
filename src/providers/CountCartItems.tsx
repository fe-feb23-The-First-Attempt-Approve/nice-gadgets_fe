import {
  FC, createContext, useState, useEffect,
} from 'react';

interface CountCartItemsContextProps {
  countCartItems: number;
  updateCountCartItems: (newCount: number) => void;
}

const CountCartItemsContext = createContext<CountCartItemsContextProps>({
  countCartItems: 0,
  updateCountCartItems: () => {},
});

const CountCartItemsProvider: FC = ({ children }) => {
  const [countCartItems, setCountCartItems] = useState(0);

  const updateCountCartItems = (newCount: number) => {
    setCountCartItems(newCount);
  };

  useEffect(() => {
    const storedCount = localStorage.getItem('countCartItems');

    if (storedCount) {
      setCountCartItems(parseInt(storedCount, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('countCartItems', countCartItems.toString());
  }, [countCartItems]);

  const contextValue: CountCartItemsContextProps = {
    countCartItems,
    updateCountCartItems,
  };

  return (
    <CountCartItemsContext.Provider value={contextValue}>
      {children}
    </CountCartItemsContext.Provider>
  );
};

export { CountCartItemsProvider, CountCartItemsContext };
