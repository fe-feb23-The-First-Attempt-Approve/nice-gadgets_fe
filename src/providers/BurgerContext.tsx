import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface BurgerContextType {
  isOpenBurger: boolean;
  toggleBurger: () => void;
  setIsOpenBurger: (isOpen: boolean) => void;
}

export const BurgerContext = createContext<BurgerContextType
| undefined>(undefined);

interface BurgerContextProviderProps {
  children: ReactNode;
}

export const BurgerContextProvider = ({ children }:
BurgerContextProviderProps) => {
  const [isOpenBurger, setIsOpenBurger] = useState(false);

  useEffect(() => {
    if (isOpenBurger) {
      document.body.classList.add('scrolling-blocked');
    } else {
      document.body.classList.remove('scrolling-blocked');
    }
  }, [isOpenBurger]);

  const toggleBurger = () => {
    setIsOpenBurger(!isOpenBurger);
  };

  return (
    <BurgerContext.Provider value={{
      isOpenBurger,
      toggleBurger,
      setIsOpenBurger,
    }}
    >
      {children}
    </BurgerContext.Provider>
  );
};

export const useBurger = (): BurgerContextType => {
  const context = useContext(BurgerContext);

  if (!context) {
    throw new Error('useBurger must be used within a BurgerContextProvider');
  }

  return context;
};
