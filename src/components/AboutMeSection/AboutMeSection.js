import { Link } from "react-router-dom";
import "./AboutMeSectionStyles.css";
import ReactLogo from "../../assets/react-logoG.gif";
import PythonDjangoLogo from "../../assets/django-python-logo.png";

import React from 'react'

const AboutMeSection = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who AM I?</h1>
        <p>I'm a final-year student at the Gdynia Maritime University, deeply passionate about React and Python Django development. Besides I had experience in work with data (SQL, Excel, PowerQuery and PowerBi) Specializing in crafting innovative websites and web applications, I blend of skills to create responsive, functional, and visually appealing solutions.</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>     
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack bottom">
                <img src={PythonDjangoLogo} className="img" alt="Python&Django Logo"></img>
            </div>
            <div className="img-stack top">
                <img src={ReactLogo} className="img" alt="React Logo"></img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMeSection
