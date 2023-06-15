import { useContext } from 'react';
import { CartItemsContext } from '../../providers/CartItemsContext';
import { CartCard } from '../../components/CartCard';

export const CartPage = () => {
  const { cartItems } = useContext(CartItemsContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

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
            {totalPrice}
          </p>

          <p className="cart__total-amount">
            {`Total for ${cartItems.length} item(s)`}
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
