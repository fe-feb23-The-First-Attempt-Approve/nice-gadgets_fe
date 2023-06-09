import { LinkItem } from '../LinkItem';
import { navLinks } from '../../variables/navLinks';

export const LinkList = () => {
  return (
    <ul className="nav__list">
      {navLinks.map(({ to, label }) => (
        <LinkItem
          key={to}
          to={to}
          label={label}
        />
      ))}
    </ul>
  );
};
