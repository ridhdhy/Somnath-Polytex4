import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar2 = () => {
  return (
    <>
    <nav className="main-nav">
    <div className="logo">
    <h2>
            <span>T</span>hapa
            <span>T</span>echnical
          </h2>
        </div>
          {/* 2nd menu part  */}
          <div className="menu-link">
              <ul>
                <li>
                  <a href="">HOME</a>
                  
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
              {/* <li>
              <NavLink to="/about">about</NavLink>
            </li> */}

            

           
          </div>
    </nav>
    </>
  )
}

export default Navbar2
