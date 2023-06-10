import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { ArrowButton } from '../ArrowButton';
import { Directions } from '../../types/directions';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Link to="/" className="logo footer__logo">
          <Logo />
        </Link>

        <nav className="footer__navigation">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a href="/" className="footer__nav-link">Github</a>
            </li>

            <li className="footer__nav-item">
              <a href="/" className="footer__nav-link">Contacts</a>
            </li>

            <li className="footer__nav-item">
              <a href="/" className="footer__nav-link">rights</a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="footer__arrow-up"
        >
          Back to top
          <ArrowButton direction={Directions.Up} />
        </button>
      </div>
    </footer>
  );
};
