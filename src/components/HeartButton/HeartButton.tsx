import {
  FC, useContext, useMemo,
} from 'react';
import { IconLikeEmpty, IconLikeFull } from '../Icons/_IconKit';
import { FavoriteItemContext } from '../../providers/FavoriteItemContext';

import NotificationMessage from '../Notification/Notification';

interface Props {
  itemId: string;
  name: string;
}

export const HeartButton: FC<Props> = ({ itemId, name }) => {
  const {
    favoriteItems,
    updateFavoriteItems,
  } = useContext(FavoriteItemContext);
  const isLiked = useMemo(() => (
    favoriteItems.includes(itemId)),
  [favoriteItems, itemId]);

  const notifyFavorite = NotificationMessage({
    message: `❤️ ${name} has been added to favorites`,
    redirection: 'favorites',
  });

  const onHandleClick = () => {
    updateFavoriteItems((isLiked)
      ? favoriteItems.filter((id: string) => itemId !== id)
      : [...favoriteItems, itemId]);

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
