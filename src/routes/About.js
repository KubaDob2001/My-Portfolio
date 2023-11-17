import React from 'react'

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ImgTopSection from '../components/TopSectionAllPages/ImgTopSection';

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
