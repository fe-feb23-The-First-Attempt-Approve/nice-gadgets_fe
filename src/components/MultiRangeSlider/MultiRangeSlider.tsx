import { Slider } from '@mui/material';
import { useState } from 'react';

type Props = {
  min: number;
  max: number;
  onPriceChange: (e: Event, newValue: number | number[]) => void;
};

export const MultiRangeSlider: React.FC<Props> = ({
  min,
  max,
  onPriceChange,
}) => {
  const [minPrice] = useState(min);
  const [maxPrice] = useState(max);

  return (
    <div className="filterPrice">
      <div className="filterPrice__container">
        <span className="filterPrice__value">
          {`$${min}`}
        </span>

        <Slider
          value={[min, max]}
          onChange={onPriceChange}
          min={minPrice}
          max={maxPrice}
          size="small"
        />

        <span className="filterPrice__value">
          {`$${max}`}
        </span>
      </div>
    </div>
  );
};
