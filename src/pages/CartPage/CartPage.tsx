import { useEffect, useState, useCallback } from 'react';
import { CartCard } from '../../components/CartCard';
import { getPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';

export const CartPage = () => {
  const [cartItems, setCartItems] = useState<Phone[]>([]);
  const [phones, setPhones] = useState<Phone[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const loadPhones = useCallback(async () => {
    try {
      const { phones: phonesFromServer } = await getPhones();

      setPhones(phonesFromServer);
    } catch {
      /* eslint-disable-next-line */
      console.log('Failed to load phones');
    }
  }, []);

  useEffect(() => {
    loadPhones();
  }, []);

  useEffect(() => {
    const storedCartItemIds = localStorage.getItem('cartItemIds');

    if (storedCartItemIds) {
      const cartItemIds: string[] = JSON.parse(storedCartItemIds);
      const cartItemsData = phones
        .filter((phone) => cartItemIds.includes(phone.itemId));

      setCartItems(cartItemsData);

      const totalAmount = cartItemsData.reduce(
        (total, item) => total + item.price,
        0,
      );

      setTotalPrice(totalAmount);
    }
  }, [phones]);

  return (
    <div className="container gadgets-page">
      <h1 className="gadgets-page__title cart-title">Cart</h1>

      <div className="cart">
        {cartItems.map((item) => (
          <CartCard
            key={item.itemId}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}

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
