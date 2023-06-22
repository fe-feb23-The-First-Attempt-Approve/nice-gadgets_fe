import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useTheme } from '../../providers/ThemeContext';
import { useSearchPanel } from '../../providers/SearchContext';
import { FavoriteItemContext } from '../../providers/FavoriteItemContext';
import { CartItemContext } from '../../providers/CartItemsContext';
import { SearchingArea } from '../SearchingArea';
import {
  IconLikeEmpty, IconCart, IconWithCounter,
  IconThemeLight, IconThemeDark,
  // IconTranslate,
  IconAuthorization, IconPerson,
} from '../Icons/_IconKit';
import { useAuth } from '../../providers/AuthContext';

export const IconBar = () => {
  const { theme, toggleTheme } = useTheme();
  const { cartItemCount } = useContext(CartItemContext);
  const { favoriteItemCount } = useContext(FavoriteItemContext);
  const { closeSearch } = useSearchPanel();
  const { isModalActive, setIsModalActive } = useAuth();
  const token = !!localStorage.getItem('token');

  return (
    <ul className="icon-bar">
      <li className="icon-bar__item">
        <SearchingArea />
      </li>

      {/* <li className="icon-bar__item">
        <button type="button" className="icon-bar__link">
          <IconTranslate />
        </button>
      </li> */}

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
          <IconWithCounter
            icon={<IconLikeEmpty />}
            count={favoriteItemCount}
          />
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
        {token ? (
          <NavLink to="/profile" className="icon-bar__link">
            <IconPerson />
          </NavLink>
        ) : (
          <button
            type="button"
            className="icon-bar__link"
            onClick={() => setIsModalActive(!isModalActive)}
          >
            <IconAuthorization />
          </button>
        )}
      </li>
    </ul>
  );
};
