/* eslint-disable no-console */
import {
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductList } from '../../components/ProductList';
import { getProducts } from '../../api/products';
import { Gadget } from '../../types/Gadget';
import { FavoriteItemContext } from '../../providers/FavoriteItemContext';
import { Categories } from '../../components/Categories';
import { Loader } from '../../components/Loader';

export const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<Gadget[]>([]);
  const { favoriteItems } = useContext(FavoriteItemContext);

  const loadProducts = async () => {
    try {
      const products = await getProducts();

      setFavorites(products);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [favoriteItems]);

  const filterFavorits = useMemo(() => favorites.filter(({ itemId }) => (
    favoriteItems.includes(itemId)
  )), [favorites]);

  return (
    <div className="container">
      {!favorites.length && !favoriteItems && <Loader />}

      {favoriteItems.length
        ? (
          <>
            <Breadcrumbs category="Favorites" />

            <h1 className="gadgets-page__title">Favorites</h1>

            <p className="gadgets-page__description">
              {`${filterFavorits.length} items`}
            </p>

            <ProductList gadgets={filterFavorits} />
          </>
        )
        : (
          <div className="empty-cart">
            <h2 className="empty-cart__main-text">
              Oops! Looks like your Favorite is empty at the moment...
            </h2>

            <p className="empty-cart__additional-text">
              {'Let\'s explore some of these fantastic categories?'}
            </p>

            <Categories />
          </div>
        )}
    </div>
  );
};
