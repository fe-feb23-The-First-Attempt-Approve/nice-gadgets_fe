import { FC } from 'react';
import { Link } from 'react-router-dom';

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
          className="category-card__image"
          src={image}
          alt={title}
        />
      </div>

      <h4 className="category-card__title">
        {title}
      </h4>

      <p className="category-card__models-amount">
        {`${amount} models`}
      </p>
    </Link>
  </div>
);
