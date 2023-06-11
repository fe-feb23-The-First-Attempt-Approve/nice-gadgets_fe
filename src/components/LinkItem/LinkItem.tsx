import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useBurger } from '../../providers/BurgerContext';
import { useSearchPanel } from '../../providers/SearchContext';

interface Props {
  to: string;
  label: string;
}

export const LinkItem: FC<Props> = ({ to, label }) => {
  const { closeSearch } = useSearchPanel();
  const { setIsOpenBurger } = useBurger();

  const handleClick = () => {
    closeSearch();
    setIsOpenBurger(false);
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
