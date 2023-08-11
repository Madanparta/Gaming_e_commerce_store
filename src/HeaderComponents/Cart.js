import React from 'react'

const Cart = () => {
  return (
    <div className='cart_sections'>
      <h4 className='cartName'>Your Cart🛒</h4>
      <p>items <span className='cart_item'>0</span></p>
      <p>Total 💲<span className='cart_total_amout'>0</span></p>
    </div>
  )
}

export default Cart