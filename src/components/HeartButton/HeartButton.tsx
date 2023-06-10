import { useState } from 'react';
import { heart, redHeart } from '../../img/images';

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
      <img
        src={isLiked ? heart : redHeart}
        alt="heart-like"
        className="like__heart"
      />
    </button>
  );
};
