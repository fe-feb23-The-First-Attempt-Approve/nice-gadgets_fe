import { SortType } from '../../types/SortType';
import { MultiRangeSlider } from '../MultiRangeSlider';

interface Props {
  itemsPerPage: number;
  sortType: SortType;
  priceRange: number | number[];
  onPriceChange: (e: Event, newValue: number | number[]) => void;
  onPageCountChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSortingChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
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
      <label htmlFor="perPageSelector" className="col-form-label col">
        Sort by
      </label>
      <div className="form-group row">
        <div className="col-3">
          <select
            className="form-control"
            onChange={onSortingChange}
            value={sortType}
          >
            <option value={SortType.New}>Newest</option>
            <option value={SortType.Old}>Oldest</option>
            <option value={SortType.Name}>Name A-Z</option>
            <option value={SortType.HightPrice}>Price &#8595;</option>
            <option value={SortType.LowPrice}>Price &#8593;</option>
          </select>
        </div>
      </div>

      <label htmlFor="perPageSelector" className="col-form-label col">
        Items per page
      </label>
      <div className="form-group row">
        <div className="col-3">
          <select
            className="form-control"
            onChange={onPageCountChange}
            value={itemsPerPage}
          >
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
          </select>
        </div>
      </div>

      <MultiRangeSlider
        min={Array.isArray(priceRange) ? priceRange[0] : 0}
        max={Array.isArray(priceRange) ? priceRange[1] : 1}
        onPriceChange={onPriceChange}
      />
    </div>
  );
};
