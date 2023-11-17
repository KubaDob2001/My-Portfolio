import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HomeImg from '../components/TopHomePage/HomeImg'
import Footer from '../components/Footer/Footer'
import ProjectsSection from '../components/MyProjectCard/ProjectsSection'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomeImg/>
      <ProjectsSection/>
      <Footer/>
    </div>
  )
}

export default Home