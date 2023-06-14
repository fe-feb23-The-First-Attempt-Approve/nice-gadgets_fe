// import { NavLink } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
// import { home, arrow } from '../../img/images';
import { Pagination } from '../../components/Pagination';
import { getPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { GadhetsFilters } from '../../components/GadhetsFilters';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [phonesCount, setPhonesCount] = useState(0);
  const loadPhones = useCallback(async () => {
    try {
      const { allPhonesCount, phones: phonesFromServer } = await getPhones();

      setPhonesCount(allPhonesCount);
      setPhones(phonesFromServer);
    } catch {
      // eslint-disable-next-line no-console
      console.log('failed to load phones');
    }
  }, []);

  useEffect(() => {
    loadPhones();
  }, []);

  return (
    <div className="container gadgets-page">
      <Breadcrumbs category="Phones" />

      {/* <div className="page-links">
        <NavLink to="/" className="link-line__link">
          <img src={home} alt="home" />
        </NavLink>

        <NavLink to="/phones" className="link-line__link">
          <img src={arrow} alt="arrow" />

          <span>Phones</span>
        </NavLink>
      </div> */}

      <h1 className="gadgets-page__title">Mobile phones</h1>

      <p className="gadgets-page__description">
        {`${phones.length} models`}
      </p>

      <GadhetsFilters />

      {!!phones.length && (
        <Pagination allItemsCount={phonesCount} items={phones} />
      )}
    </div>
  );
};
