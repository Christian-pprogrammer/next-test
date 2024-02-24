'use client'
import { BannerItem } from '@/interfaces/interfaces'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive'


type SliderProps = {
  bannerData: BannerItem[]
}

const Slider = ({bannerData}: SliderProps) => {

  const isMobile = useMediaQuery({maxWidth: 960})

  const swiper = useSwiper();
  
  return (
    <>
    <div className='slider pc-slider'>
      <Swiper
      slidesPerView={1.50}
      centeredSlides={true}
      spaceBetween={35}
      loop={true}
      // navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation, Autoplay]}
      autoplay={{
        delay: 2400,
        disableOnInteraction: false,
      }}
      className="mySwiper"
      style={{
        //@ts-ignore
        '--swiper-pagination-color': '#fff',
        '--swiper-navigation-color': '#fff'
      }}
    >
      {
        bannerData.map((element: BannerItem, index: number)=>(
          <SwiperSlide>
            <Image 
              src={isMobile ? element.mobileImageUrl : element.pcImageUrl}
              alt='' 
              width={isMobile ? 420:960} 
              height={isMobile ? 200:320} />
          </SwiperSlide>
        ))
      }
      </Swiper>
    </div>

    <div className='slider mobile-slider'>
      <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={true}
      // navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}

      className="myMobileSwiper"
    >
      {
        bannerData.map((element: BannerItem, index: number)=>(
          <SwiperSlide>
            <Image 
              src={isMobile ? element.mobileImageUrl : element.pcImageUrl}
              alt='' 
              width={420} 
              height={200} />
          </SwiperSlide>
        ))
      }
      </Swiper>
    </div>
    </>
  )
}

export default Slider