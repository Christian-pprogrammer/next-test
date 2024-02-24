'use client'

import { ShortCutDataElement } from '@/interfaces/interfaces'
import Image from 'next/image'
import React from 'react'
import { useMediaQuery } from 'react-responsive'


const ShortCutElement = ({element}: {element: ShortCutDataElement}) => {

  const isMobile = useMediaQuery({maxWidth: 960});

  return (
    <div className='shortcut-element'>
      <Image src={element.imageUrl} alt='' width={isMobile ? 48:62} height={isMobile ? 48:62} />
      <div>{element.title}</div>
    </div>
  )
}

export default ShortCutElement