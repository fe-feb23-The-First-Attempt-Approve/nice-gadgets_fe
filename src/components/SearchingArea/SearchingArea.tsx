import { useEffect, useRef } from 'react';
import { IconSearching } from '../Icons/IconSearching';
import { IconArrowToRight } from '../Icons/IconArrowToRight';
import { useNavigation } from '../../Context';

export const SearchingArea = () => {
  const { collapseSearchBar, toggleSearch, isSearching } = useNavigation();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearching) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [isSearching]);

  return (
    <form className="searching-area">
      <button
        type="button"
        className="icon-bar__link"
        onClick={toggleSearch}
      >
        {isSearching ? <IconArrowToRight /> : <IconSearching />}
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
            onClick={collapseSearchBar}
          >
            <IconSearching />
          </button>
        </>
      )}
    </form>
  );
};
