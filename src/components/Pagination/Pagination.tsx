import cn from 'classnames';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowButton } from '../ArrowButton';
import { getSearchWith } from '../../utils/searchHelper';
import { ProductList } from '../ProductList';
import { Gadget } from '../../types/Gadget';

type Props = {
  allItemsCount: number,
  items: Gadget[];
};

export const Pagination: React.FC<Props> = ({ allItemsCount, items }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page') || 1);

  const [itemsPerPage, setItemsPerPage] = useState(8);
  const pageCount = Math.ceil(allItemsCount / itemsPerPage);
  const pages: number[] = Array.from(Array(pageCount), (_, i) => i + 1);

  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  const isFirstPage = prevPage < 1;
  const isLastPage = nextPage > pageCount;

  // const { category } = items[0];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(event.target.value));
    setSearchParams(getSearchWith(searchParams, { page: null }));
  };

  return (
    <div className="pagination">
      <div className="pagination__items">
        <ProductList gadgets={items} />
      </div>

      <label htmlFor="perPageSelector" className="col-form-label col">
        Items per page
      </label>
      <div className="form-group row">
        <div className="col-3">
          <select
            className="form-control"
            onChange={handleChange}
            value={itemsPerPage}
          >
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
          </select>
        </div>
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
            aria-disabled={isFirstPage}
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
            aria-disabled={isLastPage}
          >
            <ArrowButton arrowDirection="right" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
