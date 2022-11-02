import React from 'react'
import NavBar from './NavBar';
import logo from '../img/ttmnobg.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return <header className='header'>
    <Link to='/'>
      <img src={logo} alt="Logo TTM"></img>
      <h1>TTM</h1>
      </Link>
      <NavBar/>
    </header>
  
}

export default Header