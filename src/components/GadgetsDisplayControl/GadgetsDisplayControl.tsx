import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { SortType } from '../../types/SortType';
import { DoubleRangeSlider } from '../DoubleRangeSlider';

interface Props {
  itemsPerPage: number;
  sortType: SortType;
  priceRange: number | number[];
  onPriceChange: (e: Event, newValue: number | number[]) => void;
  onPageCountChange: (
    event: SelectChangeEvent<number>, child: React.ReactNode,
  ) => void;
  onSortingChange: (
    event: SelectChangeEvent<SortType>, child: React.ReactNode,
  ) => void;
}

export const GadgetsDisplayControl: React.FC<Props> = ({
  itemsPerPage,
  sortType,
  priceRange,
  onPriceChange,
  onPageCountChange,
  onSortingChange,
}) => {
  return (
    <div className="gadgets-display-control">
      <div className="gadgets-display-control__sort">
        <p>Sort by</p>
        <Select
          sx={{ width: 176, height: 40, bgcolor: 'white' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortType}
          label="Age"
          onChange={onSortingChange}
          // MenuProps={{
          //   PaperProps: {
          //     sx: {
          //       bgcolor: 'pink',
          //     },
          //   },
          // }}
        >
          <MenuItem value={SortType.New}>Newest</MenuItem>
          <MenuItem value={SortType.Old}>Oldest</MenuItem>
          <MenuItem value={SortType.Name}>Name A-Z</MenuItem>
          <MenuItem value={SortType.HighPrice}>Price &#8595;</MenuItem>
          <MenuItem value={SortType.LowPrice}>Price &#8593;</MenuItem>
        </Select>
      </div>

      <div className="gadgets-display-control__count-per-page">
        <p>Items per page</p>
        <Select
          sx={{ width: 128, height: 40, bgcolor: 'white' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={itemsPerPage}
          label="Age"
          onChange={onPageCountChange}
          // MenuProps={{
          //   PaperProps: {
          //     sx: {
          //       bgcolor: 'pink',
          //     },
          //   },
          // }}
        >
          {[8, 16, 32, 64].map((perPageCount) => (
            <MenuItem value={perPageCount}>{perPageCount}</MenuItem>
          ))}
        </Select>
      </div>
      <div className="gadgets-display-control__price">
        <p className="gadgets-display-control__price-title">Price</p>
        <DoubleRangeSlider
          min={Array.isArray(priceRange) ? priceRange[0] : 0}
          max={Array.isArray(priceRange) ? priceRange[1] : priceRange}
          onPriceChange={onPriceChange}
        />
      </div>
    </div>
  );
};
