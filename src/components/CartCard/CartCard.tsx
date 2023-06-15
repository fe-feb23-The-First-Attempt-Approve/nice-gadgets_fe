import {
  FC, useContext, useEffect, useState,
} from 'react';
import { CartContext } from '../../providers/CartContext';
import { CountCartItemsContext } from '../../providers/CountCartItems';
import { Phone } from '../../types/Phone';
import { IconClose } from '../Icons/IconClose';

type CartCardProps = {
  item: Phone;
};

export const CartCard: FC<CartCardProps> = ({ item }) => {
  const {
    countCartItems, updateCountCartItems,
  } = useContext(CountCartItemsContext);
  const { cartItems, updateCartItems } = useContext(CartContext);
  const {
    itemId, name, price, image,
  } = item;

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const updatedCartItem = cartItems
      .find((cartItem) => cartItem.itemId === itemId);

    if (updatedCartItem) {
      setQuantity(updatedCartItem.quantity);
    } else {
      setQuantity(0);
    }
  }, [cartItems, itemId]);

  const decrementQuantity = () => {
    const updatedCartItemIds = cartItems.map((cartItem) => {
      if (cartItem.itemId === itemId && cartItem.quantity > 1) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        };
      }

      return cartItem;
    });

    updateCartItems(updatedCartItemIds);
    setQuantity(quantity - 1);
    localStorage.setItem('cartItemIds', JSON.stringify(updatedCartItemIds));
  };

  const incrementQuantity = () => {
    const updatedCartItemIds = cartItems.map((cartItem) => {
      if (cartItem.itemId === itemId) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        };
      }

      return cartItem;
    });

    updateCartItems(updatedCartItemIds);
    setQuantity(quantity + 1);
    localStorage.setItem('cartItemIds', JSON.stringify(updatedCartItemIds));
  };

  const removeCartItem = () => {
    const updatedCartItems = cartItems
      .filter((cartItem) => cartItem.itemId !== itemId);

    updateCountCartItems(countCartItems - 1);
    updateCartItems(updatedCartItems);
    localStorage.setItem('cartItemIds', JSON.stringify(updatedCartItems));
  };

  return (
    <div className="cart__card">
      <button type="button" className="cart__delete" onClick={removeCartItem}>
        <IconClose />
      </button>

      <div className="cart__item">
        <div className="cart__image-container">
          <img src={image} alt="phone" className="cart__image" />
        </div>

        <p className="cart__product-name">{name}</p>

        <div className="cart__choose-amount">
          <button
            type="button"
            className="cart__amount-button"
            onClick={decrementQuantity}
          >
            -
          </button>

          <p className="cart__amount-of-item">{quantity}</p>

          <button
            type="button"
            className="cart__amount-button cart__amount-button--filled"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>

        <p className="cart__price">{price * quantity}</p>
      </div>
    </div>
  );
};
