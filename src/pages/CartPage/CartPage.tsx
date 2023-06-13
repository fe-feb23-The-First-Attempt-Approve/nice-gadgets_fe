import { IconClose } from '../../components/Icons/IconClose';

export const CartPage = () => {
  return (
    <div className="container gadgets-page">
      <h1 className="gadgets-page__title">Cart</h1>

      <div className="cart">
        <div className="cart__card">
          <div className="cart__item">
            <div className="cart__selected-product">
              <button type="button">
                <IconClose />
              </button>

              <div className="cart__image-container">
                <img
                  // eslint-disable-next-line max-len
                  src="https://applehome.te.ua/wp-content/uploads/2021/09/iphone-13-pink-select-2021.png"
                  alt="phone"
                  className="cart__image"
                />
              </div>

              <h3 className="cart__product-name">
                Apple iPhone 14 Pro 128GB Silver (MQ023)
              </h3>
            </div>
          </div>
        </div>

        <div className="cart__billing">
          <p className="cart__total-price">
            $2657
          </p>

          <p className="cart__total-amount">
            Total for 3 items
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
