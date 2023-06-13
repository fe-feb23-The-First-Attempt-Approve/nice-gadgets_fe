import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useEffect, useState } from 'react';
import { getPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';

import 'swiper/swiper-bundle.css';
import { ProductCard } from '../ProductCard';
import './slider.scss';
import { ArrowButton } from '../ArrowButton';

interface Props {
  title: string;
}

export const Slider: React.FC<Props> = ({ title }) => {
  const [phones, setPhones] = useState<Phone[]>([]);

  const loadPhones = async () => {
    const phonesFromServer = await getPhones();

    setPhones(phonesFromServer);
  };

  useEffect(() => {
    loadPhones();
  }, []);

  return (
    <div className="slider">
      <h2 className="slider__title">
        {title}
      </h2>
      <div className="slider-buttons">
        <div className="slider-button-prev">
          <ArrowButton arrowDirection="left" />
        </div>

        <div className="slider-button-next">
          <ArrowButton arrowDirection="right" />
        </div>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        modules={[Navigation]}
        navigation={{
          prevEl: '.slider-button-prev',
          nextEl: '.slider-button-next',
        }}
      >
        {phones.map(phone => (
          <SwiperSlide key={phone.id}>
            <ProductCard phone={phone} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
