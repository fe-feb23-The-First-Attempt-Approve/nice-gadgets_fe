import { useEffect, useState } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="banner">
      <Swiper
        effect="cube"
        touchEventsTarget="container"
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
          {isMobile ? (
            <img src="./img/banner/smallBannerChip.webp" alt="m1-chip" />
          ) : (
            // eslint-disable-next-line max-len
            <img src="./img/banner/bannerIphone.jpg" alt="iphone-13-pro" />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {isMobile ? (
            <img
              src="./img/banner/smallBannerIphones.webp"
              alt="iphone-cases"
            />
          ) : (
            // eslint-disable-next-line max-len
            <img src="./img/banner/banneriPadPro.jpg" alt="ipad-pro" className="bunner__image" />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {isMobile ? (
            <img src="./img/banner/smallBannerIphone.webp" alt="iphone-12" />
          ) : (
            <img src="./img/banner/bannerIphones.webp" alt="iphone-cases" />
          )}
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
