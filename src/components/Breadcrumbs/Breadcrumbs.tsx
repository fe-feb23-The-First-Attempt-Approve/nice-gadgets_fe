import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IconHome } from '../Icons/IconHome';
import { IconArrow } from '../Icons/IconArrow';

interface Props {
  category: 'Phones' | 'Tablets' | 'Accessories' | 'Favorites';
  currentPage?: string;
}

export const Breadcrumbs: FC<Props> = ({ category, currentPage }) => {
  return (
    <div className="breadcrumbs">
      <NavLink to="/">
        <IconHome />
      </NavLink>

      <IconArrow />

      {currentPage ? (
        <>
          <NavLink to={`#/${category}`} className="breadcrumbs__link">
            {category}
          </NavLink>

          <IconArrow />

          <span className="breadcrumbs__text">
            {currentPage}
          </span>
        </>
      ) : (
        <span className="breadcrumbs__text">
          {category}
        </span>
      )}
    </div>
  );
};

Breadcrumbs.defaultProps = {
  currentPage: '',
};
