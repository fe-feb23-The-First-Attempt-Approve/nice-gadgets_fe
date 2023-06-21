import { Slider } from '@mui/material';
import { useEffect, useState } from 'react';
import { PriceRange } from '../../types/priceRange';
import { getProductsMinMaxPrices } from '../../api/products';

type Props = {
  category: string;
  min: number;
  max: number;
  onPriceChange: (e: Event, newValue: number | number[]) => void;
};

export const DoubleRangeSlider: React.FC<Props> = ({
  category,
  min,
  max,
  onPriceChange,
}) => {
  const [priceRange, setPriceRange] = useState<PriceRange | null>(null);

  const loadPrices = async () => {
    try {
      const proceRangeFromServer = await getProductsMinMaxPrices(category);

      setPriceRange(proceRangeFromServer);
    } catch {
      throw new Error();
    }
  };

  useEffect(() => {
    loadPrices();
  }, []);

  return (
    priceRange && (
      <div className="filterPrice">
        <div className="filterPrice__container">
          <span className="filterPrice__value">
            {`$${min || priceRange.min || 0}`}
          </span>

          <Slider
            value={(!min || !max)
              ? [priceRange.min, priceRange.max]
              : [min, max]}
            onChange={onPriceChange}
            min={priceRange?.min}
            max={priceRange?.max}
            size="small"
          />

          <span className="filterPrice__value">
            {`$${max || priceRange.max || 0}`}
          </span>
        </div>
      </div>
    )
  );
};
