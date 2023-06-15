import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/swiper-bundle.css';
import { ProductCard } from '../ProductCard';
import './slider.scss';
import { ArrowButton } from '../ArrowButton';
import { SliderButtons } from '../../types/SliderNavButtons';
import { Gadget } from '../../types/Gadget';

interface Props {
  title: string;
  gadgets: Gadget[],
  navButtons: SliderButtons,
}

export const Slider: React.FC<Props> = ({
  title,
  gadgets,
  navButtons,
}) => {
  return (
    <div className="slider">
      <h2 className="slider__title">
        {title}
      </h2>
      <div className="slider-buttons">
        <div className={navButtons.prevEl.slice(1)}>
          <ArrowButton arrowDirection="left" />
        </div>

        <div className={navButtons.nextEl.slice(1)}>
          <ArrowButton arrowDirection="right" />
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        modules={[Navigation]}
        loop
        navigation={navButtons}
        breakpoints={{
          1200: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 2.5,
          },
          600: {
            slidesPerView: 2,
          },
          450: {
            slidesPerView: 1.5,
          },
          320: {
            slidesPerView: 1,
          },

        }}
      >
        {gadgets.map(gadget => (
          <SwiperSlide key={gadget.id}>
            <ProductCard phone={gadget} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
