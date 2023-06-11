import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { IconMenu } from '../Icons/IconMenu';
import { IconLikeEmpty } from '../Icons/IconLikeEmpty';
import { IconCart } from '../Icons/IconCart';
import { IconClose } from '../Icons/IconClose';
import { useBurger } from '../../providers/BurgerContext';

export const NavigationToggled = () => {
  const { toggleBurger, isOpenBurger } = useBurger();

  return (
    <ul className="navigation--toggled">
      <li className={cn('icon-bar__item', {
        'icon-bar__link--hidden': isOpenBurger,
      })}
      >
        <NavLink
          to="/favorites"
          className={({ isActive }) => cn('icon-bar__link',
            { 'icon-bar__link--active': isActive })}
        >
          <IconLikeEmpty />
        </NavLink>
      </li>

      <li className={cn('icon-bar__item', {
        'icon-bar__link--hidden': isOpenBurger,
      })}
      >
        <NavLink
          to="/cart"
          className={({ isActive }) => cn('icon-bar__link',
            { 'icon-bar__link--active': isActive })}
        >
          <IconCart />
        </NavLink>
      </li>

      <li className={cn('icon-bar__item', {
        'icon-bar__link--hidden': isOpenBurger,
      })}
      >
        <button
          type="button"
          className="icon-bar__link"
          onClick={toggleBurger}
        >
          <IconMenu />
        </button>
      </li>

      <li className={cn('icon-bar__item icon-bar__item--no-borders', {
        'icon-bar__link--hidden': !isOpenBurger,
      })}
      >
        <button
          type="button"
          className="icon-bar__link"
          onClick={toggleBurger}
        >
          <IconClose />
        </button>
      </li>
    </ul>
  );
};
