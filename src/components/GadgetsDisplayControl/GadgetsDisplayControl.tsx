import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { SortType } from '../../types/SortType';
import { DoubleRangeSlider } from '../DoubleRangeSlider';

interface Props {
  category: string,
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
  category,
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
          sx={
            {
              bgcolor: 'white',
              width: 176,
              height: 40,
              padding: 2,
            }
          }
          variant="standard"
          value={sortType}
          onChange={onSortingChange}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: '#fff',
              },
            },
          }}
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
          sx={{
            width: 128,
            height: 40,
            // bgcolor: 'white',
            padding: 2,
          }}
          variant="standard"
          value={itemsPerPage}
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
            <MenuItem
              value={perPageCount}
              key={perPageCount}
            >
              {perPageCount}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="gadgets-display-control__price">
        <p className="gadgets-display-control__price-title">Price</p>
        <DoubleRangeSlider
          category={category}
          min={Array.isArray(priceRange) ? priceRange[0] : 0}
          max={Array.isArray(priceRange) ? priceRange[1] : priceRange}
          onPriceChange={onPriceChange}
        />
      </div>
    </div>
  );
};
