import React from 'react'
import cart from '../../assets/cart.svg'

export default function CartWidgetComponent () {
 
    const cartEstilo={
        width:'25px',
        height:'25px',
        color: 'white',
        margin: '10px'
      } 
  
    return (
      <>
      
        <img src={cart} alt='cart-widget'  style={cartEstilo} />
      </>
    )
  }


