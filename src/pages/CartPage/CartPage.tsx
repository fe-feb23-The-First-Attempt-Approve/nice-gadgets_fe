import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartCard } from '../../components/CartCard';
import { CartItemContext } from '../../providers/CartItemsContext';
import PaymentSuccessModal from '../../components/Modals/PaymentSuccessModal';
import { Categories } from '../../components/Categories';

export const CartPage = () => {
  const { cartItems, updateCartItems } = useContext(CartItemContext);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const nav = useNavigate();

  const totalPrice = cartItems
    .reduce((total, item) => total + (item.price * (item.quantity || 0)), 0);
  const totalQuantity = cartItems
    .reduce((total, item) => total + (item.quantity || 0), 0);

  const handleCheckout = () => {
    setIsPaymentSuccess(true);

    setTimeout(() => {
      setIsPaymentSuccess(false);
      setRedirectToHome(true);
    }, 3000);
    localStorage.removeItem('cartItems');
    updateCartItems([]);
  };

  if (redirectToHome) {
    nav('/');
  }

  return (
    <div className="container gadgets-page">
      <h1 className="gadgets-page__title cart-title">Cart</h1>

      {cartItems.length > 0 ? (
        <div className="cart">
          <div className="cart__list">
            {cartItems.map((gadget) => (
              <CartCard
                key={gadget.itemId}
                gadget={gadget}
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

            <button
              type="button"
              className="cart__button"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h2 className="empty-cart__main-text">
            Oops! Looks like your cart is empty at the moment...
          </h2>

          <p className="empty-cart__additional-text">
            {'Let\'s explore some of these fantastic categories?'}
          </p>

          <Categories />
        </div>
      )}

      {isPaymentSuccess && (
        <PaymentSuccessModal />
      )}
    </div>
  );
};
