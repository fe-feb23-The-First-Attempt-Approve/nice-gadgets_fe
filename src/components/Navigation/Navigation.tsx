import { LinkItem } from '../LinkItem';

export const Navigation = () => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/phones', label: 'Phones' },
    { to: '/tablets', label: 'Tablets' },
    { to: '/accessories', label: 'Accessories' },
  ];

  return (
    <nav className="nav">
      <ul className="nav__list">
        {links.map(({ to, label }) => (
          <LinkItem
            key={to}
            to={to}
            label={label}
          />
        ))}
      </ul>
    </nav>
  );
};
