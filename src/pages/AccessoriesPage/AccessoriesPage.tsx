import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { useContext } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductsContext } from '../../providers/ProductsContext';

export const AccessoriesPage = () => {
  const { productsAmount } = useContext(ProductsContext);
  const category = 'Accessories';

  return (
    <div className="container">

      <Breadcrumbs category={category} />

      <h1 className="gadgets-page__title">Accessories page</h1>

      <p className="gadgets-page__description">
        {`${0} models`}
      </p>
      {!!productsAmount.accessoriesAmount || (
        <main className="main-accessories main-accessories_position">
          <MdOutlineProductionQuantityLimits
            className="main-accessories__icon bounce-top"
          />

          <h3 className="main-accessories__sorry">Sorry</h3>

          <h3 className="main-accessories__title-sorry">
            no products found in this category
          </h3>
        </main>
      )}
    </div>
  );
};
