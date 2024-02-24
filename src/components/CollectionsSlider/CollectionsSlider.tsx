'use client'

import { CollectionType } from '@/interfaces/interfaces'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CollectionElement from '../CollectionElement/CollectionElement'
import { Navigation } from 'swiper/modules'
import { useMediaQuery } from 'react-responsive';

type Props = {
  title: string,
  semiTitle: string,
  collections: Array<CollectionType>
}

const CollectionsSlider = ({collections, title, semiTitle}: Props) => {

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
              modules={[Navigation]}
              className="mySwiper"
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
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