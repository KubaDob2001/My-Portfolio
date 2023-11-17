import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ImgTopSection from '../components/TopSectionAllPages/ImgTopSection';
import PricingCard from '../components/PricingCard/PricingCard';
import ProjectsSection from '../components/MyProjectCard/ProjectsSection';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <ImgTopSection heading="PROJECTS." text="A short visualization of my current projects"/>
      <ProjectsSection/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project;
