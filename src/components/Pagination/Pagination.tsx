/* eslint-disable no-plusplus */
/* eslint-disable no-continue */
import cn from 'classnames';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowButton } from '../ArrowButton';
import { getSearchWith } from '../../utils/searchHelper';

type Props = {
  pageCount: number,
  currentPage: number,
};

export const Pagination: React.FC<Props> = ({
  pageCount,
  currentPage,
}) => {
  const [searchParams] = useSearchParams();
  const pages: number[] = [];
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  const isFirstPage = prevPage < 1;
  const isLastPage = nextPage > pageCount;

  for (let i = 1; i <= pageCount; i++) {
    if ((i < currentPage - 1 && i !== 1 && currentPage !== pageCount)
      || (i < currentPage - 2 && i !== 1)) {
      continue;
    }

    if ((i > currentPage + 1 && i !== pageCount && currentPage !== 1)
      || (i > currentPage + 2 && i !== pageCount)) {
      continue;
    }

    if ((i > currentPage + 2) || (i > currentPage + 3)) {
      pages.push(NaN);
    }

    pages.push(i);

    if ((i < currentPage - 2) || (i < currentPage - 3)) {
      pages.push(NaN);
    }
  }

  return (
    <div className="pagination">
      <ul className="pagination__page-list">
        <li className={cn('pagination__page-item', {
          // eslint-disable-next-line max-len
          'pagination__page-item--disabled pagination__button--hide': isFirstPage,
        })}
        >
          <Link
            // eslint-disable-next-line max-len
            className="pagination__page-link pagination__button pagination__button--controls"
            to={{
              search: getSearchWith(
                searchParams, {
                  page: isFirstPage
                    ? currentPage.toString()
                    : prevPage.toString(),
                },
              ),
            }}
            onClick={() => window.scrollTo(0, 0)}
          >
            <ArrowButton arrowDirection="left" />
          </Link>
        </li>

        {pages.map(pageNum => (
          pageNum
            ? (
              <li
                key={pageNum}
                className={cn('pagination__page-item', {
                  'pagination__page-item--disabled': currentPage === pageNum,
                })}
              >
                <Link
                  className="pagination__page-link"
                  to={{
                    search: getSearchWith(
                      searchParams, { page: pageNum.toString() },
                    ),
                  }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div
                    className={cn('pagination__button', {
                      'pagination__button--active': currentPage === pageNum,
                    })}
                  >
                    {pageNum}
                  </div>
                </Link>
              </li>
            ) : (
              <li
                key={pageNum}
                className={cn('pagination__page-item',
                  'pagination__page-item--disabled')}
              >
                <Link
                  className="pagination__page-link"
                  to={{
                    search: getSearchWith(
                      searchParams, { page: pageNum.toString() },
                    ),
                  }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className={cn(
                    'pagination__button pagination__button--controls',
                  )}
                  >
                    ...
                  </div>
                </Link>
              </li>
            )
        ))}

        <li
          className={cn('pagination__page-item', {
            // eslint-disable-next-line max-len
            'pagination__page-item--disabled pagination__button--hide': isLastPage,
          })}
        >
          {!isLastPage ? (
            <Link
              className="pagination__button--controls"
              to={{
                search: getSearchWith(
                  searchParams, {
                    page: nextPage.toString(),
                  },
                ),
              }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <ArrowButton arrowDirection="right" />
            </Link>
          ) : (
            <ArrowButton arrowDirection="right" />
          )}

        </li>
      </ul>
    </div>
  );
};
