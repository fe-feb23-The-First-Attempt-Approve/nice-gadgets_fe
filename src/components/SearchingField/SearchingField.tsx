import { useRef, useEffect } from 'react';
import { useSearchPanel } from '../../providers/SearchContext';
import { IconSearching } from '../Icons/IconSearching';

export const SearchingField = () => {
  const { toggleSearch, isSearching } = useSearchPanel();
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isSearching) {
      inputRef.current?.focus();
      inputRef.current?.select();
    } else if (inputRef.current) {
      inputRef.current.value = '';
    }
  }, [isSearching]);

  const handleFormBlur = () => {
    toggleSearch();
  };

  return (
    <form className="searching-field" onBlur={handleFormBlur} ref={formRef}>
      <input
        type="text"
        placeholder="Searching..."
        className="searching-field__query"
        ref={inputRef}
      />

      <button
        type="button"
        className="searching-field__button icon-bar__link"
        onClick={toggleSearch}
      >
        <IconSearching />
      </button>
    </form>
  );
};
