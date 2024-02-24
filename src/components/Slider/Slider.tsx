'use client'
import { BannerItem } from '@/interfaces/interfaces'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive'


type SliderProps = {
  bannerData: BannerItem[]
}

const Slider = ({bannerData}: SliderProps) => {

  const isMobile = useMediaQuery({maxWidth: 960})

  const swiper = useSwiper();
  
  return (
    <div className='slider'>
      <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
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
  )
}

export default Slider