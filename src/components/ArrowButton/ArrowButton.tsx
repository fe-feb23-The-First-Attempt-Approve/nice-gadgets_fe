import { IconArrow } from '../Icons/IconArrow';

interface Props {
  arrowDirection: 'top' | 'down' | 'right' | 'left';
}

export const ArrowButton: React.FC<Props> = ({ arrowDirection }) => {
  const arrowContainerClassName = `arrow-container arrow-container--${arrowDirection}`;

  return (
    <div className={arrowContainerClassName}>
      <IconArrow />
    </div>
  );
};
