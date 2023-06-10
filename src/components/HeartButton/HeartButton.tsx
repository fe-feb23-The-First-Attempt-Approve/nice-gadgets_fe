import { useState } from 'react';

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
        src={`/img/svg/${isLiked ? 'heart-like.svg' : 'heart-like-red.svg'}`}
        alt="heart-like"
        className="like__heart"
      />
    </button>
  );
};
