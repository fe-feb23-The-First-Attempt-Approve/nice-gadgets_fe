import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  A11y,
} from 'swiper';

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

import 'swiper/swiper-bundle.css';
import './banner.scss';

export const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        style={{ width: '100%' }}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide style={{ width: '100%' }}>
          {/* eslint-disable-next-line max-len */}
          <img src="https://media.istockphoto.com/id/1354195128/photo/new-model-apple-iphone-lies-on-laptop-keyboard-closeup.jpg?s=612x612&w=0&k=20&c=qyvQM6SF-569W8THCtE00TkJai3vPu0vHAS-35CRXRM=" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {/* eslint-disable-next-line max-len */}
          <img src="https://media.istockphoto.com/id/1354195128/photo/new-model-apple-iphone-lies-on-laptop-keyboard-closeup.jpg?s=612x612&w=0&k=20&c=qyvQM6SF-569W8THCtE00TkJai3vPu0vHAS-35CRXRM=" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {/* eslint-disable-next-line max-len */}
          <img src="https://media.istockphoto.com/id/1354195128/photo/new-model-apple-iphone-lies-on-laptop-keyboard-closeup.jpg?s=612x612&w=0&k=20&c=qyvQM6SF-569W8THCtE00TkJai3vPu0vHAS-35CRXRM=" alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="button-prev">
        <MdOutlineKeyboardArrowLeft />
      </div>

      <div className="button-next">
        <MdOutlineKeyboardArrowRight />
      </div>
    </div>
  );
};
