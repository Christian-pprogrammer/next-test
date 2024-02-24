"use client"
import { ShortCutDataElement } from '@/interfaces/interfaces'
import React from 'react'
import ShortCutElement from '../ShortCutElement/ShortCutElement'

type ShortCutData = {
  shortCutData: ShortCutDataElement[]
}


const ShortCut = ({shortCutData}: ShortCutData) => {
  return (
    <div className='short-cut'>
      {
        shortCutData.map((element: ShortCutDataElement, index: number)=>(
          <ShortCutElement element={element} key={index} />
        ))
      }
    </div>
  )
}

export default ShortCut