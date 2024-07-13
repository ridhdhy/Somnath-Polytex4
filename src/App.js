import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './componnents/Navbar'
// import Carousels from './componnents/carousels/Carousels'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Contact from './contact/Contact';
// import {GlobalStyle} from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
// import Hero from "./home/Hero";



 export const App = () => {




  const theme = {
    colors: {
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98,84,243,0.5)",
      hr: "#ffffff",
      gradient:
      "linear-gradient(0deg,rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media:{
      mobile: "768px",
      tab: "998px",
    }
  };





  return (

    <ThemeProvider theme={theme}>
   <Router>
   <Navbar />
   
   {/* <Carousels /> */}
   <Routes>
   
   {/* <Route path="/home" element={<Home />}/> */}
   <Route path="/" element={<Home />} />
   {/* <Route path="/" element={<Hero />} /> */}
   <Route path="/About" element={<About />} />
   <Route path="/Contact" element={<Contact />} />
   </Routes>
   </Router>
   </ThemeProvider>
  )
}

export default App
