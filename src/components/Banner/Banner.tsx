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
import {
  iphoneFull,
  iphoneSquere1,
  iphoneSquere2,
  iphoneSquere3,
} from '../../img/images';

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
            <img src={iphoneSquere1} alt="test-slide" />
          ) : (
            // eslint-disable-next-line max-len
            <img src="https://media.idownloadblog.com/wp-content/uploads/2021/09/Apple-iPhone-13-Pro-advertisement.jpg" alt="test-slide" />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {isMobile ? (
            <img src={iphoneSquere2} alt="test-slide" />
          ) : (
            // eslint-disable-next-line max-len
            <img src="https://media.idownloadblog.com/wp-content/uploads/2021/04/Apple-ad-Mission-Implausible-iPad-Pro-Mac-M1-chip-001.jpg" alt="test-slide" className="bunner__image" />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {isMobile ? (
            <img src={iphoneSquere3} alt="test-slide" />
          ) : (
            <img src={iphoneFull} alt="test-slide" />
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
