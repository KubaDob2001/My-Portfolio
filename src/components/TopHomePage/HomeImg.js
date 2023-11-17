import "./HomeImgStyles.css";

import React from 'react'

import BgImg from "../../assets/bg.jpg"
import { Link } from "react-router-dom";

const HomeImg = () => {
  return (
    <div className="section">
        <div className="mask">
            <img className="bg-img" src={BgImg} alt="Background-Img"/>
        </div>
        <div className="content">
            <p>You have the pleasure of seeing my portfolio</p>
            <h1>Hello, My name is Jakub Dobrowolski</h1>
            <h1>Django & React Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
};

export default HomeImg
