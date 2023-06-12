import { Breadcrumbs } from '../../components/Breadcrumbs';

export const TabletsPage = () => {
  const category = 'Tablets';

  return (
    <div className="container">
      <Breadcrumbs category={category} />

      <h1 className="title">Tablets page</h1>
    </div>
  );
};
