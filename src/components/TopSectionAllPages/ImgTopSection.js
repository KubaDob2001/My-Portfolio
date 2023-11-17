import React, { Component } from 'react'

import "./ImgTopSectionStyles.css";

class ProjectSection extends Component {
  render() {
     return (
    <div className='section-img-bg'>
      <div className='heading'>
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
      </div>
    </div>
    );
  };
 }

export default ProjectSection