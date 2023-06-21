import { FC } from 'react';
import { CategoryCard } from '../CategoryCard';

interface Props {
  productsAmount: {
    phonesAmount: number,
    tabletsAmount: number,
    accessoriesAmount: number
  }
}

export const Categories: FC<Props> = ({ productsAmount }) => {
  return (
    <div className="categories">
      <h2 className="categories__title">Shop by category</h2>

      <div className="categories__categories-cards">
        <CategoryCard
          link="/phones"
          image="./img/categories/iphones.jpg"
          title="Modile phones"
          amount={productsAmount.phonesAmount}
        />

        <CategoryCard
          link="/tablets"
          image="./img/categories/ipads.jpg"
          title="Tablets"
          amount={productsAmount.tabletsAmount}
        />

        <CategoryCard
          link="/accessories"
          image="./img/categories/accessories.jpg"
          title="Accessories"
          amount={productsAmount.accessoriesAmount}
        />
      </div>
    </div>
  );
};
