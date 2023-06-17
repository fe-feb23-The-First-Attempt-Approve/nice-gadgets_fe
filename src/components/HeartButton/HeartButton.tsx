import {
  FC, useContext, useEffect, useMemo,
} from 'react';
import { toast } from 'react-toastify';
import { IconLikeEmpty } from '../Icons/IconLikeEmpty';
import { IconLikeFull } from '../Icons/IconLikeFull';
import { CountFavoritesContext } from '../../providers/CountFavorites';
import { useLocalStorage } from '../../customHooks/useLocalStorage';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  itemId: string;
}

export const HeartButton: FC<Props> = ({ itemId }) => {
  const [favoriteIds, setFavoriteIds] = useLocalStorage('favorites', []);
  const { updateCountFavorites } = useContext(CountFavoritesContext);
  const isLiked = useMemo(() => (
    favoriteIds.includes(itemId)),
  [favoriteIds, itemId]);

  const notifyFavorite = () => toast.success(
    `❤️ ${itemId} has been added to favorites`,
    {
      position: 'bottom-left',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    },
  );

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
