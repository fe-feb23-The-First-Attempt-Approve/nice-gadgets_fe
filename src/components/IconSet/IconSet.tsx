import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useTheme } from '../../providers/ThemeContext';
import { useSearchPanel } from '../../providers/SearchContext';
import { useBurger } from '../../providers/BurgerContext';
import { CartItemContext } from '../../providers/CartItemsContext';
import { CountFavoritesContext } from '../../providers/FavoriteItemContext';
import {
  IconLikeEmpty,
  IconThemeDark,
  IconThemeLight,
  IconCart,
  IconWithCounter,
  IconSearching,
  IconAuthorization,
  IconPerson,
  IconHome,
} from '../Icons/_IconKit';
import { useAuth } from '../../providers/AuthContext';
import { SearchingField } from '../SearchingField';
import { ArrowButton } from '../ArrowButton/ArrowButton';

export const IconSet = () => {
  const { theme, toggleTheme } = useTheme();
  const { closeSearch } = useSearchPanel();
  const { setIsOpenBurger } = useBurger();
  const { countFavorites } = useContext(CountFavoritesContext);
  const { cartItemCount } = useContext(CartItemContext);
  const { isModalActive, setIsModalActive } = useAuth();
  const [searchVisible, setSearchVisible] = useState(false);

  const token = !!localStorage.getItem('token');

  const handleClick = () => {
    closeSearch();
    setIsOpenBurger(false);
  };

  const handleSearchClick = () => {
    setSearchVisible(true);
  };

  return (
    <>
      {!searchVisible && (
        <ul className="icon-set">
          <li className="icon-set__item icon-set__item--1-3">
            <button
              type="button"
              className="icon-bar__link icon-bar__mobile"
              onClick={toggleTheme}
            >
              {theme === 'light' ? <IconThemeDark /> : <IconThemeLight />}
            </button>
          </li>

          <li className="icon-set__item icon-set__item--2-3">
            <NavLink
              to="/favorites"
              className={({ isActive }) => cn('icon-bar__link icon-bar__mobile',
                { 'icon-bar__link--active': isActive })}
              onClick={handleClick}
            >
              <IconWithCounter
                icon={<IconLikeEmpty />}
                count={countFavorites}
              />
            </NavLink>
          </li>

          <li className="icon-set__item icon-set__item--2-3">
            <NavLink
              to="/cart"
              className={({ isActive }) => cn('icon-bar__link icon-bar__mobile',
                { 'icon-bar__link--active': isActive })}
              onClick={handleClick}
            >
              <IconWithCounter icon={<IconCart />} count={cartItemCount} />
            </NavLink>
          </li>

          <li className="icon-set__item icon-set__item--1-3">
            <button
              type="button"
              className="icon-bar__link icon-bar__mobile"
              onClick={handleSearchClick}
            >
              <IconSearching />
            </button>
          </li>

          <li className="icon-set__item icon-set__item--1-3">
            <NavLink
              to="/"
              className={({ isActive }) => cn('icon-bar__link icon-bar__mobile',
                { 'icon-bar__link--active': isActive })}
              onClick={handleClick}
            >
              <IconHome />
            </NavLink>
          </li>

          <li className="icon-set__item icon-set__item--2-3">
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
      )}

      {searchVisible && (
        <div className="modal modal--searching">
          <button
            className="modal__back"
            type="button"
            onClick={() => setSearchVisible(false)}
          >
            <ArrowButton arrowDirection="left" />
          </button>
          <SearchingField />
        </div>
      )}
    </>
  );
};
