// import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { home, arrow } from '../../img/images';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '../../components/Pagination';
import { getPhones } from '../../api/phones';
import { Gadget } from '../../types/Gadget';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { GadgetsDisplayControl } from '../../components/GadgetsDisplayControl';
import { SortType } from '../../types/SortType';
import { getSearchWith } from '../../utils/searchHelper';
import { ProductList } from '../../components/ProductList';
import { Loader } from '../../components/Loader';

export const getMinMaxPrice = (items: Gadget[]) => {
  const prices = items.map(item => item.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  return [min, max];
};

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Gadget[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredPhonesCount, setFilteredPhonesCount] = useState(0);
  const [phonesCount, setPhonesCount] = useState(0);

  const currentPage = Number(searchParams.get('page') || 1);
  const sortType = searchParams.get('sort') || SortType.New;
  const itemsPerPage = Number(searchParams.get('perPage') || 8);
  const priceRangeSP = [
    Number(searchParams.get('minPrice')),
    Number(searchParams.get('maxPrice')),
  ];

  const [priceRange, setPriceRange] = useState<number | number[]>([]);

  const pageCount = Math.ceil(filteredPhonesCount / itemsPerPage);

  const loadPhones = async () => {
    try {
      const [min, max] = priceRangeSP;

      const {
        allProductsCount,
        filteredCount,
        visibleProducts: phonesFromServer,
      } = await getPhones(
        itemsPerPage,
        currentPage,
        sortType as SortType,
        min,
        max,
      );

      setFilteredPhonesCount(filteredCount);
      setPhonesCount(allProductsCount);
      setPhones(phonesFromServer);
    } catch {
      throw new Error('failed to load phones');
    }
  };

  const handlePageCountChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value } = event.target;

    setSearchParams(getSearchWith(searchParams, {
      page: null,
      perPage: value,
    }));
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    setSearchParams(getSearchWith(searchParams, { sort: value }));
  };

  const handlePriceChange = (
    _event: Event,
    value: number | number[],
  ) => {
    setPriceRange(value);
  };

  useEffect(() => {
    loadPhones();
  }, [searchParams]);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      const [min, max] = Array.isArray(priceRange) ? priceRange : [null, null];

      if ((min !== priceRangeSP[0] || max !== priceRangeSP[1])
      && (min && max)) {
        setSearchParams(getSearchWith(searchParams, {
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
      {!phones.length
        ? <Loader />
        : (
          <div className="container gadgets-page">
            <Breadcrumbs category="Phones" />

            <h1 className="gadgets-page__title">Mobile phones</h1>

            <p className="gadgets-page__description">
              {`${phonesCount} models`}
            </p>

            <GadgetsDisplayControl
              itemsPerPage={itemsPerPage}
              sortType={sortType as SortType}
              priceRange={priceRange}
              onPriceChange={handlePriceChange}
              onPageCountChange={handlePageCountChange}
              onSortingChange={handleSortChange}
            />

            <div className="pagination__items">
              <ProductList gadgets={phones} />
            </div>

            <Pagination pageCount={pageCount} currentPage={currentPage} />
          </div>
        )}
    </>
  );
};
