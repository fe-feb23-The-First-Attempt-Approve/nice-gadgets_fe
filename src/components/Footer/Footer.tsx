import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a className="footer__logo" href="/">
          <img
            src="/img/footer/logo.png"
            alt="logotip"
            className="footer__logo logo"
          />

          <nav className="footer__naveigation">
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
            className="footer__arrow-up button-reset"
          >
            Back to top
            <span className="footer__arrow-conteiner">
              <img
                src="/img/footer/arrow-up.svg"
                alt="arrow up to top"
                className="footer__arrow-up-image"
              />
            </span>
          </button>
        </a>
      </div>
    </footer>
  );
};
