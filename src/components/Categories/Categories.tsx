import { CategoryCard } from '../CategoryCard';

export const Categories = () => {
  return (
    <div className="categories">
      <h2 className="categories__title">Shop by category</h2>

      <div className="categories__categories-cards">
        <CategoryCard
          link="/phones"
          image=""
          title="Modile phones"
          amount={1}
        />
        <CategoryCard
          link="/tablets"
          image=""
          title="Tablets"
          amount={2}
        />
        <CategoryCard
          link="/accessories"
          image=""
          title="Accessories"
          amount={3}
        />
      </div>
    </div>
  );
};
