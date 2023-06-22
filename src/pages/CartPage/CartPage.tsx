import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartCard } from '../../components/CartCard';
import { CartItemContext } from '../../providers/CartItemsContext';
import PaymentSuccessModal from '../../components/Modals/PaymentSuccessModal';
import { Categories } from '../../components/Categories';
import { useProducts } from '../../providers/ProductsContext';

export const CartPage = () => {
  const { cartItems, updateCartItems } = useContext(CartItemContext);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const nav = useNavigate();

  const { productsAmount } = useProducts();

  const totalPrice = cartItems
    .reduce((total, item) => total + (item.price * (item.quantity || 0)), 0);
  const totalQuantity = cartItems
    .reduce((total, item) => total + (item.quantity || 0), 0);

  const handleCheckout = () => {
    setIsPaymentSuccess(true);
    document.body.classList.add('scrolling-blocked');
  };

  useEffect(() => {
    if (isPaymentSuccess) {
      setTimeout(() => {
        setIsPaymentSuccess(false);
        setRedirectToHome(true);
        document.body.classList.remove('scrolling-blocked');
      }, 3000);
      localStorage.removeItem('cartItems');
      updateCartItems([]);
    }
  }, [isPaymentSuccess]);

  useEffect(() => {
    if (redirectToHome) {
      nav('/');
    }
  }, [redirectToHome, nav]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="container gadgets-page">
      <h1 className="gadgets-page__title cart-title">Cart</h1>

      {cartItems.length > 0 && (
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
      )}

      {isPaymentSuccess && (
        <PaymentSuccessModal />
      )}

      {/* eslint-disable-next-line */}
      {isPaymentSuccess || cartItems.length < 1 && (
        <div className="empty-cart">
          <h2 className="empty-cart__main-text">
            Oops! Looks like your cart is empty at the moment...
          </h2>

          <p className="empty-cart__additional-text">
            {'Let\'s explore some of these fantastic categories?'}
          </p>

          <Categories productsAmount={productsAmount} />
        </div>
      )}
    </div>
  );
};
