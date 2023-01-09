import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { StaticImage } from 'gatsby-plugin-image';
import { Pagination, EffectFade, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import SectionMask from '@components/SectionMask';

import SliderItem from './components/SliderItem';

const initialPagination = {
  clickable: true,
  horizontalClass: 'bottom-32 sm:bottom-20 z-10',
  bulletClass:
    `inline-block w-5 h-5 rounded-full mx-2 bg-azzurra-gray-60 opacity-60 border-x border-y ` +
    'border-opacity-70 border-white border-opacity-70 cursor-pointer',
  bulletActiveClass: 'bg-azzurra-dark-gold opacity-100 border-opacity-100'
};

const HeroBanner = () => {
  const minHeight = 'min-h-[700px]';

  return (
    <div
      className={`${minHeight} mobile-landscape:min-h-[700px] relative overflow-hidden`}
    >
      <Swiper
        loop={false}
        className="azzurra-swiper-slider"
        centeredSlides
        spaceBetween={0}
        slidesPerView={1}
        modules={[Pagination, EffectFade, Autoplay]}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false
        }}
        pagination={initialPagination}
      >
        <SwiperSlide className={`${minHeight} azzurra-swiper-slider__wrapper`}>
          <SliderItem
            title={['Bons ventos para', 'os seus investimentos!']}
            description={
              'Conheça a Azzurra Capital, a gestora de recursos que vai ' +
              'guiar a jornada rumo ao seu futuro.'
            }
            element={
              <div className={'w-full h-full bg-azzurra-navy-blue-fb'}>
                <div
                  className={
                    'entrance-opacity w-full h-full hidden object-cover lg:block'
                  }
                >
                  <video
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    poster="/images/azzurra__hero-banner.webp"
                    className={
                      'w-full h-full video[poster]:w-full video[poster]:h-full object-cover'
                    }
                  >
                    <source
                      src="/video/azzurra__hero-video.webm"
                      type="video/webm"
                    />
                    <source
                      src="/video/azzurra__hero-video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>

                <StaticImage
                  breakpoints={[320, 640, 768, 1024, 1280, 1536, 1920]}
                  quality={100}
                  width={1920}
                  height={1080}
                  layout={'fullWidth'}
                  imgClassName={'w-[150%] -left-2/4 sm:w-full sm:left-0'}
                  className={
                    'h-full w-full flex items-center justify-center ' +
                    `mobile-landscape:min-h-[700px] ${minHeight}`
                  }
                  src="../../../../images/azzurra__hero-banner.jpg"
                  alt="Imagem do mar com um barco a direita"
                />
              </div>
            }
          />
        </SwiperSlide>
      </Swiper>
      <SectionMask />
    </div>
  );
};

export default HeroBanner;
