import cn from 'classnames';
import { useBurger } from '../../providers/BurgerContext';
// import { LinkList } from '../LinkList';
import { IconSet } from '../IconSet';
import { LinkItem } from '../LinkItem';
import { navLinks } from '../../variables/navLinks';

export const Burger = () => {
  const { isOpenBurger } = useBurger();

  const burgerClasses = cn('burger', {
    'burger--active': isOpenBurger,
  });

  return (
    <div className={burgerClasses}>
      <ul className="nav__list">
        {navLinks.slice(1).map(({ to, label }) => (
          <LinkItem
            key={to}
            to={to}
            label={label}
          />
        ))}
      </ul>

      <IconSet />
    </div>
  );
};
