import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';

import { Breadcrumbs } from '../../components/Breadcrumbs';
// import { HeartButton } from '../../components/HeartButton';
import { Slider } from '../../components/Slider/Slider';

import {
  i02,
  i01,
  i00,
} from '../../img/images';

const arr = [i01, i02, i00];

SwiperCore.use([Pagination]);

export const AboutPage: React.FC = () => {
  const category = 'Cart page';

  return (
    <main className="main-page-card">
      <div className="container">
        <Breadcrumbs category={category} />

        <div className="card-page__grid">
          <h1 className="card-page__title card-page__title_grid">
            Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
          </h1>

          <section className="card-page__slider">
            <div className="card-page__slider-container">
              <Swiper
                direction="horizontal"
                id="swiper-1"
                slidesPerView={1}
                spaceBetween={30}
                loop
                pagination={{
                  clickable: true,
                  renderBullet: (index, className) => {
                    return `<div class="${className}">
                         <img class="bullet-image" src=${arr[index]} alt="icon" />
                    </div>`;
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {arr.map(image => {
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

          <section className="card-page__settings settings">
            <div className="settings__color-container">
              <p className="settings__title">Available colors</p>
              <p className="settings__title">ID: 145</p>
            </div>

            <div className="settings__colors">
              <a href="/" className="settings__button-color">
                <a
                  title="color"
                  href="/"
                  className="settings__color settings__color_dynamic"
                >
                  .
                </a>
              </a>

              <a href="/" className="settings__button-color">
                <a
                  title="color"
                  href="/"
                  className="settings__color settings__color_dynamic"
                >
                  .
                </a>
              </a>

              <a href="/" className="settings__button-color">
                <a
                  title="color"
                  href="/"
                  className="settings__color settings__color_dynamic"
                >
                  .
                </a>
              </a>
            </div>

            <p className="settings__title">Select capacity</p>

            <div className="settings__capacities">
              <a href="/" className="settings__button-capacity">
                64 GB
              </a>
              <a href="/" className="settings__button-capacity">
                128 GB
              </a>
              <a href="/" className="settings__button-capacity">
                256 GB
              </a>
            </div>

            <div className="settings__price-container">
              <p className="settings__price">
                &#x24;899
              </p>

              <p className="settings__price settings__price_not-actual">
                <del>&#x24;1029</del>
              </p>
              <div className="settings__buttons-container">
                <button type="button" className="settings__button">
                  Add to cart
                </button>
                <button type="button" className="settings__like">
                  {/* <HeartButton /> */}
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
                6.5” OLED
              </p>

              <p className="characteristic__description
              characteristic__description_key"
              >
                Resolution
              </p>

              <p className="characteristic__description
              characteristic__description_value"
              >
                2688x1242
              </p>

              <p className="characteristic__description
              characteristic__description_key"
              >
                Processor
              </p>

              <p className="characteristic__description
              characteristic__description_value"
              >
                Apple A12 Bionic
              </p>

              <p className="characteristic__description
              characteristic__description_key"
              >
                RAM
              </p>

              <p className="characteristic__description
              characteristic__description_value"
              >
                3 GB
              </p>
            </div>
          </section>

          <section className="card-page__about about">
            <h2 className="about__title">
              About
            </h2>

            <div className="about__description">
              <h3 className="about__subtitle">
                And then there was Pro
              </h3>
              <p className="about__text">
                A transformative triple‑camera
                system that adds tons of capability without complexity.
                An unprecedented leap in battery life.
                And a mind‑blowing chip that doubles
                down on machine learning and pushes the boundaries of what
                a smartphone can do. Welcome
                to the first iPhone powerful enough to be called Pro.
              </p>
            </div>

            <div className="about__description">
              <h3 className="about__subtitle">
                Camera
              </h3>
              <p className="about__text">
                Meet the first triple‑camera system to combine cutting‑edge
                technology with the legendary simplicity of iPhone.
                Capture up to four times more scene. Get beautiful
                images in drastically lower light. Shoot the highest‑quality
                video in a smartphone — then edit with the same
                tools you love for photos. You’ve never shot
                with anything like it.
              </p>
            </div>

            <div className="about__description">
              <h3 className="about__subtitle">
                Shoot it. Flip it. Zoom it. Crop it. Cut it.
                Light it. Tweak it. Love it.
              </h3>
              <p className="about__text">
                iPhone 11 Pro lets you capture videos that are beautifully
                true to life, with greater detail and smoother motion.
                Epic processing power means it can shoot 4K video with extended
                dynamic range and cinematic video stabilization
                — all at 60 fps. You get more creative control, too, with four
                times more scene and powerful new editing tools to play with.
              </p>
            </div>
          </section>

          <section className="card-page__tech-specs tech-specs">
            <h2 className="about__title">
              Tech specs
            </h2>

            <div className="settings__parameters tech-specs-parameters">
              <p className="tech-specs-parameters__description
              tech-specs-parameters__description_key"
              >
                Screen
              </p>

              <p className="tech-specs-parameters__description
              tech-specs-parameters__description_value"
              >
                6.5” OLED
              </p>

              <p className="tech-specs-parameters__description
              tech-specs-parameters__description_key"
              >
                Resolution
              </p>

              <p className="tech-specs-parameters__description
              tech-specs-parameters__description_value"
              >
                2688x1242
              </p>

              <p className="tech-specs-parameters__description
              tech-specs-parameters__description_key"
              >
                Processor
              </p>

              <p className="tech-specs-parameters__description
              tech-specs-parameters__description_value"
              >
                Apple A12 Bionic
              </p>

              <p className="tech-specs-parameters__description
              tech-specs-parameters__description_key"
              >
                RAM
              </p>

              <p className="tech-specs-parameters__description
              tech-specs-parameters__description_value"
              >
                3 GB
              </p>

              <p className="tech-specs-parameters__description
              tech-specs-parameters__description_key"
              >
                Built in memory
              </p>

              <p className="tech-specs-parameters__description
              tech-specs-parameters__description_value"
              >
                64 GB
              </p>

              <p className="tech-specs-parameters__description
              tech-specs-parameters__description_key"
              >
                Camera
              </p>

              <p className="tech-specs-parameters__description
              tech-specs-parameters__description_value"
              >
                12 Mp + 12 Mp + 12 Mp (Triple)
              </p>

              <p className="tech-specs-parameters__description
              tech-specs-parameters__description_key"
              >
                Zoom
              </p>

              <p className="tech-specs-parameters__description
              tech-specs-parameters__description_value"
              >
                Optical, 2x
              </p>

              <p className="tech-specs-parameters__description
              tech-specs-parameters__description_key"
              >
                Cell
              </p>

              <p className="tech-specs-parameters__description
              tech-specs-parameters__description_value"
              >
                GSM, LTE, UMTS
              </p>
            </div>
          </section>

          <section className="card-page__bottom-slider bottom-slider">
            <div className="bottom-slider__container">
              <Slider title="You may also like" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
