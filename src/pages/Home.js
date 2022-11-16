import React from 'react'
import Discounts from '../components/Home/Discounts'
import '../App.css'
import IphoneX from '../components/Home/IphoneX'
import IphoneXS from '../components/Home/IphoneXS'
import Macbook from '../components/Home/Macbook'

function AppHome() {
  return (
    <div className='content-home'>
      <Discounts />
      <hr className='hr' />
      <IphoneX />
      <hr className='hr' />
      <IphoneXS />
      <Macbook />
    </div>
  )
}

export default AppHome