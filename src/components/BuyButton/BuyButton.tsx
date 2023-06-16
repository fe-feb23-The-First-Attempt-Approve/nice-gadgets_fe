import {
  FC, useEffect, useState, useContext,
} from 'react';
import cn from 'classnames';
import { Gadget } from '../../types/Gadget';
import { CountCartItemsContext } from '../../providers/CountCartItems';

interface Props {
  gadget: Gadget;
}

export const BuyButton: FC<Props> = ({ gadget }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { updateCountCartItems } = useContext(CountCartItemsContext);

  const handleAddToCart = () => {
    const storedCartItems = localStorage.getItem('cartItems');
    const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

    const existingItemIndex = cartItems
      .findIndex((item: Gadget) => item.itemId === gadget.itemId);

    if (existingItemIndex !== -1) {
      cartItems.splice(existingItemIndex, 1);
      setIsAdded(false);
    } else {
      cartItems.push({ ...gadget, quantity: 1 });
      setIsAdded(true);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');

    if (storedCartItems) {
      const cartItems = JSON.parse(storedCartItems);

      const existingItemIndex = cartItems
        .findIndex((item: Gadget) => item.itemId === gadget.itemId);

      if (existingItemIndex !== -1) {
        setIsAdded(true);
      } else {
        setIsAdded(false);
      }

      updateCountCartItems(cartItems.length);
    } else {
      setIsAdded(false);
      updateCountCartItems(0);
    }
  }, [gadget.itemId, updateCountCartItems]);

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
