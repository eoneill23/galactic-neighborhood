import React from 'react';
import { NavLink } from 'react-router-dom';
import { resetStoreCalculation } from '../../actions/index';
import { connect } from 'react-redux';
import './Header.css';

export const Header = ({ resetStoreCalculation }) => {

  const dispatchNumber = 0;

  return (
    <>
    <h1>Galactic Neighborhood</h1>
    <header className='header'>
      <NavLink onClick={() => resetStoreCalculation(dispatchNumber)} activeClassName='active' className='nav-link' exact to='/'>Home</NavLink>
        <NavLink onClick={() => resetStoreCalculation(dispatchNumber)} activeClassName='active' className='nav-link' to='/mercury'>Mercury</NavLink>
        <NavLink onClick={() => resetStoreCalculation(dispatchNumber)} activeClassName='active' className='nav-link' to='/venus'>Venus</NavLink>
        <NavLink onClick={() => resetStoreCalculation(dispatchNumber)} activeClassName='active' className='nav-link' to='/earth'>Earth</NavLink>
        <NavLink onClick={() => resetStoreCalculation(dispatchNumber)} activeClassName='active' className='nav-link' to='/mars'>Mars</NavLink>
        <NavLink onClick={() => resetStoreCalculation(dispatchNumber)} activeClassName='active' className='nav-link' to='/jupiter'>Jupiter</NavLink>
        <NavLink onClick={() => resetStoreCalculation(dispatchNumber)} activeClassName='active' className='nav-link' to='/saturn'>Saturn</NavLink>
        <NavLink onClick={() => resetStoreCalculation(dispatchNumber)} activeClassName='active' className='nav-link' to='/uranus'>Uranus</NavLink>
        <NavLink onClick={() => resetStoreCalculation(dispatchNumber)} activeClassName='active' className='nav-link' to='/neptune'>Neptune</NavLink>
        <NavLink onClick={() => resetStoreCalculation(dispatchNumber)} activeClassName='active' className='nav-link' to='/pluto'>Pluto</NavLink>
    </header>
    </>
  )
}

export const mapDispatchToProps = dispatch => ({
  resetStoreCalculation: (dispatchNumber) => dispatch(resetStoreCalculation(dispatchNumber))
});

export default connect(null, mapDispatchToProps)(Header);