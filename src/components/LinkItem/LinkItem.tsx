import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  to: string;
  label: string;
}

export const LinkItem: FC<Props> = ({ to, label }) => {
  return (
    <li className="nav__item">
      <NavLink
        to={to}
        className={({ isActive }) => cn('nav__link',
          { 'nav__link--active': isActive })}
      >
        {label}
      </NavLink>
    </li>
  );
};
