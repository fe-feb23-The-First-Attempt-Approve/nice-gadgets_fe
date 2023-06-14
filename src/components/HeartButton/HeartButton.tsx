import {
  FC, useContext, useEffect, useMemo,
} from 'react';
import { IconLikeEmpty } from '../Icons/IconLikeEmpty';
import { IconLikeFull } from '../Icons/IconLikeFull';
import { CountFavoritesContext } from '../../providers/CountFavorites';
import { useLocalStorage } from '../../customHooks/useLocalStorage';
import { Gadget } from '../../types/Gadget';

interface Props {
  gadget: Gadget;
}

export const HeartButton: FC<Props> = ({ gadget }) => {
  const [favoriteIds, setFavoriteIds] = useLocalStorage('favorites', []);
  const { updateCountFavorites } = useContext(CountFavoritesContext);
  const isLiked = useMemo(() => (
    favoriteIds.some(({ id }: Gadget) => (
      id === gadget.id))),
  [favoriteIds, gadget.id]);

  useEffect(() => {
    updateCountFavorites(favoriteIds.length);
  }, [favoriteIds, gadget.id]);

  const onHandleClick = () => {
    const favoritesString = localStorage.getItem('favorites');
    const favorites = favoritesString ? JSON.parse(favoritesString) : [];

    setFavoriteIds((isLiked)
      ? favorites.filter(({ id }: Gadget) => gadget.id !== id)
      : [...favorites, gadget]);
  };

  return (
    <button
      type="button"
      className="like"
      onClick={onHandleClick}
    >
      {!isLiked ? <IconLikeEmpty /> : <IconLikeFull />}
    </button>
  );
};
