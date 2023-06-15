import { useContext } from 'react';
import { CartItemsContext } from '../../providers/CartItemsContext';
import { IconClose } from '../Icons/IconClose';
import { Gadget } from '../../types/Gadget';

interface CartCardProps {
  item: Gadget;
}

export const CartCard = ({ item }: CartCardProps) => {
  const { addToCart, removeFromCart, cartItems } = useContext(CartItemsContext);

  const updateLocalStorage = (updatedProduct: Gadget) => {
    const updatedCartItems = cartItems.map((product) => {
      if (product.id === updatedProduct.id) {
        return updatedProduct;
      }

      return product;
    });

    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      const updatedProduct = {
        ...item,
        quantity: item.quantity - 1,
      };

      removeFromCart(item.id);
      addToCart(updatedProduct);
      updateLocalStorage(updatedProduct);
    }
  };

  const incrementQuantity = () => {
    const updatedProduct = {
      ...item,
      quantity: item.quantity + 1,
    };

    removeFromCart(item.id);
    addToCart(updatedProduct);
    updateLocalStorage(updatedProduct);
  };

  const handleDelete = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cart__card">
      <button type="button" className="cart__delete" onClick={handleDelete}>
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

          <p className="cart__amount-of-item">{item.quantity}</p>

          <button
            type="button"
            className="cart__amount-button cart__amount-button--filled"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>

        <p className="cart__price">{item.price * item.quantity}</p>
      </div>
    </div>
  );
};
