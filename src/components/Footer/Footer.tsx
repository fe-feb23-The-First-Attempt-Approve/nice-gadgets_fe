/* eslint-disable max-len */
import { useLocation, Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { ArrowButton } from '../ArrowButton';

export const Footer = () => {
  const location = useLocation();
  const hiddenPaths = ['/profile'];
  const shouldHideNavigation = hiddenPaths
    .some(path => location.pathname.startsWith(path));

  if (shouldHideNavigation) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <Link to="/home" className="logo footer__logo">
          <Logo />
        </Link>

        <nav className="footer__navigation">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a
                href="https://github.com/orgs/fe-feb23-The-First-Attempt-Approve/repositories"
                target="_blank"
                className="footer__nav-link"
                rel="noreferrer"
              >
                Github
              </a>
            </li>

            <li className="footer__nav-item">
              <Link to="/contacts" className="footer__nav-link">Contacts</Link>
            </li>

            <li className="footer__nav-item">
              <Link to="/rights" className="footer__nav-link">rights</Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="footer__arrow-up"
          onClick={scrollToTop}
        >
          Back to top
          <ArrowButton arrowDirection="top" />
        </button>
      </div>
    </footer>
  );
};
