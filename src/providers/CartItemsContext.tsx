import {
  FC, createContext, useState, useContext, useEffect,
} from 'react';
import { Gadget } from '../types/Gadget';

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

  return (
    <CountCartItemsContext.Provider value={{
      countCartItems, updateCountCartItems,
    }}
    >
      {children}
    </CountCartItemsContext.Provider>
  );
};

interface CartItemContextValue {
  cartItems: Gadget[];
  cartItemCount: number;
  updateCartItems: (items: Gadget[]) => void;
}

const CartItemContext = createContext<CartItemContextValue>({
  cartItems: [],
  cartItemCount: 0,
  updateCartItems: () => {},
});

const CartItemProvider: FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<Gadget[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');

    if (storedCartItems) {
      const parsedCartItems: Gadget[] = JSON.parse(storedCartItems);

      setCartItems(parsedCartItems);
    }
  }, []);

  const updateCartItems = (items: Gadget[]) => {
    setCartItems(items);
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  const cartItemCount = cartItems.length;

  const { updateCountCartItems } = useContext(CountCartItemsContext);

  useEffect(() => {
    updateCountCartItems(cartItemCount);
  }, [cartItemCount]);

  return (
    <CartItemContext.Provider value={{
      cartItems, cartItemCount, updateCartItems,
    }}
    >
      {children}
    </CartItemContext.Provider>
  );
};

export {
  CountCartItemsProvider,
  CountCartItemsContext,
  CartItemProvider,
  CartItemContext,
};
