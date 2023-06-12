import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useContext } from 'react';
import { useTheme } from '../../providers/ThemeContext';
import { useSearchPanel } from '../../providers/SearchContext';
import { useBurger } from '../../providers/BurgerContext';
import { CountFavoritesContext } from '../../providers/CountFavorites';
import { CountCartItemsContext } from '../../providers/CountCartItems';
import { IconCart } from '../Icons/IconCart';
import { IconLikeEmpty } from '../Icons/IconLikeEmpty';
import { IconThemeDark } from '../Icons/IconThemeDark';
import { IconThemeLight } from '../Icons/IconThemeLight';
import { IconTranslate } from '../Icons/IconTranslate';
import { IconWithCounter } from '../Icons/IconWithCounter';

export const IconSet = () => {
  const { theme, toggleTheme } = useTheme();
  const { closeSearch } = useSearchPanel();
  const { setIsOpenBurger } = useBurger();
  const { countFavorites } = useContext(CountFavoritesContext);
  const { countCartItems } = useContext(CountCartItemsContext);

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
          <IconWithCounter icon={<IconCart />} count={countCartItems} />
        </NavLink>
      </li>

      <li className="icon-set__item icon-set__item--100">
        <button type="button" className="icon-bar__link icon-bar__mobile">
          <IconTranslate />
        </button>
      </li>

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
