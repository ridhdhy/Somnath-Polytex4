import React from 'react'
import { NavLink } from 'react-router-dom';
// import Navbar from './Navbar';

const Header = () => {
  return (
    <div>
        <NavLink to="/">
     <img src='./images/logo.png' width={90} height={90} alt='my logo img' />
    </NavLink>
    {/* <Navbar /> */}
    </div>
  )
}

export default Header
