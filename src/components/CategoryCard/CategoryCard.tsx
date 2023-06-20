import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  link: string;
  image: string;
  title: string;
  amount: number;
};

export const CategoryCard: FC<Props> = ({
  link,
  image,
  title,
  amount,
}) => (
  <div className="category-card">
    <Link to={link} className="category-card__link">
      <div className="category-card__img-container">
        <img
          className={cn(
            'category-card__image',
            { 'category-card__image_disabled': !amount },
          )}
          src={image}
          alt={title}
        />
      </div>

      <h4 className="category-card__title">
        {title}
      </h4>

      <p className="category-card__models-amount">
        {amount ? `${amount} models` : 'Goods awaiting delivery'}
      </p>
    </Link>
  </div>
);
