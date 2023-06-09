import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useNavigation } from '../../Context';

interface Props {
  to: string;
  label: string;
}

export const LinkItem: FC<Props> = ({ to, label }) => {
  const { collapseSearchBar } = useNavigation();

  const handleClick = () => {
    collapseSearchBar();
  };

  return (
    <li className="nav__item">
      <NavLink
        to={to}
        className={({ isActive }) => cn('nav__link',
          { 'nav__link--active': isActive })}
        onClick={handleClick}
      >
        {label}
      </NavLink>
    </li>
  );
};
