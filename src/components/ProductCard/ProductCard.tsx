import { Link } from 'react-router-dom';
import { HeartButton } from '../HeartButton/HeartButton';

export const ProductCard = () => {
  return (
    <div className="product-card__container">
      <div className="product-card__item">
        <Link
          className="product-card__link"
          to="/"
        >
          <div className="product-card__photo-container">
            <img
              src="/img/product-card/cell-phone-it-should-be-delete.png"
              alt="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
              className="product-card__image"
            />
          </div>
        </Link>

        <div className="product-card__item-description">
          <Link to="/" className="product-card__device-link">
            <h3 className="product-card__title">
              Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
            </h3>
          </Link>

          <p className="product-card__price">
            &#x24; 399.00
          </p>

          <p className="product-card__price product-card__price_not-actual">
            &#x24;
            <del>399.00</del>
          </p>

          <div className="product-card__separator" />

          <div className="product-card__parameters parameters">
            <p className="parametrs__description parameters__description_key">
              Screen
            </p>

            <p className="parametrs__description parameters__description_value">
              5.8” OLED
            </p>

            <p className="parametrs__description parameters__description_key">
              Capacity
            </p>

            <p className="parametrs__description parameters__description_value">
              64 GB
            </p>

            <p className="parametrs__description parameters__description_key">
              RAM
            </p>

            <p className="parametrs__description parameters__description_value">
              4 GB
            </p>
          </div>

          <div className="product-card__footer">
            <button type="button" className="product-card__button">
              Add to cart
            </button>
            <button type="button" className="product-card__like">
              <HeartButton />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
