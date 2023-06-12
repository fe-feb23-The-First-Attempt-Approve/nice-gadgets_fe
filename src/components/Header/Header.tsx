import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';
import { IconBar } from '../IconBar';
import { Burger } from '../Burger';
import { NavigationToggled } from '../NavigationToggled';

export const Header = () => {
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
