/* eslint-disable no-console */
import {
  useContext,
  useEffect,
  useState,
} from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductList } from '../../components/ProductList';
import { Gadget } from '../../types/Gadget';
import { FavoriteItemContext } from '../../providers/FavoriteItemContext';
import { Categories } from '../../components/Categories';
import { Loader } from '../../components/Loader';
import { useProducts } from '../../providers/ProductsContext';
import { getProductsByIds } from '../../api/products';

export const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<Gadget[]>([]);
  const { favoriteItems } = useContext(FavoriteItemContext);
  const { productsAmount } = useProducts();

  const loadProducts = async () => {
    try {
      let products: Gadget[] = [];

      if (favoriteItems.length !== 0) {
        products = await getProductsByIds(favoriteItems);
      }

      setFavorites(products);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [favoriteItems]);

  return (
    <div className="container">
      {!favorites.length && !!favoriteItems.length && <Loader />}

      {favoriteItems.length
        ? (
          <>
            <Breadcrumbs category="Favorites" />

            <h1 className="gadgets-page__title">Favorites</h1>

            <p className="gadgets-page__description">
              {`${favorites.length} items`}
            </p>

            <ProductList gadgets={favorites} />
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

            <Categories productsAmount={productsAmount} />
          </div>
        )}
    </div>
  );
};
