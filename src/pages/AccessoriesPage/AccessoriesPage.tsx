import { Breadcrumbs } from '../../components/Breadcrumbs';

export const AccessoriesPage = () => {
  const category = 'Accessories';

  return (
    <div className="container">
      <Breadcrumbs category={category} />

      <h1 className="title">Accessories page</h1>
    </div>
  );
};
