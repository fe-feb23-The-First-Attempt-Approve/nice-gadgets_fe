import { useContext } from 'react';
import { ProductsContext } from '../../providers/ProductsContext';
import { Banner } from '../../components/Banner';
import { Categories } from '../../components/Categories';
import { Slider } from '../../components/Slider';
import { Loader } from '../../components/Loader';

export const HomePage = () => {
  const {
    gadgets,
    sortedByNewModel,
    productsAmount,
    hotGadgets,
  } = useContext(ProductsContext);

  const renderedHotGagets = hotGadgets.slice(0, 8);

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
              <Categories productsAmount={productsAmount} />
            </section>

            <section className="home-page__section">
              <Slider
                title="Hot prices"
                gadgets={renderedHotGagets}
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
