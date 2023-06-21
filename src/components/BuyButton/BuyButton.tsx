import {
  FC, useEffect, useState, useContext,
} from 'react';
import cn from 'classnames';
import { CartItemContext } from '../../providers/CartItemsContext';
import { Gadget } from '../../types/Gadget';
import NotificationMessage from '../Notification/Notification';

interface Props {
  gadget: Gadget;
}

export const BuyButton: FC<Props> = ({ gadget }) => {
  const { itemId } = gadget;
  const [isAdded, setIsAdded] = useState(false);
  const { updateCartItems } = useContext(CartItemContext);

  const notifyCart = NotificationMessage({
    message: `🛍️ ${gadget.name} has been added to cart`,
    redirection: 'cart',
  });

  const handleAddToCart = () => {
    const storedCartItems = localStorage.getItem('cartItems');
    const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

    const existingItemIndex = cartItems
      .findIndex((item: Gadget) => item.itemId === itemId);

    if (existingItemIndex !== -1) {
      cartItems.splice(existingItemIndex, 1);
      setIsAdded(false);
    } else {
      cartItems.push({ ...gadget, quantity: 1 });
      setIsAdded(true);
    }

    if (!isAdded) {
      notifyCart();
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartItems(cartItems);
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');

    if (storedCartItems) {
      const cartItemsNew = JSON.parse(storedCartItems);

      const existingItemIndex = cartItemsNew
        .findIndex((item: Gadget) => item.itemId === itemId);

      if (existingItemIndex !== -1) {
        setIsAdded(true);
      } else {
        setIsAdded(false);
      }
    } else {
      setIsAdded(false);
    }
  }, [itemId]);

  const buttonClasses = cn('buy-button', {
    'buy-button--added': isAdded,
  });

  const buttonText = isAdded ? 'Added' : 'Add to cart';

  return (
    <button
      type="button"
      className={buttonClasses}
      onClick={handleAddToCart}
    >
      {buttonText}
    </button>
  );
};
