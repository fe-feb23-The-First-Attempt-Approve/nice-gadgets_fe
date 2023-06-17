import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useTheme } from '../../providers/ThemeContext';
import { useSearchPanel } from '../../providers/SearchContext';
import { CountFavoritesContext } from '../../providers/FavoriteItemContext';
import { CartItemContext } from '../../providers/CartItemsContext';
import { SearchingArea } from '../SearchingArea';
import {
  IconLikeEmpty, IconCart, IconWithCounter,
  IconThemeLight, IconThemeDark, IconTranslate,
  IconAuthorization,
} from '../Icons/_IconKit';

export const IconBar = () => {
  const { theme, toggleTheme } = useTheme();
  const { cartItemCount } = useContext(CartItemContext);
  const { countFavorites } = useContext(CountFavoritesContext);
  const { closeSearch } = useSearchPanel();

  return (
    <ul className="icon-bar">
      <li className="icon-bar__item">
        <SearchingArea />
      </li>

      <li className="icon-bar__item">
        <button type="button" className="icon-bar__link">
          <IconTranslate />
        </button>
      </li>

      <li className="icon-bar__item">
        <button
          type="button"
          className="icon-bar__link"
          onClick={toggleTheme}
        >
          {theme === 'light' ? <IconThemeDark /> : <IconThemeLight />}
        </button>
      </li>

      <li className="icon-bar__item">
        <NavLink
          to="/favorites"
          className={({ isActive }) => cn('icon-bar__link',
            { 'icon-bar__link--active': isActive })}
          onClick={closeSearch}
        >
          <IconWithCounter icon={<IconLikeEmpty />} count={countFavorites} />
        </NavLink>
      </li>

      <li className="icon-bar__item">
        <NavLink
          to="/cart"
          className={({ isActive }) => cn('icon-bar__link',
            { 'icon-bar__link--active': isActive })}
        >
          <IconWithCounter icon={<IconCart />} count={cartItemCount} />
        </NavLink>
      </li>

      <li className="icon-bar__item">
        <button type="button" className="icon-bar__link">
          <IconAuthorization />
        </button>
      </li>
    </ul>
  );
};
