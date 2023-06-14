import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductList } from '../../components/ProductList';
import { useLocalStorage } from '../../customHooks/useLocalStorage';

export const FavoritesPage = () => {
  const category = 'Favorites';
  const [favorite] = useLocalStorage('favorites', []);

  return (
    <div className="container">
      <Breadcrumbs category={category} />

      <h1 className="gadgets-page__title">Favorites</h1>

      <p className="gadgets-page__description">
        {`${favorite.length} items`}
      </p>

      <ProductList gadgets={favorite} />
    </div>
  );
};
