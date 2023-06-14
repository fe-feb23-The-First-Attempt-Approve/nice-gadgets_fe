import { FC, useState } from 'react';
import { IconClose } from '../Icons/IconClose';

type CartCardProps = {
  name: string;
  price: number;
  image: string;
};

export const CartCard: FC<CartCardProps> = ({ name, price, image }) => {
  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="cart__card">
      <button type="button" className="cart__delete">
        <IconClose />
      </button>

      <div className="cart__item">
        <div className="cart__image-container">
          <img src={image} alt="phone" className="cart__image" />
        </div>

        <p className="cart__product-name">{name}</p>

        <div className="cart__choose-amount">
          <button
            type="button"
            className="cart__amount-button"
            onClick={decrementQuantity}
          >
            -
          </button>

          <p className="cart__amount-of-item">{quantity}</p>

          <button
            type="button"
            className="cart__amount-button cart__amount-button--filled"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>

        <p className="cart__price">{price * quantity}</p>
      </div>
    </div>
  );
};
