import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useContext } from 'react';
import { CountFavoritesContext } from '../../providers/CountFavorites';
import { CountCartItemsContext } from '../../providers/CountCartItems';
import { IconMenu } from '../Icons/IconMenu';
import { IconLikeEmpty } from '../Icons/IconLikeEmpty';
import { IconCart } from '../Icons/IconCart';
import { IconClose } from '../Icons/IconClose';
import { useBurger } from '../../providers/BurgerContext';
import { IconWithCounter } from '../Icons/IconWithCounter';

export const NavigationToggled = () => {
  const { toggleBurger, isOpenBurger } = useBurger();
  const { countFavorites } = useContext(CountFavoritesContext);
  const { countCartItems } = useContext(CountCartItemsContext);

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
          <IconWithCounter icon={<IconCart />} count={countCartItems} />
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
