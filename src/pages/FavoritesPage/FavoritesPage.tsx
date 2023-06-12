import { Breadcrumbs } from '../../components/Breadcrumbs';

export const FavoritesPage = () => {
  const category = 'Favorites';

  return (
    <div className="container">
      <Breadcrumbs category={category} />

      <h1 className="title">Favorites</h1>
    </div>
  );
};
