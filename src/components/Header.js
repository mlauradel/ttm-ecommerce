import React from 'react'
import NavBar from './NavBar';
import logo from '../img/ttmnobg.png'

const Header = () => {
  return <header className='header'>
    <a href='index.html'>
      <img src={logo} alt="Logo TTM"></img>
      <h1>TTM</h1>
      </a>
      <NavBar/>
    </header>
  
}

export default Header