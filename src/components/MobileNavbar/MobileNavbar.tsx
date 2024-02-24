"use client"
import Image from 'next/image'
import React from 'react'

const MobileNavbar = () => {
  return (
    <div className='mobile-navbar'>
      <div style={{
        marginLeft: '20px'
      }}>
        <Image src='https://www.testvalley.kr/logo/logo-mobile-new.svg' alt='' width={125.71} height={45}  />
      </div>
      <div className='mobile-navbar__right'>
      <Image 
        src='https://www.testvalley.kr/common/bell_default.svg' 
        alt='' width={24} height={24}  
        style={{margin: '12px'}}  
      />
      <Image 
        src='https://www.testvalley.kr/common/search_new.svg' 
        alt='' width={18} height={20} 
        style={{margin: '12px'}}    
      />
      </div>
    </div>
  )
}

export default MobileNavbar