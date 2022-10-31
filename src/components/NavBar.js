import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <a href="#">Maderas</a>
        <a href="#">Gomas</a>
        <a href="#">Mesas</a>
        <a href="#">Accesorios</a>
        <CartWidget/>
    </nav>
  )
}

export default NavBar