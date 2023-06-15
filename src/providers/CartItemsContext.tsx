import {
  FC, createContext, useState, useEffect,
} from 'react';
import { Gadget } from '../types/Gadget';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

interface CartItem extends Gadget {
  quantity: number;
}

interface CartItemsContextProps {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: number) => void;
}

const CartItemsContext = createContext<CartItemsContextProps>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

const CartItemsProvider: FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');

    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: CartItem) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: 1,
          };
        }

        return item;
      });

      setCartItems(updatedItems);
    } else {
      const newCartItem: CartItem = {
        ...product,
        quantity: 1,
      };

      setCartItems([...cartItems, newCartItem]);
    }
  };

  const removeFromCart = (productId: number) => {
    const updatedItems = cartItems.filter((item) => item.id !== productId);

    setCartItems(updatedItems);
  };

  const contextValue: CartItemsContextProps = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <CartItemsContext.Provider value={contextValue}>
      {children}
    </CartItemsContext.Provider>
  );
};

export { CartItemsProvider, CartItemsContext };
