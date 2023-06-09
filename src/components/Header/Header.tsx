import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';
import { IconBar } from '../IconBar';

export const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <Logo />
      </Link>

      <Navigation />

      <IconBar />
    </header>
  );
};
