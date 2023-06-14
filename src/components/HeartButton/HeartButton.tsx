import {
  FC, useContext, useEffect, useMemo,
} from 'react';
import { toast } from 'react-toastify';
import { IconLikeEmpty } from '../Icons/IconLikeEmpty';
import { IconLikeFull } from '../Icons/IconLikeFull';
import { CountFavoritesContext } from '../../providers/CountFavorites';
import { useLocalStorage } from '../../customHooks/useLocalStorage';
import { Gadget } from '../../types/Gadget';
import 'react-toastify/dist/ReactToastify.css';

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

  const notifyFavorite = () => toast.success(
    `❤️ ${gadget.name} has been added to favorites`,
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
