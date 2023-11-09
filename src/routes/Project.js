import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImgTopSection from '../components/ImgTopSection';
import PricingCard from '../components/PricingCard';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <ImgTopSection heading="PROJECTS." text="A short visualization of my current projects"/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project;
