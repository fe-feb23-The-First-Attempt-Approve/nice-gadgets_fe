import cn from 'classnames';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { ArrowButton } from '../ArrowButton';
import { ProductCard } from '../ProductCard';
import { getSearchWith } from '../../utils/searchHelper';
import { GadgetsDisplayControl } from '../GadgetsDisplayControl';
import { SortType } from '../../types/SortType';

type Props = {
  items: Phone[];
};

export const getSortedItems = (items: Phone[], sortType: SortType): Phone[] => {
  const sortedItems = [...items];

  sortedItems.sort((currentItem, nextItem) => {
    switch (sortType) {
      case SortType.Name:
        return currentItem.name.localeCompare(nextItem.name);

      case SortType.New:
        return nextItem.year - currentItem.year;

      case SortType.Old:
        return currentItem.year - nextItem.year;

      case SortType.HightPrice:
        return nextItem.price - currentItem.price;

      case SortType.LowPrice:
        return currentItem.price - nextItem.price;

      default: throw new Error('Wrong sort type!');
    }
  });

  return sortedItems;
};

export const getFilterItemsByPrice = (
  items: Phone[], priceRange: number[] | number,
) => {
  const [min, max] = Array.isArray(priceRange) ? priceRange : [0, priceRange];

  return items.filter(item => item.price >= min && item.price <= max);
};

export const getMinMaxPrice = (items: Phone[]) => {
  const prices = items.map(item => item.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  return [min, max];
};

export const Pagination: React.FC<Props> = ({ items }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortType, setSortType] = useState(SortType.New);
  const [
    priceRange,
    setPriceRange,
  ] = useState<number | number[]>(getMinMaxPrice(items));
  const currentPage = Number(searchParams.get('page') || 1);

  const [itemsPerPage, setItemsPerPage] = useState(8);

  const filteredItems = getFilterItemsByPrice(items, priceRange);

  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);
  const pages: number[] = Array.from(Array(pageCount), (_, i) => i + 1);

  const sortedItems = getSortedItems(filteredItems, sortType);

  const firstVisibleItemIndex = (currentPage - 1) * itemsPerPage;
  const lastItemIndex = firstVisibleItemIndex + itemsPerPage;
  const lastVisibleItemIndex = lastItemIndex > items.length
    ? items.length
    : lastItemIndex;

  const visibleTtems = sortedItems
    .slice(firstVisibleItemIndex, lastVisibleItemIndex);

  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  const isFirstPage = prevPage < 1;
  const isLastPage = nextPage > pageCount;

  const handlePageCountChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value } = event.target;

    setItemsPerPage(Number(value));
    setSearchParams(getSearchWith(searchParams, {
      page: null,
      perPage: value,
    }));
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    setSortType(value as SortType);
    setSearchParams(getSearchWith(searchParams, { sort: value }));
  };

  const handlePriceChange = (
    _event: Event,
    value: number | number[],
  ) => {
    const [min, max] = Array.isArray(value) ? value.map(String) : [null, null];

    setPriceRange(value);
    setSearchParams(getSearchWith(searchParams, {
      minPrice: min,
      maxPrice: max,
    }));
  };

  return (
    <div className="pagination">
      <GadgetsDisplayControl
        itemsPerPage={itemsPerPage}
        sortType={sortType}
        priceRange={priceRange}
        onPriceChange={handlePriceChange}
        onPageCountChange={handlePageCountChange}
        onSortingChange={handleSortChange}
      />

      <div className="pagination__items">
        {visibleTtems.map((item) => <ProductCard key={item.id} phone={item} />)}
      </div>

      <ul className="pagination__page-list">
        <li className={cn('page-item', {
          disabled: isFirstPage,
        })}
        >
          <Link
            className="page-link"
            to={{
              search: getSearchWith(
                searchParams, { page: prevPage.toString() },
              ),
            }}
            onClick={(event) => {
              if (isFirstPage) {
                event.preventDefault();
              }
            }}
          >
            <ArrowButton arrowDirection="left" />
          </Link>
        </li>

        {pages.map(pageNum => (
          <li
            key={pageNum}
            className={cn('page-item', {
              active: currentPage === pageNum,
            })}
          >
            <Link
              className="page-link"
              to={{
                search: getSearchWith(
                  searchParams, { page: pageNum.toString() },
                ),
              }}
            >
              {pageNum}
            </Link>
          </li>
        ))}

        <li className={cn('page-item', {
          disabled: isLastPage,
        })}
        >
          <Link
            to={{
              search: getSearchWith(
                searchParams, { page: nextPage.toString() },
              ),
            }}
          >
            <ArrowButton arrowDirection="right" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
