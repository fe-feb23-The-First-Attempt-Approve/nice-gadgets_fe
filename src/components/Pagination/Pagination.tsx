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
  const pages: number[] = Array.from(Array(pageCount), (_, i) => i + 1);
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  const isFirstPage = prevPage < 1;
  const isLastPage = nextPage > pageCount;

  return (
    <div className="pagination">
      <ul className="pagination__page-list">
        <li className={cn('page-item', {
          disabled: isFirstPage,
        })}
        >
          <Link
            className="page-link"
            to={{
              search: getSearchWith(
                searchParams, {
                  page: isFirstPage
                    ? currentPage.toString()
                    : prevPage.toString(),
                },
              ),
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
              <div className={cn(
                'page-button',
                'arrow-container',
                { 'page-button--active': currentPage === pageNum },
              )}
              >
                {pageNum}
              </div>
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
                searchParams, {
                  page: isLastPage
                    ? currentPage.toString()
                    : nextPage.toString(),
                },
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
