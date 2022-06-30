import React from 'react'
import '../footer/Footer.css'
import handsHeart from '../image/handsHeart.png'
import { BackTop } from 'antd';
import arrow from '../image/arrow.png'

export default function Footer() {
  return (
    <div className='footer'>
        <img className='footer_image' src={handsHeart} alt="hands heart" />
        <BackTop>
      <div className='upDown'>
        <img className='upDown_arrow' src={arrow} alt='up' />
        </div>
    </BackTop>
    </div>
  )
}
