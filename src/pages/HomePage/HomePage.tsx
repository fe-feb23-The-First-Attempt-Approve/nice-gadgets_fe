import { Banner } from '../../components/Banner';
import { Categories } from '../../components/Categories';
import { Slider } from '../../components/Slider';

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="container">
        <h1 className="home-page__title">Welcome to Nice Gadgets store!</h1>

        <section className="home-page__banner">
          <Banner />
        </section>

        <section className="home-page__section">
          <Slider title="Brand new models" />
        </section>

        <section className="home-page__section">
          <Categories />
        </section>

        <section className="home-page__section">
          <Slider title="Hot prices" />
        </section>
      </div>
    </div>
  );
};
