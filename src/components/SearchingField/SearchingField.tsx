import { useRef, useEffect } from 'react';
import cn from 'classnames';
import {
  Autocomplete, Stack, TextField,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useSearchPanel } from '../../providers/SearchContext';
import { getSearchWith } from '../../utils/searchHelper';
import { Gadget } from '../../types/Gadget';
import { getProductsByQuery } from '../../api/products';

export const SearchingField = () => {
  const { toggleSearch, isSearching } = useSearchPanel();
  const inputRef = useRef<HTMLDivElement | null>(null);

  const handleInputChange = (
    _event: React.ChangeEvent<{}>,
    value: string,
  ) => {
    const chosenProduct = productsList.find(product => product.name === value);

    if (chosenProduct) {
      const { category, itemId } = chosenProduct;
      const link = `#/${category}/${itemId}`;

      window.location.href = link;
    }
  };

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleFormBlur = () => {
    toggleSearch();
  };

  const loadSimilar = async () => {
    try {
      if (query) {
        const productsFromServer = await getProductsByQuery(query);

        setProductsList(productsFromServer);
      }
    } catch {
      // throw new Error('Cant load products from server');
    }
  };

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
    <form
      className={cn('searching-field', {
        'is-searching': isSearching,
      })}
      onBlur={handleFormBlur}
      ref={formRef}
    >
      <Stack
        spacing={2}
        sx={{
          // display: 'flex',
          // flexDirection: 'row',
          // justifyContent: 'center',
          // alignItems: 'center',
          // alignContent: 'center',
          // height: 40,
        }}

      >
        <Autocomplete
          className={cn('searching-field', {
            'is-searching': isSearching,
          })}
          onBlur={handleFormBlur}
          freeSolo
          disableClearable
          onInputChange={handleInputChange}
          options={productsList.map(product => product.name)}
          renderInput={(params) => (
            <TextField
              sx={{
                width: 200,
                bgcolor: 'white',
                '& .MuiOutlinedInput-root': {
                  // border: "1px solid yellow",
                  borderRadius: '0',
                },
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
              }}
              placeholder="Searching..."
              inputRef={inputRef}
              className="searching-field__query"
              value={searchQuery}
              onChange={handleSearchQueryChange}
              {...params}
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
      </Stack>
    </div>
  );
};
