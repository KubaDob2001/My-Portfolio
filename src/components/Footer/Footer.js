import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import "./FooterStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {

    const facebookPageUrl = "https://www.facebook.com/kuba.dobrowolski.92/";
    const LinkedinUrl = "https://www.linkedin.com/in/jakub-dobrowolski-a3a69b293/";
    const GithubUrl = "https://github.com/KubaDob2001";

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location"><h4><FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>Rdestowa 144, Gdynia</h4></div>
            <div className="phone"><h4><FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>+48 733-552-164</h4></div>
            <div className="mail"><h4><FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>kuba.dobry-wp.pl@wp.pl</h4></div>
        </div>
        <div className="right">
            <h4>About me</h4>
            <p>I'm a young student with a passion for web development, particularly in Django and React. I love creating dynamic and interactive websites and web applications. Django, with its powerful back-end capabilities, and React, with its front-end prowess, provide me with the perfect tools to bring my ideas to life. I enjoy the challenge of building user-friendly and responsive web solutions that can make a real impact in today's digital world.</p>
            <div className="social">
                <Link to={facebookPageUrl}><FaFacebook size={30} style={{color:"white", marginRight:"1rem"}}/></Link>
                <Link to={LinkedinUrl}><FaLinkedin size={30} style={{color:"white", marginRight:"1rem"}}/></Link>
                <Link to={GithubUrl}><FaGithub size={30} style={{color:"white", marginRight:"1rem"}}/></Link>
            </div>        
        </div>
      </div>
    </div>
  )
}

export default Footer
