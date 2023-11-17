import React from 'react';

import './MyProjectCardStyles.css';
import { Link } from 'react-router-dom';

const MyProjectCard = (props) => {
  return (
            <div className='project-card'>
                <img src={props.image} alt='project-img'/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='project-details'>
                    <p>{props.text}</p>
                    <div className='project-buttons'>
                        <Link to={props.view} className='btn'>View</Link>
                        <Link to={props.code} className='btn'>Code</Link>
                    </div>
                </div>
            </div>
  )
};

export default MyProjectCard;
