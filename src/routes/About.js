import React from 'react'

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ImgTopSection from '../components/TopSectionAllPages/ImgTopSection';
import AboutMeSection from '../components/AboutMeSection/AboutMeSection';

const About = () => {
  return (
    <div>
      <Navbar/>
      <ImgTopSection heading="ABOUT ME." text="I'm a young and advanced Front-End Developer"/>
      <AboutMeSection/>
      <Footer/>
    </div>
  )
}

export default About
