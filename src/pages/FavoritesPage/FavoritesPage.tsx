/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductList } from '../../components/ProductList';
import { getProducts } from '../../api/products';
import { Gadget } from '../../types/Gadget';
import { useLocalStorage } from '../../customHooks/useLocalStorage';

export const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<Gadget[]>([]);
  const [favoriteIds] = useLocalStorage('favorites', []);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedFavorites = await getProducts();

        setFavorites(fetchedFavorites);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    loadProducts();
  }, [favoriteIds]);

  const filterFavorits = favorites.filter(({ itemId }) => (
    favoriteIds.includes(itemId)
  ));

  return (
    <div className="container">
      <Breadcrumbs category="Favorites" />

      <h1 className="gadgets-page__title">Favorites</h1>

      <p className="gadgets-page__description">
        {`${filterFavorits.length} items`}
      </p>

      <ProductList gadgets={filterFavorits} />
    </div>
  );
};
