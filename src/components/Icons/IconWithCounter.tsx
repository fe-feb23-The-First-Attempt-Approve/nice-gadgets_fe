import { FC, ReactNode } from 'react';

interface IconWithCounterProps {
  icon: ReactNode;
  count: number;
}

export const IconWithCounter: FC<IconWithCounterProps> = ({ icon, count }) => {
  return (
    <div className="icon-bar__icon-with-counter">
      {icon}

      {count > 0 && (
        <span className="icon-bar__counter">
          {count}
        </span>
      )}
    </div>
  );
};
