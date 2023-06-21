import { useContext } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductsContext } from '../../providers/ProductsContext';
import { NotFoundGadgets } from '../../components/NotFoundGadgets';

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
          <NotFoundGadgets text="No found products in this category" />
        </main>
      )}
    </div>
  );
};
