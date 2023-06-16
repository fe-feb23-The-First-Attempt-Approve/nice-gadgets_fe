import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { useTheme } from '../../providers/ThemeContext';
import { useSearchPanel } from '../../providers/SearchContext';
import { SearchingArea } from '../SearchingArea';
import { IconTranslate } from '../Icons/IconTranslate';
import { IconLikeEmpty } from '../Icons/IconLikeEmpty';
import { IconCart } from '../Icons/IconCart';
import { IconThemeLight } from '../Icons/IconThemeLight';
import { IconThemeDark } from '../Icons/IconThemeDark';
import { IconWithCounter } from '../Icons/IconWithCounter';
import { CountFavoritesContext } from '../../providers/CountFavorites';
import { CartItemContext } from '../../providers/CartItemsContext';
import { IconAuthorization } from '../Icons/IconAuthorization';

export const IconBar = () => {
  const { closeSearch } = useSearchPanel();
  const { theme, toggleTheme } = useTheme();
  const { countFavorites } = useContext(CountFavoritesContext);
  const { cartItemCount } = useContext(CartItemContext);
  const [
    updatedCartItemCount,
    setUpdatedCartItemCount,
  ] = useState(cartItemCount);

  useEffect(() => {
    setUpdatedCartItemCount(cartItemCount);
  }, [cartItemCount]);

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
          <IconWithCounter icon={<IconCart />} count={updatedCartItemCount} />
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
