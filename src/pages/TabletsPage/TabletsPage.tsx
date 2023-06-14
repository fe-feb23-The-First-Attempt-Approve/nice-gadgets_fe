import { Breadcrumbs } from '../../components/Breadcrumbs';

export const TabletsPage = () => {
  const category = 'Tablets';

  return (
    <div className="container">
      <Breadcrumbs category={category} />

      <h1 className="gadgets-page__title">Tablets page</h1>

      <p className="gadgets-page__description">
        {`${0} models`}
      </p>
    </div>
  );
};
