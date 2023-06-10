import { NavLink } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { ProductCard } from '../../components/ProductCard';
import { home, arrow } from '../../img/images';
// import { Pagination } from '../../components/Pagination';
import { getPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';

export const PhonesPage = () => {
  // const [countPerPage, setCountPerPage] = useState(5);
  // const [currentPage, setCurrentPage] = useState(1);
  const [phones, setPhones] = useState<Phone[]>([]);

  const loadPhones = useCallback(async () => {
    try {
      const phonesFromServer = await getPhones();

      setPhones(phonesFromServer);
    } catch {
      // eslint-disable-next-line no-console
      console.log('failed to load phones');
    }
  }, []);

  useEffect(() => {
    loadPhones();
  }, []);

  // const firstVisibleItemIndex = (currentPage - 1) * countPerPage;
  // const lastItemIndex = firstVisibleItemIndex + countPerPage;
  // const lastVisibleItemIndex = lastItemIndex > products.length
  //   ? products.length
  //   : lastItemIndex;

  // const visibleItems = products
  //   .slice(firstVisibleItemIndex, lastVisibleItemIndex);

  // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setCountPerPage(Number(event.target.value));
  //   setCurrentPage(1);
  // };
  // eslint-disable-next-line no-console
  console.log(phones);

  return (
    <div className="container">
      <div className="page-links">
        <NavLink to="/" className="link-line__link">
          <img src={home} alt="home" />
        </NavLink>

        <NavLink to="/phones" className="link-line__link">
          <img src={arrow} alt="arrow" />

          <span>Phones</span>
        </NavLink>
      </div>

      <h1 className="title">Mobile phones</h1>

      {phones.map(phone => <ProductCard phone={phone} />)}
      {/* <Pagination
        total={42}
        perPage={20}
        currentPage={1}
        onPageChange={handleChange}
        visibleItems={visibleItems}
      /> */}
    </div>
  );
};
