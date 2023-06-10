import { useState } from 'react';
import { IconLikeEmpty } from '../Icons/IconLikeEmpty';
import { IconLikeFull } from '../Icons/IconLikeFull';

export const HeartButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const onHandleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      type="button"
      className="like"
      onClick={onHandleClick}
    >
      {isLiked ? <IconLikeEmpty /> : <IconLikeFull />}
    </button>
  );
};
