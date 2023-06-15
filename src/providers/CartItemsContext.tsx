import { FC, createContext, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItemsContextProps {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

const CartItemsContext = createContext<CartItemsContextProps>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

const CartItemsProvider: FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
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
