import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Navigation,
  Pagination,
  A11y,
  EffectCube,
} from 'swiper';

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

import 'swiper/swiper-bundle.css';

export const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        effect="cube"
        style={{ width: '100%' }}
        modules={[Autoplay, Navigation, Pagination, A11y, EffectCube]}
        slidesPerView={1}
        loop
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{
          el: '.swiper-custom-pagination',
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
      >
        <SwiperSlide>
          {/* eslint-disable-next-line max-len */}
          <img src="https://media.idownloadblog.com/wp-content/uploads/2021/09/Apple-iPhone-13-Pro-advertisement.jpg" alt="test-slide" />
        </SwiperSlide>
        <SwiperSlide>
          {/* eslint-disable-next-line max-len */}
          <img src="https://media.idownloadblog.com/wp-content/uploads/2021/04/Apple-ad-Mission-Implausible-iPad-Pro-Mac-M1-chip-001.jpg" alt="test-slide" />
        </SwiperSlide>
        <SwiperSlide>
          {/* eslint-disable-next-line max-len */}
          <img src="https://i.ytimg.com/vi/V8x3ais9nes/maxresdefault.jpg" alt="test-slide" />
        </SwiperSlide>
      </Swiper>

      <div className="button-prev">
        <MdOutlineKeyboardArrowLeft />
      </div>

      <div className="button-next">
        <MdOutlineKeyboardArrowRight />
      </div>

      <div className="swiper-custom-pagination">
        <button type="button" className="test">
          <div className="swiper-bullet" />
        </button>

        <div className="swiper-bullet" />
        <div className="swiper-bullet" />
      </div>
    </div>
  );
};
