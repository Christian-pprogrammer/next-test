"use client"
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <div className='navbar__item navbar__item--left'>
          <Image src={'https://www.testvalley.kr/logo/logo-new.svg'} alt='logo' width={128.356} height={26} style={{
            marginRight: '16px'
          }} />
          <div className='category'>
            카테고리
          </div>
          <div className='navbar__input'>
            <Image className='navbar__input__image' src={'https://www.testvalley.kr/common/search.svg'} alt='logo' width={20} height={20} />
            <input type="text" className='navbar__search-input' />
          </div>
        </div>  
        <div className='navbar__item navbar__item--right'>
        
            <button>
              <Image src={'https://www.testvalley.kr/common/home-event.svg'} alt=''  width={28} height={28} />
            </button>
            <Image src={'https://www.testvalley.kr/common/vertical-bar.svg'} alt='' width={1} height={14} />
            <button>로그인 / 회원가입</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar