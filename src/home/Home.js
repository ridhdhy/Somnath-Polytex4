import React from 'react'
import Carousels from "../componnents/carousels/Carousels";
import "./Home.css";
import {FaYoutube,FaTwitter,FaCartPlus} from "react-icons";

const Home = () => {
  return (
    <div>
        <Carousels />
        <div className="section">
          <div className="container">
            <div className="content-section">
              <div className="title">
                <h1>About Us</h1>
              </div>
              <div className="content">
                <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quasi odio, numquam fugiat illum similique!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt inventore vitae doloremque dolore ut iusto recusandae beatae esse mollitia voluptate optio atque totam autem non blanditiis, odit commodi ullam repellat.</p>
                {/* <div className="button">
                  <a href="">Read More</a>
                </div> */}
              </div>
              <div className="social">
                {/* <a href=""><i className='fab fa-facebook-f'></i></a>
                <a href=""><i className='fab FaTwitter'></i></a>
                <a href=""><i className='fab fa-instagram'></i></a> */}
              </div>
            </div>
            <div className="image-section">
              <img src="/images/6.jpg" alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
