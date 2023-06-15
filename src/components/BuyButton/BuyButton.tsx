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

  useEffect(() => {
    const storedCartItemIds = localStorage.getItem('cartItemIds');

    if (storedCartItemIds) {
      const cartItemIds = JSON.parse(storedCartItemIds);

      setIsAdded(cartItemIds.includes(gadget.itemId));
      updateCountCartItems(cartItemIds.length);
    }
  }, [gadget.itemId, updateCountCartItems]);

  const handleAddToCart = () => {
    const storedCartItemIds = localStorage.getItem('cartItemIds');
    let cartItemIds = storedCartItemIds ? JSON.parse(storedCartItemIds) : [];

    const { itemId } = gadget;
    const updatedIds = cartItemIds
      .filter((cartId: string) => cartId !== itemId);

    if (cartItemIds.length === updatedIds.length) {
      cartItemIds.push({ itemId, quantity: 1 });
      setIsAdded(true);
    } else {
      cartItemIds = updatedIds;
      setIsAdded(false);
    }

    updateCountCartItems(cartItemIds.length);
    localStorage.setItem('cartItemIds', JSON.stringify(cartItemIds));
  };

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
