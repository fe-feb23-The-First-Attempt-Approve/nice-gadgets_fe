import { useRef, useEffect, useState } from 'react';
import cn from 'classnames';
import {
  Autocomplete, Stack, TextField,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useSearchPanel } from '../../providers/SearchContext';
import { getSearchWith } from '../../utils/searchHelper';
import { Gadget } from '../../types/Gadget';
import { getProductsByQuery } from '../../api/products';
import { useTheme } from '../../providers/ThemeContext';

export const SearchingField = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [productsList, setProductsList] = useState<Gadget[]>([]);
  const query = searchParams.get('query') || '';
  const { toggleSearch, isSearching } = useSearchPanel();
  const { theme } = useTheme();
  const inputRef = useRef<HTMLDivElement | null>(null);
  const inputTextColor = theme === 'dark' ? 'white' : 'black';

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
    }
  }, [isSearching]);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (query !== searchQuery) {
        setSearchParams(getSearchWith(searchParams, {
          query: searchQuery || null,
        }));
      }
    }, 777);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchQuery]);

  useEffect(() => {
    loadSimilar();
  }, [searchParams]);

  return (
    <div
      className="searching-field"
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
                minWidth: 200,
                '& .MuiOutlinedInput-root': {
                  borderBottom: '1px solid gray',
                  borderRadius: '0',
                  color: inputTextColor,
                  width: '100%',
                },
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '& .css-7u0vwp-MuiFormControl-root-MuiTextField-root': {
                  width: '100%',
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
