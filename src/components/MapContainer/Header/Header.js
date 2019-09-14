import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
    <h1>Galactic Neighborhood</h1>
    <header className='header'>
      <NavLink activeClassName='active' className='nav-link' exact to='/'>Home</NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/mercury'>Mercury</NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/venus'>Venus</NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/earth'>Earth</NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/mars'>Mars</NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/jupiter'>Jupiter</NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/saturn'>Saturn</NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/uranus'>Uranus</NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/neptune'>Neptune</NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/pluto'>Pluto</NavLink>
    </header>
    </>
  )
}

export default Header;