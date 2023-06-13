import { FC } from 'react';
import { IconHome } from '../Icons/IconHome';
import { IconArrow } from '../Icons/IconArrow';

interface Props {
  category: 'Phones' | 'Tablets' | 'Accessories' | 'Favorites' | 'Cart page';
  currentPage?: string;
}

export const Breadcrumbs: FC<Props> = ({ category, currentPage }) => {
  return (
    <div className="breadcrumbs">
      <a href="/">
        <IconHome />
      </a>

      <IconArrow />

      {currentPage ? (
        <>
          <a href={`#/${category}`} className="breadcrumbs__link">
            {category}
          </a>

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
