import { FC } from 'react';
import { Directions } from '../../types/directions';
import { arrow } from '../../img/images';

type Props = {
  direction: Directions;
};

export const ArrowButton: FC<Props> = ({ direction }) => {
  return (
    <span className="arrow-conteiner">
      <img
        style={{ transform: `rotate(${direction}deg)` }}
        src={arrow}
        alt={`arrow ${direction} button`}
        className="arrow-up-image"
      />
    </span>
  );
};
