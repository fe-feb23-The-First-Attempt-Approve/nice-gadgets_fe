import { useContext } from 'react';
import { CartItemsContext } from '../../providers/CartItemsContext';
import { IconClose } from '../Icons/IconClose';
import { Gadget } from '../../types/Gadget';

interface CartCardProps {
  product: Gadget;
}

export const CartCard = ({ product }: CartCardProps) => {
  const { addToCart, removeFromCart, cartItems } = useContext(CartItemsContext);

  const updateLocalStorage = (updatedProduct: Gadget) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === updatedProduct.id) {
        return updatedProduct;
      }

      return item;
    });

    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const decrementQuantity = () => {
    if (product.quantity > 1) {
      const updatedProduct = {
        ...product,
        quantity: product.quantity - 1,
      };

      removeFromCart(product.id);
      addToCart(updatedProduct);
      updateLocalStorage(updatedProduct);
    }
  };

  const incrementQuantity = () => {
    const updatedProduct = {
      ...product,
      quantity: product.quantity + 1,
    };

    removeFromCart(product.id);
    addToCart(updatedProduct);
    updateLocalStorage(updatedProduct);
  };

  const handleDelete = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="cart__card">
      <button type="button" className="cart__delete" onClick={handleDelete}>
        <IconClose />
      </button>

      <div className="cart__item">
        <div className="cart__image-container">
          <img src={product.image} alt="phone" className="cart__image" />
        </div>

        <p className="cart__product-name">{product.name}</p>

        <div className="cart__choose-amount">
          <button
            type="button"
            className="cart__amount-button"
            onClick={decrementQuantity}
          >
            -
          </button>

          <p className="cart__amount-of-item">{product.quantity}</p>

          <button
            type="button"
            className="cart__amount-button cart__amount-button--filled"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>

        <p className="cart__price">{product.price * product.quantity}</p>
      </div>
    </div>
  );
};
