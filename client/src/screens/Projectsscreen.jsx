import { Button, Typography } from '@mui/material';
import React from 'react';
import './Projects.css';
import {AiOutlineProject} from 'react-icons/ai';
import { Delete } from '@mui/icons-material';
import mongo from '../images/c_sharp.png';


const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false
}) => {
    return (
        <>
        <a href={url} className='projectCard'>
            <div>
                <img src={projectImage} alt='project'></img>
                <Typography variant='h5'>{projectTitle}</Typography>
            </div>
            <div>
                <Typography variant='h4'>About Project</Typography>
                <Typography>{description}</Typography>
                <Typography variant='h6'>Tech Stack: {technologies}</Typography>
            </div>
        </a>
        {isAdmin && (<Button><Delete /></Button>)}
        </>
    );
}

const Projectsscreen = () => {
    const projects = [1,2,3];
  return (
    <div className='projects'>
        <Typography variant='h3'>Projects <AiOutlineProject /> </Typography>
        <div className="projectWrapper">
            {projects.map((project, index)=>(
                <ProjectCard
                  url='https://github.com/djolodjolovista/The_Apartments'
                  projectImage={mongo}
                  projectTitle='Sample Project'
                  description='Web application for renting apartments'
                  technologies='MongoDB, React, NodeJs, Express'
                />
            ))}
        </div>

    </div>
  )
}

export default Projectsscreen