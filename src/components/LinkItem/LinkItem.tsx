import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  to: string;
  label: string;
}

export const LinkItem: FC<Props> = ({ to, label }) => {
  return (
    <li className="nav__item">
      <Link
        to={to}
        className={cn('nav__link', {
          'nav__link--active': useLocation().pathname === to,
        })}
      >
        {label}
      </Link>
    </li>
  );
};
