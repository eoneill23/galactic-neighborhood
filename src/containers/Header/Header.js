import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <h1>Galactic Neighborhood</h1>
      <NavLink className='nav-link' to='/'>Home</NavLink>
      <NavLink className='nav-link' to='/mercury'>Mercury</NavLink>
      <NavLink className='nav-link' to='/venus'>Venus</NavLink>
      <NavLink className='nav-link' to='/earth'>Earth</NavLink>
      <NavLink className='nav-link' to='/mars'>Mars</NavLink>
      <NavLink className='nav-link' to='/jupiter'>Jupiter</NavLink>
      <NavLink className='nav-link' to='/saturn'>Saturn</NavLink>
      <NavLink className='nav-link' to='/uranus'>Uranus</NavLink>
      <NavLink className='nav-link' to='/neptune'>Neptune</NavLink>
      <NavLink className='nav-link' to='/pluto'>Pluto</NavLink>
    </header>
  )
}

export default Header;