import { useEffect, useRef } from 'react';
import { IconSearching } from '../Icons/IconSearching';
import { IconArrow } from '../Icons/IconArrow';
import { useSearchPanel } from '../../providers/SearchContext';

export const SearchingArea = () => {
  const { toggleSearch, isSearching } = useSearchPanel();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearching) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [isSearching]);

  return (
    <form className={`searching-area ${isSearching ? 'is-searching' : ''}`}>
      <button type="button" className="icon-bar__link" onClick={toggleSearch}>
        {isSearching ? <IconArrow /> : <IconSearching />}
      </button>

      {isSearching && (
        <>
          <input
            type="text"
            placeholder="Searching..."
            className="searching-area__query"
            ref={inputRef}
          />

          <button
            type="button"
            className="searching-area__button icon-bar__link"
            onClick={toggleSearch}
          >
            <IconSearching />
          </button>
        </>
      )}
    </form>
  );
};
