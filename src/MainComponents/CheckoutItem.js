import React from 'react'
import imgdes from './best-pc-games-valorant.jpg'

const CheckoutItem = () => {
  return (
    <div className='checkoutItems'>
      <div className='img_part'>
        <img src={imgdes} alt="" />
      </div>
      <div className='text_part'>
        <h4>item name</h4>
        <button>Remove cart</button>
      </div>
    </div>
  )
}

export default CheckoutItem