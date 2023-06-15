import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { GadgetsDisplayControl } from '../../components/GadgetsDisplayControl';
import { ProductList } from '../../components/ProductList';
import { SortType } from '../../types/SortType';
import { Gadget } from '../../types/Gadget';
import { getSearchWith } from '../../utils/searchHelper';
import { getTablets } from '../../api/tablets';
import { Pagination } from '../../components/Pagination';

export const TabletsPage = () => {
  const [tablets, setTablets] = useState<Gadget[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredTabletsCount, setFilteredTabletsCount] = useState(0);
  const [tabletsCount, setTabletsCount] = useState(0);

  const currentPage = Number(searchParams.get('page') || 1);
  const sortType = searchParams.get('sort') || SortType.New;
  const itemsPerPage = Number(searchParams.get('perPage') || 8);
  const priceRange = [
    Number(searchParams.get('minPrice')) || 0,
    Number(searchParams.get('maxPrice')) || 5000,
  ];

  const pageCount = Math.ceil(filteredTabletsCount / itemsPerPage);

  const loadTablets = async () => {
    try {
      const [min, max] = priceRange;

      const {
        allTabletsCount,
        filteredCount,
        visibleTablets: tabletsFromServer,
      } = await getTablets(
        itemsPerPage,
        currentPage,
        sortType as SortType,
        min,
        max,
      );

      setFilteredTabletsCount(filteredCount);
      setTabletsCount(allTabletsCount);
      setTablets(tabletsFromServer);
    } catch {
      // eslint-disable-next-line no-console
      console.log('failed to load phones');
    }
  };

  useEffect(() => {
    loadTablets();
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
    <div className="container">
      <Breadcrumbs category="Tablets" />

      <h1 className="gadgets-page__title">Tablets page</h1>

      <p className="gadgets-page__description">
        {`${tabletsCount} models`}
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
        <ProductList gadgets={tablets} />
      </div>

      <Pagination pageCount={pageCount} currentPage={currentPage} />
    </div>
  );
};
