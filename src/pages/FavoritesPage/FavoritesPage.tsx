import { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductList } from '../../components/ProductList';
import { useLocalStorage } from '../../customHooks/useLocalStorage';

export const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [favorite] = useLocalStorage('favorites', []);

  useEffect(() => {
    setFavorites(favorite);
  }, [favorite]);

  return (
    <div className="container">
      <Breadcrumbs category="Favorites" />

      <h1 className="gadgets-page__title">Favorites</h1>

      <p className="gadgets-page__description">
        {`${favorites.length} items`}
      </p>

      <ProductList gadgets={favorites} />
    </div>
  );
};
