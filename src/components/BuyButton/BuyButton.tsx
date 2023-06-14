import { FC } from 'react';
import { Gadget } from '../../types/Gadget';

interface Props {
  gadget: Gadget;
}

export const BuyButton: FC<Props> = ({ gadget }) => {
  return (
    <button type="button" className="product-card__button">
      {gadget}
    </button>
  );
};
