import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useTheme } from '../../providers/ThemeContext';
import { useSearchPanel } from '../../providers/SearchContext';
import { useBurger } from '../../providers/BurgerContext';
import { IconCart } from '../Icons/IconCart';
import { IconLikeEmpty } from '../Icons/IconLikeEmpty';
import { IconThemeDark } from '../Icons/IconThemeDark';
import { IconThemeLight } from '../Icons/IconThemeLight';
import { IconTranslate } from '../Icons/IconTranslate';

export const IconSet = () => {
  const { theme, toggleTheme } = useTheme();
  const { closeSearch } = useSearchPanel();
  const { setIsOpenBurger } = useBurger();

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
          <IconLikeEmpty />
        </NavLink>
      </li>

      <li className="icon-set__item">
        <NavLink
          to="/cart"
          className={({ isActive }) => cn('icon-bar__link icon-bar__mobile',
            { 'icon-bar__link--active': isActive })}
          onClick={handleClick}
        >
          <IconCart />
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
