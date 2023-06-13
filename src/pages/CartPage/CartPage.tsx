import { IconClose } from '../../components/Icons/IconClose';

export const CartPage = () => {
  return (
    <div className="container gadgets-page">
      <h1 className="gadgets-page__title cart-title">Cart</h1>

      <div className="cart">
        <div className="cart__card">
          <button type="button" className="cart__delete">
            <IconClose />
          </button>

          <div className="cart__item">
            <div className="cart__image-container">
              <img
                // eslint-disable-next-line max-len
                src="https://media.bite.lt/@bite-lt/sites/default/files/products/2021-04/iphone_12_purple-3_1.png"
                alt="phone"
                className="cart__image"
              />
            </div>

            <p className="cart__product-name">
              Apple iPhone 14 Pro 128GB Silver (MQ023)
            </p>

            <div className="cart__choose-amount">
              <button
                type="button"
                className="cart__amount-button"
              >
                -
              </button>

              <p className="cart__amount-of-item">
                1
              </p>

              <button
                type="button"
                className="cart__amount-button cart__amount-button--filled"
              >
                +
              </button>
            </div>

            <p className="cart__price">
              $799
            </p>
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
