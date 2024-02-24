'use client'
import { CollectionType } from '@/interfaces/interfaces'
import { formatPrice } from '@/services/utils'
import Image from 'next/image'
import React from 'react'

type Props = {
  element: CollectionType
}
const CollectionElement = ({element}: Props) => {
  return (
    <div className='collection-element'>
      <div>
        <Image src={element.thumbnail ? element.thumbnail.uri:'https://dvd6ljcj7w3pj.cloudfront.net/media/COLLECTION/d3428fc9-1d41-4c37-99af-a1e979cacce4.png'} alt='' width={174} height={174} style={{
          borderRadius: '4px'
        }} />
      </div>
      <div>
        <p className='collection-element__title'>{element.title}</p>
        <p>
          <span className='collection-element__price'>
            {formatPrice(123999)}
          </span>
        </p>
        <p className='collection-element__coupon'>
          쿠폰
        </p>
        <div className='collection-element__rating'>
          <Image src={'https://www.testvalley.kr/star/star-darkgray.svg'} alt='' height={12} width={12} />
          <span style={{fontSize: '12px'}}>
            {element.rating}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CollectionElement