// import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SelectChangeEvent } from '@mui/material';
import { Pagination } from '../../components/Pagination';
import { Gadget } from '../../types/Gadget';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { GadgetsDisplayControl } from '../../components/GadgetsDisplayControl';
import { SortType } from '../../types/SortType';
import { getSearchWith } from '../../utils/searchHelper';
import { ProductList } from '../../components/ProductList';
import { Loader } from '../../components/Loader';
import { getProductsPaginated } from '../../api/products';
import { NoGadgetsMessage } from '../../components/NoGadgetsMessage';

interface Props {
  category: string;
}

const getNormalizedPage = (
  searchParams: URLSearchParams,
  pageCount: number,
) => {
  let currentPage = Number(searchParams.get('page'));

  if (currentPage <= 0
    || currentPage > pageCount
    || Number.isNaN(currentPage)) {
    currentPage = 1;
  }

  return currentPage;
};

export const GadgetsPage: React.FC<Props> = ({ category }) => {
  const [gadgets, setGadgets] = useState<Gadget[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredPhonesCount, setFilteredPhonesCount] = useState(0);
  const [gadgetsCount, setGadgetsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const itemsPerPage = Number(searchParams.get('perPage') || 8);
  const pageCount = Math.ceil(filteredPhonesCount / itemsPerPage);
  const currentPage = getNormalizedPage(searchParams, pageCount);
  const sortType = searchParams.get('sort') || SortType.New;

  const priceRangeSP = [
    Number(searchParams.get('minPrice')) || 0,
    Number(searchParams.get('maxPrice')) || 0,
  ];

  const [priceRange, setPriceRange] = useState<number | number[]>([
    priceRangeSP[0], priceRangeSP[1],
  ]);

  const pageTitle = category[0].toUpperCase() + category.slice(1);

  const loadGadgets = async () => {
    setIsLoading(true);

    try {
      const [min, max] = priceRangeSP;

      const {
        allProductsCount,
        filteredCount,
        visibleProducts: phonesFromServer,
      } = await getProductsPaginated(
        category,
        itemsPerPage,
        currentPage,
        sortType as SortType,
        min,
        max,
      );

      setFilteredPhonesCount(filteredCount);
      setGadgetsCount(allProductsCount);
      setGadgets(phonesFromServer);
    } catch {
      throw new Error('failed to load gadgets');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageCountChange = (
    event: SelectChangeEvent<number>,
  ) => {
    const { value } = event.target;

    setSearchParams(getSearchWith(searchParams, {
      page: null,
      perPage: value.toString(),
    }));
  };

  const handleSortChange = (event: SelectChangeEvent<SortType>) => {
    const { value } = event.target;

    setSearchParams(getSearchWith(searchParams, { sort: value, page: null }));
  };

  const handlePriceChange = (
    _event: Event,
    value: number | number[],
  ) => {
    setPriceRange(value);
  };

  useEffect(() => {
    loadGadgets();
  }, [searchParams]);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      const [min, max] = Array.isArray(priceRange) ? priceRange : [null, null];

      if ((min !== priceRangeSP[0] || max !== priceRangeSP[1])
      && (min && max)) {
        setSearchParams(getSearchWith(searchParams, {
          page: null,
          minPrice: min.toString(),
          maxPrice: max.toString(),
        }));
      }
    }, 500);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [priceRange]);

  return (
    <>
      {isLoading
        ? <Loader />
        : (
          <div className="container gadgets-page">
            <Breadcrumbs category={pageTitle} />
            <h1 className="gadgets-page__title">
              {pageTitle}
            </h1>

            {!!gadgetsCount && (
              <>
                <p className="gadgets-page__description">
                  {`${gadgetsCount} models`}
                </p>
                <GadgetsDisplayControl
                  category={category}
                  itemsPerPage={itemsPerPage}
                  sortType={sortType as SortType}
                  priceRange={priceRange}
                  onPriceChange={handlePriceChange}
                  onPageCountChange={handlePageCountChange}
                  onSortingChange={handleSortChange}
                />

              </>
            )}

            {gadgets.length ? (
              <div className="pagination__items">
                <ProductList gadgets={gadgets} />
              </div>
            ) : <NoGadgetsMessage />}

            {pageCount > 1
            && <Pagination pageCount={pageCount} currentPage={currentPage} />}

          </div>
        )}
    </>
  );
};
