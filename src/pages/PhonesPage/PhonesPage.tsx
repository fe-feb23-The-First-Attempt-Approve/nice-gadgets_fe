import { NavLink } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { home, arrow } from '../../img/images';
import { Pagination } from '../../components/Pagination';
import { getPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';

export const PhonesPage = () => {
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
      <p>
        {`${phones.length} models`}
      </p>

      {!!phones.length && <Pagination items={phones} />}
    </div>
  );
};
