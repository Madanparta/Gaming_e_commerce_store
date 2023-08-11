import React from 'react'
import CurrencyFormat from 'react-currency-format';

const Subtotal = () => {
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>(
            <>
            <p>
                subtotal (0 items) : <strong>$0</strong>
            </p>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        // prefix={$}

        />
    </div>
  )
}

export default Subtotal