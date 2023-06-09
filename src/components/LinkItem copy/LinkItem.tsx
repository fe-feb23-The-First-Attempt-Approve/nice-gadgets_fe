import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

interface LinkItemProps {
  to: string;
  label: string;
}

export const LinkItem: FC<LinkItemProps> = ({ to, label }) => {
  return (
    <li className="nav__item">
      <NavLink
        to={to}
        className={(active) => cn('nav__link',
          { 'nav__link--active': active })}
      >
        {label}
      </NavLink>
    </li>
  );
};
