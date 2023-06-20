import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import cn from 'classnames';
import { useTheme } from '../../providers/ThemeContext';
import { useSearchPanel } from '../../providers/SearchContext';
import { useBurger } from '../../providers/BurgerContext';
import { CartItemContext } from '../../providers/CartItemsContext';
import { CountFavoritesContext } from '../../providers/FavoriteItemContext';
import {
  IconLikeEmpty, IconThemeDark, IconThemeLight,
  // IconTranslate,
  IconCart, IconWithCounter,
} from '../Icons/_IconKit';

export const IconSet = () => {
  const { theme, toggleTheme } = useTheme();
  const { closeSearch } = useSearchPanel();
  const { setIsOpenBurger } = useBurger();
  const { countFavorites } = useContext(CountFavoritesContext);
  const { cartItemCount } = useContext(CartItemContext);

  const handleClick = () => {
    closeSearch();
    setIsOpenBurger(false);
  };

  return (
    <ul className="icon-set">
      <li className="icon-set__item">
        <NavLink
          to="/favorites"
          className={({ isActive }) => cn('icon-bar__link icon-bar__mobile',
            { 'icon-bar__link--active': isActive })}
          onClick={handleClick}
        >
          <IconWithCounter icon={<IconLikeEmpty />} count={countFavorites} />
        </NavLink>
      </li>

      <li className="icon-set__item">
        <NavLink
          to="/cart"
          className={({ isActive }) => cn('icon-bar__link icon-bar__mobile',
            { 'icon-bar__link--active': isActive })}
          onClick={handleClick}
        >
          <IconWithCounter icon={<IconCart />} count={cartItemCount} />
        </NavLink>
      </li>

      {/* <li className="icon-set__item icon-set__item--100">
        <button type="button" className="icon-bar__link icon-bar__mobile">
          <IconTranslate />
        </button>
      </li> */}

      <li className="icon-set__item icon-set__item--100">
        <button
          type="button"
          className="icon-bar__link icon-bar__mobile"
          onClick={toggleTheme}
        >
          {theme === 'light' ? <IconThemeDark /> : <IconThemeLight />}
        </button>
      </li>
    </ul>
  );
};
