import { Breadcrumbs } from '../../components/Breadcrumbs';

export const AccessoriesPage = () => {
  const category = 'Accessories';

  return (
    <div className="container">
      <Breadcrumbs category={category} />

      <h1 className="gadgets-page__title">Accessories page</h1>

      <p className="gadgets-page__description">
        {`${0} models`}
      </p>
    </div>
  );
};
