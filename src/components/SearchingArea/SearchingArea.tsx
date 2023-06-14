import { useSearchPanel } from '../../providers/SearchContext';
import { SearchingField } from '../SearchingField';
import { IconSearching } from '../Icons/IconSearching';
import { IconArrow } from '../Icons/IconArrow';

export const SearchingArea = () => {
  const { toggleSearch, isSearching } = useSearchPanel();

  return (
    <form className="searching-area">
      <button
        type="button"
        className="icon-bar__link"
        onClick={toggleSearch}
      >
        {isSearching ? <IconArrow /> : <IconSearching />}
      </button>

      {isSearching && <SearchingField />}
    </form>
  );
};