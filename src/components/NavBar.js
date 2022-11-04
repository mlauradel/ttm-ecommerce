import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <NavLink to='/productos/maderas'>Maderas</NavLink>
        <NavLink to='/productos/gomas'>Gomas</NavLink>
        <NavLink to='/productos/paletas'>Paletas Armadas</NavLink>
        <NavLink to='/productos/accesorios'>Accesorios</NavLink>

        <CartWidget/>
    </nav>
  )
}

export default NavBar