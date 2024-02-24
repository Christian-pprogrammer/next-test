'use client'

import { CollectionType } from '@/interfaces/interfaces'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CollectionElement from '../CollectionElement/CollectionElement'
import { Autoplay, Navigation } from 'swiper/modules'
import { useMediaQuery } from 'react-responsive';

type Props = {
  title: string,
  semiTitle: string,
  collections: Array<CollectionType>,
  reverse: boolean,
  delay: number
}

const CollectionsSlider = ({collections, title, semiTitle, reverse, delay}: Props) => {

  const isMobile = useMediaQuery({maxWidth: 960})

  return (
    <div className='collections-slider'>
      <div className='collections-slider__left'>
        <div>
          <div className='collections-slider__title'>{title}</div>
          <div className='collections-slider__semi-title'>{semiTitle}</div>
        </div>
        <div className='collections-slider__slider-buttons'>
          <span className="fa fa-thin fa-chevron-left" style={{fontSize: '24px', cursor: 'pointer'}}></span>
          <span className="fa fa-thin fa-chevron-right .swiper-button-next" style={{fontSize: '24px', cursor: 'pointer'}}></span>
        </div>
      </div>
      <div className='collections-slider__right'>
        {
          //only show swiper if it is on desktop
          isMobile ? (
            <>
              <div className='collections-slider__right__title'>
                <div className='collections-slider__title'>{title}</div>
                <div className='collections-slider__semi-title'>{semiTitle}</div>
              </div>
              <div className='collections-slider__right__items'>
                {
                  collections.map((collection: CollectionType, index: number) => (
                    <CollectionElement element={collection} key={index} />
                  ))
                }
              </div>
              
            </>
          ):(
            <Swiper
              slidesPerView={4}
              spaceBetween={3}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              autoplay={{
                delay: delay,
                disableOnInteraction: false,
                reverseDirection: reverse
              }}
            >
              {
                collections.map((collection: CollectionType, index: number) => (
                  <SwiperSlide key={index}>
                    <CollectionElement element={collection} />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          )
        }
        
      </div>
    </div>
  )
}

export default CollectionsSlider