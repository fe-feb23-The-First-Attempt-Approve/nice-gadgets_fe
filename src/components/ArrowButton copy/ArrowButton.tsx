import { FC } from 'react';
import { Directions } from '../../types/directions';

type Props = {
  direction: Directions;
};

export const ArrowButton: FC<Props> = ({ direction }) => {
  return (
    <span className="footer__arrow-conteiner">
      <img
        src="../../img/svg/arrow.svg"
        alt={`arrow ${direction} button`}
        className="footer__arrow-up-image"
      />
    </span>
  );
};
