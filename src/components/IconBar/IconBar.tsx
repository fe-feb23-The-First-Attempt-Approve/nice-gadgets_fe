import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { SearchingArea } from '../SearchingArea';
import { IconTranslate } from '../Icons/IconTranslate';
import { IconTheme } from '../Icons/IconTheme';
import { IconLike } from '../Icons/IconLike';
import { IconCart } from '../Icons/IconCart';

export const IconBar = () => {
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
        <button type="button" className="icon-bar__link">
          <IconTheme />
        </button>
      </li>

      <li className="icon-bar__item">
        <NavLink
          to="/favorites"
          className={({ isActive }) => cn('icon-bar__link',
            { 'icon-bar__link--active': isActive })}
        >
          <IconLike />
        </NavLink>
      </li>

      <li className="icon-bar__item">
        <NavLink
          to="/cart"
          className={({ isActive }) => cn('icon-bar__link',
            { 'icon-bar__link--active': isActive })}
        >
          <IconCart />
        </NavLink>
      </li>
    </ul>
  );
};
