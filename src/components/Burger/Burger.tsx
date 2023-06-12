import cn from 'classnames';
import { useBurger } from '../../providers/BurgerContext';
import { LinkList } from '../LinkList';
import { IconSet } from '../IconSet';
import { SearchingField } from '../SearchingField';

export const Burger = () => {
  const { isOpenBurger } = useBurger();

  const burgerClasses = cn('burger', {
    'burger--active': isOpenBurger,
  });

  return (
    <div className={burgerClasses}>
      <LinkList />

      <SearchingField />

      <IconSet />
    </div>
  );
};
