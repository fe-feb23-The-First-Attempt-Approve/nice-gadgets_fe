import {
  FC, useContext, useEffect, useMemo,
} from 'react';
import { IconLikeEmpty, IconLikeFull } from '../Icons/_IconKit';
import { CountFavoritesContext } from '../../providers/CountFavorites';
import { useLocalStorage } from '../../customHooks/useLocalStorage';
import NotificationMessage from '../Notification/NotificationSuccess';

interface Props {
  itemId: string;
  name: string;
}

export const HeartButton: FC<Props> = ({ itemId, name }) => {
  const [favoriteIds, setFavoriteIds] = useLocalStorage('favorites', []);
  const { updateCountFavorites } = useContext(CountFavoritesContext);
  const isLiked = useMemo(() => (
    favoriteIds.includes(itemId)),
  [favoriteIds, itemId]);

  const notifyFavorite = NotificationMessage({
    message: `❤️ ${name} has been added to favorites`,
    redirection: 'favorites',
  });

  useEffect(() => {
    updateCountFavorites(favoriteIds.length);
  }, [favoriteIds, itemId]);

  const onHandleClick = () => {
    const favoritesString = localStorage.getItem('favorites');
    const favorites = favoritesString ? JSON.parse(favoritesString) : [];

    setFavoriteIds((isLiked)
      ? favorites.filter((id: string) => itemId !== id)
      : [...favorites, itemId]);

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
