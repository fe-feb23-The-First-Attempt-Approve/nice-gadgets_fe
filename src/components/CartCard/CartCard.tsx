import { FC, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartItemContext } from '../../providers/CartItemsContext';
import { Gadget } from '../../types/Gadget';
import { IconClose } from '../Icons/_IconKit';

type CartCardProps = {
  gadget: Gadget;
};

export const CartCard: FC<CartCardProps> = ({ gadget }) => {
  const { cartItems, updateCartItems } = useContext(CartItemContext);
  const [quantity, setQuantity] = useState<number>(gadget.quantity || 0);

  const updateQuantityInCartItems = (newQuantity: number) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === gadget.id) {
        return { ...cartItem, quantity: newQuantity };
      }

      return cartItem;
    });

    updateCartItems(updatedCartItems);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;

      setQuantity(newQuantity);
      updateQuantityInCartItems(newQuantity);
    }
  };

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;

    setQuantity(newQuantity);
    updateQuantityInCartItems(newQuantity);
  };

  const handleDelete = () => {
    const updatedCartItems = cartItems
      .filter((cartItem) => cartItem.id !== gadget.id);

    updateCartItems(updatedCartItems);
  };

  return (
    <div className="cart__card">
      <button
        type="button"
        className="cart__delete"
        onClick={handleDelete}
      >
        <IconClose />
      </button>

      <div className="cart__item">
        <NavLink to={`/${gadget.category}/${gadget.itemId}`} className="link-to-item">
          <div className="cart__image-container">
            <img src={gadget.image} alt="phone" className="cart__image" />
          </div>
        </NavLink>

        <NavLink to={`/${gadget.category}/${gadget.itemId}`} className="link-to-item">
          <p className="cart__product-name">{gadget.name}</p>
        </NavLink>

        <div className="cart__calculated-field">
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

          <p className="cart__price">{gadget.price * quantity}</p>
        </div>
      </div>
    </div>
  );
};
