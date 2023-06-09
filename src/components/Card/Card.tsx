import './Card.scss';

export const Card = () => {
  return (
    <div className="product-card__container">
      <div className="product-card__item">
        <a
          className="product-card__link"
          href="/"
        >
          <div className="product-card__photo-container">
            <img
              src="/img/cell-phone-it-should-be-delete.png"
              alt="cell-phone"
              className="product-card__image"
            />
          </div>
        </a>

        <div className="product-card__item-deskription">
          <a href="/" className="product-card__device-link">
            <h3 className="product-card__title">
              Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
            </h3>
          </a>

          <p className="product-card__price">
            &#x24; 399.00
          </p>

          <p className="product-card__price product-card__price_not-actual">
            &#x24;
            <del>399.00</del>
          </p>

          <div className="product-card__separator" />

          <div className="product-card__parameters parametrs">
            <p className="parametrs__description parametrs__description_key">
              Screen
            </p>
            <p className="parametrs__description parametrs__description_value">
              5.8” OLED
            </p>
            <p className="parametrs__description parametrs__description_key">
              Capacity
            </p>
            <p className="parametrs__description parametrs__description_value">
              64 GB
            </p>
            <p className="parametrs__description parametrs__description_key">
              RAM
            </p>
            <p className="parametrs__description parametrs__description_value">
              4 GB
            </p>
          </div>

          <div className="product-card__footer">
            <a href="/" className="product-card__button">
              Add to cart
            </a>
            <a href="/" className="product-card__like">
              <img
                src="/img/svg/heart-like.svg"
                alt="heart-like"
                className="product-card__heart-like"
              />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
