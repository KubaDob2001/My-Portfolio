import React from 'react'

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ImgTopSection from '../components/TopSectionAllPages/ImgTopSection';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <ImgTopSection heading="CONTACT." text="Let's use a chat"/>
      <Footer/>
    </div>
  )
}

export default Contact
