import {
  FC, createContext, useState, useEffect, useCallback,
} from 'react';
import { Gadget } from '../types/Gadget';
import { getPhones } from '../api/phones';

interface CartContextProps {
  cartItems: Gadget[];
  totalQuantity: number;
  totalPrice: number;
  updateCartItems: (items: Gadget[]) => void;
}

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
  updateCartItems: () => {},
});

const CartContextProvider: FC = ({ children }) => {
  const [phones, setPhones] = useState<Gadget[]>([]);
  const [cartItems, setCartItems] = useState<Gadget[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const loadPhones = useCallback(async () => {
    try {
      const { phones: phonesFromServer } = await getPhones();

      const phonesWithQuantity = phonesFromServer.map((phone) => ({
        ...phone,
        quantity: 1,
      }));

      setPhones(phonesWithQuantity);
    } catch {
      /* eslint-disable-next-line */
      console.log('Failed to load phones');
    }
  }, []);

  useEffect(() => {
    loadPhones();
  }, []);

  useEffect(() => {
    const storedCartItemIds = localStorage.getItem('cartItemIds');

    if (storedCartItemIds) {
      const cartItemsId: {
        itemId: string; quantity: number,
      }[] = JSON.parse(storedCartItemIds);
      const cartItemsData = phones.filter((phone) => {
        return cartItemsId.some((cartItem) => cartItem.itemId === phone.itemId);
      });

      setCartItems(cartItemsData);
    }
  }, [phones]);

  const updateCartItems = useCallback((items: Gadget[]) => {
    setCartItems(items);
  }, []);

  useEffect(() => {
    const totalAmount = cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0);

    const quantity = cartItems
      .reduce((total, item) => total + item.quantity, 0);

    setTotalPrice(totalAmount);
    setTotalQuantity(quantity);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalQuantity,
        totalPrice,
        updateCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, CartContext };
