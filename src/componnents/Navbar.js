import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
      
        <div className="logo">
        <NavLink to="/">
     <img src='./images/logo.png' width={90} height={90} alt='my logo img' />
    </NavLink>
     
     </div>
   
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/About">ABOUT US</NavLink>
            </li><li>
              <NavLink to="/">INFRASTRUCTURE</NavLink>
            </li><li>
              <NavLink to="/">PRODUCTS</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">CONTACT US</NavLink>
            </li>
            {/* <li>
                  <a href="/home/Home.js">HOME</a>
                  
                </li> */}
                {/* <li>
                  <a href="">ABOUT US</a>
                  
                </li>
                <li>
                  <a href="">INFRASTRUCTURE</a>
                  
                </li>
                <li>
                  <a href="">PRODUCTS</a> */}
                  {/* <ul className="sub-menu">
                 <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-591">
                  <a href="">ABOUT US</a>
                  
                </li>
                  </ul> */}
                {/* </li> */}
                {/* <li>
                  <a href="">CONTACT US</a>
                  
                </li> */}
            
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul> */}

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;