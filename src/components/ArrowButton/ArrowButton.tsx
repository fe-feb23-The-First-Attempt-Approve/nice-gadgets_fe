import { FC } from 'react';
import { IconArrow } from '../Icons/_IconKit';

interface Props {
  arrowDirection: 'top' | 'down' | 'right' | 'left';
  // eslint-disable-next-line react/require-default-props
  hasBackground?: boolean;
}

export const ArrowButton: FC<Props> = ({ arrowDirection, hasBackground }) => {
  const arrowContainerClassName = `arrow-container arrow-container--${arrowDirection}`;

  const buttonClassName = hasBackground
    ? `${arrowContainerClassName} arrow-container-fill`
    : arrowContainerClassName;

  return (
    <button type="button" className={buttonClassName}>
      <IconArrow />
    </button>
  );
};
