import { useContext } from 'react';
import { CartCard } from '../../components/CartCard';
import { CartItemContext } from '../../providers/CartItemsContext';

export const CartPage = () => {
  const { cartItems } = useContext(CartItemContext);

  const totalPrice = cartItems
    .reduce((total, item) => total + (item.price * (item.quantity || 0)), 0);
  const totalQuantity = cartItems
    .reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <div className="container gadgets-page">
      <h1 className="gadgets-page__title cart-title">Cart</h1>

      <div className="cart">
        <div className="cart__list">
          {cartItems.map((item) => (
            <CartCard
              key={item.itemId}
              item={item}
            />
          ))}
        </div>

        <div className="cart__billing">
          <p className="cart__total-price">
            {`$ ${totalPrice}`}
          </p>

          <p className="cart__total-amount">
            {totalQuantity < 2
              ? `Total for ${totalQuantity} item`
              : `Total for ${totalQuantity} items`}
          </p>

          <hr className="cart__separator" />

          <button type="button" className="cart__button">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
