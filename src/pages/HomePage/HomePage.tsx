import { useEffect, useState } from 'react';
import { getPhones } from '../../api/phones';
import { Banner } from '../../components/Banner';
import { Categories } from '../../components/Categories';
import { Slider } from '../../components/Slider';
import { Phone } from '../../types/Phone';

export const HomePage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  const loadPhones = async () => {
    const { visiblePhones: phonesFromServer } = await getPhones();

    setPhones(phonesFromServer);
  };

  useEffect(() => {
    loadPhones();
  }, []);

  const sortedByDiscount = [...phones].sort((phoneA, phoneB) => {
    const firstDiscount = phoneA.fullPrice - phoneA.price;
    const secondDiscount = phoneB.fullPrice - phoneB.price;
    const difference = secondDiscount - firstDiscount;

    return difference;
  });

  return (
    <div className="home-page">
      <div className="container">
        <h1 className="home-page__title">
          Welcome to Nice Gadgets store!
        </h1>

        <section className="home-page__banner">
          <Banner />
        </section>

        <section className="home-page__section">
          <Slider
            title="Brand new models"
            gadgets={phones}
            navButtons={{
              prevEl: '.models-slider-button-prev',
              nextEl: '.models-slider-button-next',
            }}
          />
        </section>

        <section className="home-page__section">
          <Categories />
        </section>

        <section className="home-page__section">
          <Slider
            title="Hot prices"
            gadgets={sortedByDiscount}
            navButtons={{
              prevEl: '.prices-slider-button-prev',
              nextEl: '.prices-slider-button-next',
            }}
          />
        </section>
      </div>
    </div>
  );
};
