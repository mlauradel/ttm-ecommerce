import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <Link to='maderas'>Maderas</Link>
        <Link to='gomas'>Gomas</Link>
        <Link to='paletas'>Paletas Armadas</Link>
        <Link to='accesorios'>Accesorios</Link>

        <CartWidget/>
    </nav>
  )
}

export default NavBar