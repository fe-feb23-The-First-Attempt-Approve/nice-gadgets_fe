import { useLocation, Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';
import { IconBar } from '../IconBar';
import { Burger } from '../Burger';
import { NavigationToggled } from '../NavigationToggled';

export const Header = () => {
  const location = useLocation();
  const hiddenPaths = ['/profile'];
  const shouldHideNavigation = hiddenPaths
    .some(path => location.pathname.startsWith(path));

  if (shouldHideNavigation) {
    return null;
  }

  return (
    <>
      <header className="header">
        <div className="header__main">
          <Link to="/" className="logo">
            <Logo />
          </Link>

          <Navigation />

          <IconBar />

          <NavigationToggled />
        </div>

        <Burger />
      </header>
    </>
  );
};
