import { FC } from 'react';
import { Directions } from '../../types/directions';

type Props = {
  direction: Directions;
};

export const ArrowButton: FC<Props> = ({ direction }) => {
  return (
    <span className="arrow-conteiner">
      <img
        style={{ transform: `rotate(${direction}deg)` }}
        src="../../img/svg/arrow.svg"
        alt={`arrow ${direction} button`}
        className="arrow-up-image"
      />
    </span>
  );
};
