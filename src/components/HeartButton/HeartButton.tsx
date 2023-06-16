import {
  FC, useContext, useEffect, useMemo,
} from 'react';
import { IconLikeEmpty, IconLikeFull } from '../Icons/_IconKit';
import { CountFavoritesContext } from '../../providers/CountFavorites';
import { useLocalStorage } from '../../customHooks/useLocalStorage';
import { Gadget } from '../../types/Gadget';
import NotificationMessage from '../Notification/NotificationSuccess';

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

  const notifyFavorite = NotificationMessage({
    message: `❤️ ${gadget.name} has been added to favorites`,
    redirection: 'favorites',
  });

  useEffect(() => {
    updateCountFavorites(favoriteIds.length);
  }, [favoriteIds, gadget.id]);

  const onHandleClick = () => {
    const favoritesString = localStorage.getItem('favorites');
    const favorites = favoritesString ? JSON.parse(favoritesString) : [];

    setFavoriteIds((isLiked)
      ? favorites.filter(({ id }: Gadget) => gadget.id !== id)
      : [...favorites, gadget]);

    if (!isLiked) {
      notifyFavorite();
    }
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
