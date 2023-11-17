import React from 'react';

import './MyProjectCardStyles.css';
import MyProjectCard from './MyProjectCard';
import ProjectCardData from './ProjectCardData';

const ProjectsSection = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
           {ProjectCardData.map((val, ind) => {
            return (
              <MyProjectCard
              key={ind}
              image={val.image}
              title={val.title}
              text={val.text}
              view={val.view}
              code={val.code}
              />
            )
           })}
        </div>
    </div>
  )
};

export default ProjectsSection;