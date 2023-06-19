import {useEffect, useMemo, useState} from 'react';
import {getHotProducts, getPhones} from '../../api/phones';
import { Banner } from '../../components/Banner';
import { Categories } from '../../components/Categories';
import { Slider } from '../../components/Slider';
import { Gadget } from '../../types/Gadget';
import { Loader } from '../../components/Loader';

export const HomePage = () => {
  const [gadgets, setPhones] = useState<Gadget[]>([]);
  const [hotGadgets, setHotGadgets] = useState<Gadget[]>([])

  const loadPhones = async () => {
    const { visibleProducts: gadgetsFromServer } = await getPhones();
    const hotGadgetsFromServer = await getHotProducts();

    setPhones(gadgetsFromServer);
    setHotGadgets(hotGadgetsFromServer);
  };

  useEffect(() => {
    loadPhones();
  }, []);

  const sortedByNewModel = useMemo(() => (
    [...hotGadgets].sort((firstGadget, secondGadget) => (
        secondGadget.year - firstGadget.year
      )
    )
  ),[])

  return (
    <div className="home-page">
      {!gadgets.length
        ? <Loader />
        : (
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
                gadgets={sortedByNewModel}
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
                gadgets={hotGadgets}
                navButtons={{
                  prevEl: '.prices-slider-button-prev',
                  nextEl: '.prices-slider-button-next',
                }}
              />
            </section>
          </div>
        )}
    </div>
  );
};
