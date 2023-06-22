import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cn from 'classnames';

import { useProducts } from '../../providers/ProductsContext';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { HeartButton } from '../../components/HeartButton';
import { Slider } from '../../components/Slider/Slider';
import { GadgetItem } from '../../types/GadgetItem';
import { getOneProduct } from '../../api/products';
import { phoneTemplate } from '../../utils/phoneTemplate';
import { Loader } from '../../components/Loader';
import { AboutSlider } from '../../components/AboutSlider';
import { DeviceDescription } from '../../components/DeviceDescription';
import { DeviceCharacteristic } from '../../components/DeviceCharacteristic';
import { BuyButton } from '../../components/BuyButton';
import { Gadget } from '../../types/Gadget';

export const AboutPage: React.FC = () => {
  const { gadgets } = useProducts();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [device, setDevice] = useState<GadgetItem>(phoneTemplate);
  const [, setLastViewedGagets] = useState<Gadget[] | null>([]);

  const selectedGadget = gadgets.find((item) => item.itemId === device.id);
  const category = selectedGadget
    ? selectedGadget?.category.charAt(0).toUpperCase()
      + selectedGadget?.category.slice(1).toLowerCase()
    : '';

  const currentPage = device.name;

  const loadPhone = async () => {
    try {
      const deviceFromServer = await getOneProduct(pathname);

      setDevice(deviceFromServer);
    } catch {
      // eslint-disable-next-line no-console
      console.log('failed to load phone');
      navigate('/not-found-page');
    }
  };

  const getCorectedColor = (color: string): string => {
    switch (color) {
      case 'rosegold':
        return '#e5abab';
      case 'spacegray':
        return 'lightslategray';
      case 'midnightgreen':
        return 'darkseagreen';
      case 'gold':
        return 'peachpuff';
      case 'green':
        return 'mediumaquamarine';
      case 'yellow':
        return '#ffd02e';
      case 'red':
        return '#d11b2d';
      case 'purple':
        return '#d6d3de';
      case 'black':
        return '#1e1e1e';
      case 'white':
        return '#fffaf7';
      default:
        return color;
    }
  };

  const onCapacityHandler = (
    capacity?: string,
    color?: string,
  ) => {
    let newPathName = '';

    if (capacity) {
      const deviceCapacity = device.capacity.toLowerCase();
      const avalibleCapacity = capacity.toLowerCase();

      newPathName = pathname.replace(deviceCapacity, avalibleCapacity);
    }

    if (color) {
      const deviceColor = device.color.toLowerCase();
      const avalibleColor = color.toLowerCase();

      newPathName = pathname.replace(deviceColor, avalibleColor);
    }

    navigate(newPathName);
  };

  useEffect(() => {
    loadPhone();
    window.scrollTo({
      top: 100,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  useEffect(() => {
    const storedGagets = localStorage.getItem('gagets');

    if (storedGagets) {
      setLastViewedGagets(JSON.parse(storedGagets));
    }
  }, []);

  const updateLastViewedGagets = (currentGaget: Gadget) => {
    setLastViewedGagets((prevGagets: Gadget[] | null) => {
      const correctedGagets = prevGagets || [];

      const updatedGaget = correctedGagets
        .filter(gag => gag.itemId !== currentGaget.itemId);

      updatedGaget.push(currentGaget);

      localStorage.setItem('gagets', JSON.stringify(updatedGaget));

      return updatedGaget;
    });
  };

  useEffect(() => {
    const currentGaget = gadgets.find((item: Gadget) => {
      return item.itemId === device.id;
    });

    if (currentGaget) {
      updateLastViewedGagets(currentGaget);
    }
  }, [device]);

  return (
    <main className="main-page-card">
      {device.id === 'id'
        ? <Loader />
        : (
          <div className="container">
            <Breadcrumbs category={category} currentPage={currentPage} />
            <div className="card-page__grid">
              <h1 className="card-page__title card-page__title_grid">
                {device.name}
              </h1>

              <AboutSlider device={device} />

              <section className="card-page__settings settings">
                <div className="settings__color-container">
                  <p className="settings__title">Available colors</p>
                  {/* <p className="settings__title">
                    {`ID: ${device.id}`}
                  </p> */}
                </div>

                <div className="settings__colors">
                  {device.colorsAvailable.map(color => {
                    const correctedColor = getCorectedColor(color);

                    return (
                      <button
                        type="button"
                        className="settings__button-color"
                        key={color}
                        onClick={() => onCapacityHandler('', color)}
                      >
                        <span
                          title={color}
                          className="settings__color settings__color_dynamic"
                          style={{ backgroundColor: correctedColor }}
                        >
                          { }
                        </span>
                      </button>
                    );
                  })}
                </div>

                <p className="settings__title">Select capacity</p>

                <div className="settings__capacities">
                  {device.capacityAvailable.map(capacity => {
                    return (
                      <button
                        type="button"
                        key={capacity}
                        className={cn(
                          'settings__button-capacity',
                          // eslint-disable-next-line
                        { 'settings__button-capacity_active': device.capacity === capacity },
                        )}
                        onClick={() => onCapacityHandler(capacity)}
                      >
                        {capacity}
                      </button>
                    );
                  })}
                </div>

                <div className="settings__price-container">
                  <p className="settings__price">
                    &#x24;
                    {
                      device.priceRegular === device.priceDiscount
                        ? device.priceRegular
                        : device.priceDiscount
                    }
                  </p>

                  {device.priceRegular && (
                    <p className="settings__price settings__price_not-actual">
                      <del>
                        &#x24;
                        {device.priceRegular}
                      </del>
                    </p>
                  )}

                  <div className="settings__buttons-container">
                    {selectedGadget && (
                      <BuyButton gadget={selectedGadget} />
                    )}

                    <button type="button" className="settings__like">
                      <HeartButton itemId={device.id} name={device.name} />
                    </button>
                  </div>
                </div>

                <div className="settings__parameters characteristic">
                  <p className="characteristic__description
                characteristic__description_key"
                  >
                    Screen
                  </p>

                  <p className="characteristic__description
                characteristic__description_value"
                  >
                    {device.screen}
                  </p>

                  <p className="characteristic__description
                characteristic__description_key"
                  >
                    Resolution
                  </p>

                  <p className="characteristic__description
                characteristic__description_value"
                  >
                    {device.resolution}
                  </p>

                  <p className="characteristic__description
                characteristic__description_key"
                  >
                    Processor
                  </p>

                  <p className="characteristic__description
                characteristic__description_value"
                  >
                    {device.processor}
                  </p>

                  <p className="characteristic__description
                characteristic__description_key"
                  >
                    RAM
                  </p>

                  <p className="characteristic__description
                characteristic__description_value"
                  >
                    {device.ram}
                  </p>
                </div>
              </section>

              <DeviceDescription device={device} />

              <DeviceCharacteristic device={device} />

              <section className="card-page__bottom-slider bottom-slider">
                <div className="bottom-slider__container">
                  <Slider
                    title="You may also like"
                    gadgets={gadgets}
                    navButtons={{
                      prevEl: '.models-slider-button-prev',
                      nextEl: '.models-slider-button-next',
                    }}
                  />
                </div>
              </section>
            </div>
          </div>
        )}
    </main>
  );
};
