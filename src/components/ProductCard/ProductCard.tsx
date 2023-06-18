import { Link } from 'react-router-dom';
import { HeartButton } from '../HeartButton/HeartButton';
import { BuyButton } from '../BuyButton';
import { Gadget } from '../../types/Gadget';

interface Props {
  phone: Gadget,
}

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const {
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    image,
    itemId,
    category,
  } = phone;

  return (
    <div className="product-card__container">
      <div className="product-card__item">
        <Link
          className="product-card__link"
          to={`/${category}/${itemId}`}
        >
          <div className="product-card__photo-container">
            <img
              src={image}
              alt={name}
              className="product-card__image"
            />
          </div>

          <h3 className="product-card__title">
            {name}
          </h3>
        </Link>

        <div className="product-card__item-description">
          <p className="product-card__price">
            &#x24;
            {price}
          </p>

          <p className="product-card__price product-card__price_not-actual">
            &#x24;
            <del>{fullPrice}</del>
          </p>

          <hr className="product-card__separator" />

          <div className="product-card__parameters parameters">
            <p className="parametrs__description parameters__description_key">
              Screen
            </p>

            <p className="parametrs__description parameters__description_value">
              {screen}
            </p>

            <p className="parametrs__description parameters__description_key">
              Capacity
            </p>

            <p className="parametrs__description parameters__description_value">
              {capacity}
            </p>

            <p className="parametrs__description parameters__description_key">
              RAM
            </p>

            <p className="parametrs__description parameters__description_value">
              {ram}
            </p>
          </div>

          <div className="product-card__footer">
            <BuyButton gadget={phone} />

            <span className="product-card__like">
              <HeartButton itemId={itemId} name={name} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
