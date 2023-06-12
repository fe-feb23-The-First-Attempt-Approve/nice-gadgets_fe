// import { NavLink } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
// import { home, arrow } from '../../img/images';
import { Pagination } from '../../components/Pagination';
import { getPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export const PhonesPage = () => {
  const category = 'Phones';
  const [isLoading, setIsLoading] = useState(false);
  const [phones, setPhones] = useState<Phone[]>([]);
  const loadPhones = useCallback(async () => {
    try {
      const phonesFromServer = await getPhones();

      setIsLoading(true);

      setPhones(phonesFromServer);
    } catch {
      throw new Error('failed to load phones');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPhones();
  }, []);

  return (
    <div className="container gadgets-page">
      <Breadcrumbs category={category} />

      <h1 className="gadgets-page__title">Mobile phones</h1>

      <p className="gadgets-page__description">
        {`${phones.length} models`}
      </p>

      {(!isLoading || !!phones.length) && <Pagination items={phones} />}
    </div>
  );
};
