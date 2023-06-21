import { FC } from 'react';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

interface Props {
  text: string;
}

export const NotFoundGadgets: FC<Props> = ({ text }) => (
  <>
    <MdOutlineProductionQuantityLimits
      className="main-accessories__icon bounce-top"
    />
    <h3 className="main-accessories__sorry tracking-in-contract">
      Sorry
    </h3>
    <h3 className="main-accessories__title-sorry">
      {text}
    </h3>
  </>
);
