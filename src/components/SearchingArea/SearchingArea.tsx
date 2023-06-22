import { useSearchPanel } from '../../providers/SearchContext';
import { SearchingField } from '../SearchingField';
import { IconSearching, IconArrow } from '../Icons/_IconKit';

export const SearchingArea = () => {
  const { toggleSearch, isSearching } = useSearchPanel();

  return (
    <form className="searching-area">
      {!isSearching && (
        <button
          type="button"
          className="icon-bar__link"
          onClick={toggleSearch}
        >
          <IconSearching />
        </button>
      )}

      {isSearching && (
        <>
          <button
            type="button"
            className="icon-bar__link"
            onClick={toggleSearch}
          >
            <IconArrow />
          </button>

          <SearchingField />
        </>
      )}
    </form>
  );
};
