// import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { home, arrow } from '../../img/images';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '../../components/Pagination';
import { getPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { GadgetsDisplayControl } from '../../components/GadgetsDisplayControl';
import { SortType } from '../../types/SortType';
import { getSearchWith } from '../../utils/searchHelper';
import { ProductList } from '../../components/ProductList';

export const getMinMaxPrice = (items: Phone[]) => {
  const prices = items.map(item => item.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  return [min, max];
};

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [phonesCount, setPhonesCount] = useState(0);

  const currentPage = Number(searchParams.get('page') || 1);
  const sortType = searchParams.get('sort') || SortType.New;
  const itemsPerPage = Number(searchParams.get('perPage') || 8);
  const priceRange = [
    Number(searchParams.get('minPrice')) || 0,
    Number(searchParams.get('maxPrice')) || 5000,
  ];

  const pageCount = Math.ceil(phonesCount / itemsPerPage);

  const loadPhones = async () => {
    try {
      const [min, max] = priceRange;

      const {
        allPhonesCount,
        phones: phonesFromServer,
      } = await getPhones(
        itemsPerPage,
        currentPage,
        sortType as SortType,
        min,
        max,
      );

      setPhonesCount(allPhonesCount);
      setPhones(phonesFromServer);
    } catch {
      // eslint-disable-next-line no-console
      console.log('failed to load phones');
    }
  };

  useEffect(() => {
    loadPhones();
  }, [searchParams]);

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
    const [min, max] = Array.isArray(value) ? value.map(String) : [null, null];

    setSearchParams(getSearchWith(searchParams, {
      minPrice: min,
      maxPrice: max,
    }));
  };

  return (
    <div className="container gadgets-page">
      <Breadcrumbs category="Phones" />

      <h1 className="gadgets-page__title">Mobile phones</h1>

      <p className="gadgets-page__description">
        {`${phones.length} models`}
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
  );
};
