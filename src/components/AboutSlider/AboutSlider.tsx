import { useEffect, useState } from 'react';
import {
  Swiper, SwiperSlide,
} from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { GadgetItem } from '../../types/GadgetItem';

import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';

SwiperCore.use([Pagination]);

type Props = {
  device: GadgetItem;
};

export const AboutSlider: React.FC<Props> = ({ device }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [device.images]);

  return (
    <section className="card-page__slider">
      <div className="card-page__slider-container">
        <Swiper
          observer
          key={key}
          id="swiper-1"
          slidesPerView={1}
          spaceBetween={30}
          loop
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<div class="${className}">
                          <img class="bullet-image" src=${device.images[index]} alt="icon" />
                      </div>`;
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {device.images.map(image => {
            return (
              <SwiperSlide key={image}>
                <div className="imgSwipe">
                  <img
                    src={image}
                    alt="sfasdf"
                    className="imgSwipe__image"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
