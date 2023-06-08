import { PageNavLink } from '../PageNavLink';

export const Navbar = () => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <PageNavLink to="/" text="Home" />
          </li>

          <li>
            <PageNavLink to="/phones" text="Phones" />
          </li>
        </ul>
      </div>
    </nav>
  );
};
