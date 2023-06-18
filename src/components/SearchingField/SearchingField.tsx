import { useRef, useEffect, useState } from 'react';
import cn from 'classnames';
import {
  Autocomplete, Stack, TextField,
} from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { useSearchPanel } from '../../providers/SearchContext';
import { IconSearching } from '../Icons/_IconKit';
import { getSearchWith } from '../../utils/searchHelper';
import { Gadget } from '../../types/Gadget';
import { getProductsByQuery } from '../../api/products';

export const SearchingField = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [productsList, setProductsList] = useState<Gadget[]>([]);
  const query = searchParams.get('query') || '';
  const { toggleSearch, isSearching } = useSearchPanel();
  const inputRef = useRef<HTMLDivElement | null>(null);

  const chosenProduct = productsList
    .find(product => product.name === searchQuery) || null;

  const handleInputChange = (
    _event: React.ChangeEvent<{}>,
    value: string,
  ) => {
    setSearchQuery(value);
  };

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSearchQuery(event.target.value);
  };

  // const handleFormBlur = () => {
  //   toggleSearch();
  // };

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
      onBlur={() => {
        // handleFormBlur();
      }}
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

      <Link
        to={`/${chosenProduct?.category}/${chosenProduct?.itemId}`}
        className="searching-field__button icon-bar__link"
        onClick={toggleSearch}
      >
        <IconSearching />
      </Link>
    </div>
  );
};