import React from 'react'
import banner from './Minimalist_Warfare_Banner.jpeg'
import CheckoutItem from './CheckoutItem'
import Subtotal from './Subtotal'
import './CheckoutPage.css'

const CheckoutPage = () => {
  return (
    <div className="checkoutPage">
      <img src={banner} alt="banner" />
      <h3>Your Cart 🛒</h3>
      <div className='dividing'>
        <div className="checkout_left">
          <CheckoutItem />
          <CheckoutItem />
        </div>

        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage