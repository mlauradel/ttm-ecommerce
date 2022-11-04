import React from 'react'
import Count from './Count'


const CartWidget = () => {
  return (
    <div className='cartwidget'>
        <a href='#'>
            <i className="cart fa-solid fa-cart-shopping">
            <span className='contador'>2</span>
            </i>
            
        </a>
    </div>
  )
}

export default CartWidget