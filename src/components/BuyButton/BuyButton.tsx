import {
  FC, useEffect, useState, useContext,
} from 'react';
import cn from 'classnames';
import { CartItemsContext } from '../../providers/CartItemsContext';
import { Gadget } from '../../types/Gadget';

interface Props {
  gadget: Gadget;
}

export const BuyButton: FC<Props> = ({ gadget }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart, removeFromCart, cartItems } = useContext(CartItemsContext);

  useEffect(() => {
    setIsAdded(cartItems.some(item => item.id === gadget.id));
  }, [cartItems, gadget.id]);

  const handleAddToCart = () => {
    if (isAdded) {
      removeFromCart(gadget.id);
    } else {
      addToCart(gadget);
    }
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
