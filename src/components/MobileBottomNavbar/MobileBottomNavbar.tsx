'use client'

import React from 'react'
import Image from 'next/image'

const MobileBottomNavbar = () => {
  return (
    <div className="mobile-bottom-navbar">
      <div className="mobile-bottom-navbar__item">
        <Image 
          src="https://www.testvalley.kr/navibar/ico-home-on.svg" 
          alt="홈" className="css-1rhefwm" 
          width={21}
          height={21}
        />
        <p>홈</p>
      </div>
      <div className="mobile-bottom-navbar__item">
        <Image 
          src="https://www.testvalley.kr/navibar/ico-search-off.svg" 
          alt="검색" 
          className="css-1rhefwm" 
          width={21}
          height={21}  
        />
        <p>검색</p>
      </div>
      <div className="mobile-bottom-navbar__item">
        <Image
          src="https://www.testvalley.kr/navibar/ico-category-off.svg"
          alt="카테고리"
          className="css-1rhefwm"
          width={21}
          height={21}
        />
        <p>카테고리</p>
      </div>
      <div className="mobile-bottom-navbar__item">
        <Image 
          src="https://www.testvalley.kr/navibar/ico-likelist-off.svg" 
          alt="좋아요" 
          className="css-1rhefwm" 
          width={21}
          height={21}
        />
        <p>좋아요</p>
      </div>
      <div className="mobile-bottom-navbar__item">
        <Image
          src="	https://www.testvalley.kr/navibar/ico-mypage-off.svg"
          alt="마이페이지"
          className="css-1rhefwm"
          width={21}
          height={21}
        />
        <p>마이페이지</p>
      </div>
    </div>

  )
}

export default MobileBottomNavbar