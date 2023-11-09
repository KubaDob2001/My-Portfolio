import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImgTopSection from '../components/ImgTopSection';

const About = () => {
  return (
    <div>
      <Navbar/>
      <ImgTopSection heading="ABOUT ME." text="I'm a young and advanced Front-End Developer"/>
      <Footer/>
    </div>
  )
}

export default About
