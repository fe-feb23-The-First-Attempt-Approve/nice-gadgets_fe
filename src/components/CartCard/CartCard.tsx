import { FC, useContext, useState } from 'react';
import { IconClose } from '../Icons/IconClose';
import { Gadget } from '../../types/Gadget';
import { CartItemContext } from '../../providers/CartItemsContext';

type CartCardProps = {
  item: Gadget;
};

export const CartCard: FC<CartCardProps> = ({ item }) => {
  const { cartItems, updateCartItems } = useContext(CartItemContext);
  const [quantity, setQuantity] = useState<number>(item.quantity || 0);

  const updateQuantityInCartItems = (newQuantity: number) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
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
      .filter((cartItem) => cartItem.id !== item.id);

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
        <div className="cart__image-container">
          <img src={item.image} alt="phone" className="cart__image" />
        </div>

        <p className="cart__product-name">{item.name}</p>

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

        <p className="cart__price">{item.price * quantity}</p>
      </div>
    </div>
  );
};
