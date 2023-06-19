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
          // eslint-disable-next-line
          image="https://static.independent.co.uk/2021/10/04/14/iphones%20IndyBest.jpg"
          title="Modile phones"
          amount={productsAmount.phonesAmount}
        />
        <CategoryCard
          link="/tablets"
          // eslint-disable-next-line
          image="https://hips.hearstapps.com/hmg-prod/images/apple-ipad-8th-generation-1600702336.jpg"
          title="Tablets"
          amount={productsAmount.tabletsAmount}
        />
        <CategoryCard
          link="/accessories"
          // eslint-disable-next-line
          image="https://m.economictimes.com/thumb/msid-98599217,width-3000,height-3000,resizemode-4,imgsize-288842/apple1-.jpg"
          title="Accessories"
          amount={productsAmount.accessoriesAmount}
        />
      </div>
    </div>
  );
};
