import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cn from 'classnames';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { HeartButton } from '../../components/HeartButton';
import { Slider } from '../../components/Slider/Slider';
import { GadgetItem } from '../../types/GadgetItem';
import { getOnePhone, getPhones } from '../../api/phones';
import { phoneTemplate } from '../../utils/phoneTemplate';
import { Gadget } from '../../types/Gadget';
import { Loader } from '../../components/Loader';
import { AboutSlider } from '../../components/AboutSlider';
import { DeviceDescription } from '../../components/DeviceDescription';
import { DeviceCharacteristic } from '../../components/DeviceCharacteristic';

export const AboutPage: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [phones, setPhones] = useState<Gadget[]>([]);
  const [device, setDevice] = useState<GadgetItem>(phoneTemplate);
  const category = 'Phones';
  const currentPage = device.name;

  const loadPhone = async () => {
    try {
      const deviceFromServer = await getOnePhone(pathname);

      setDevice(deviceFromServer);
    } catch {
      // eslint-disable-next-line no-console
      console.log('failed to load phone');
    }
  };

  const loadPhones = async () => {
    const { visibleProducts: phonesFromServer } = await getPhones();

    setPhones(phonesFromServer);
  };

  const heartGaget = phones.find(({ itemId }) => {
    return itemId === device.id;
  });

  const getCorectedColor = (color: string): string => {
    switch (color) {
      case 'rosegold':
        return 'orangered';
      case 'spacegray':
        return 'lightslategray';
      case 'midnightgreen':
        return 'darkseagreen';
      case 'gold':
        return 'peachpuff';
      case 'green':
        return 'mediumaquamarine';
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
    loadPhones();
  }, []);

  useEffect(() => {
    loadPhone();
    window.scrollTo({
      top: 100,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return (
    <main className="main-page-card">
      {!phones.length
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
                  <p className="settings__title">
                    {heartGaget && `ID: ${heartGaget.id}`}
                  </p>
                </div>

                <div className="settings__colors">
                  {device.colorsAvailable.map(color => {
                    const correctedColor = getCorectedColor(color);

                    return (
                      <button
                        type="button"
                        className="settings__button-color"
                        key={color}
                        style={{ border: `1px solid ${correctedColor}` }}
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
                    <button type="button" className="settings__button">
                      Add to cart
                    </button>
                    <button type="button" className="settings__like">
                      {heartGaget && <HeartButton itemId={phoneTemplate.id} />}
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
                    gadgets={phones}
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
