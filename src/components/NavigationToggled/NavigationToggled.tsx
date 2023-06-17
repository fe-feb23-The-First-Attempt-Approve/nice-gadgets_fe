import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useContext } from 'react';
import { CountFavoritesContext } from '../../providers/FavoriteItemContext';
import { CartItemContext } from '../../providers/CartItemsContext';
import {
  IconMenu, IconClose, IconLikeEmpty, IconCart, IconWithCounter,
} from '../Icons/_IconKit';
import { useBurger } from '../../providers/BurgerContext';

export const NavigationToggled = () => {
  const { toggleBurger, isOpenBurger } = useBurger();
  const { countFavorites } = useContext(CountFavoritesContext);
  const { cartItemCount } = useContext(CartItemContext);

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
          <IconWithCounter icon={<IconLikeEmpty />} count={countFavorites} />
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
          <IconWithCounter icon={<IconCart />} count={cartItemCount} />
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
