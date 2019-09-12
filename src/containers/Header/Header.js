import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/mercury'>Mercury</NavLink>
      <NavLink to='/venus'>Venus</NavLink>
      <NavLink to='/earth'>Earth</NavLink>
      <NavLink to='/mars'>Mars</NavLink>
      <NavLink to='/jupiter'>Jupiter</NavLink>
      <NavLink to='/saturn'>Saturn</NavLink>
      <NavLink to='/uranus'>Uranus</NavLink>
      <NavLink to='/neptune'>Neptune</NavLink>
      <NavLink to='/pluto'>Pluto</NavLink>
    </header>
  )
}

export default Header;