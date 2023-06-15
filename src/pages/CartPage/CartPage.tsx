import { useContext } from 'react';
import { CartCard } from '../../components/CartCard';
import { CartContext } from '../../providers/CartContext';

export const CartPage = () => {
  const { cartItems, totalPrice, totalQuantity } = useContext(CartContext);

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
            {`Total for ${totalQuantity} item(s)`}
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
