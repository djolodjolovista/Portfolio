import React from 'react';
import './About.css';
import {Typography} from '@mui/material';
import avatar from '../images/avatar.jpg';

const Aboutscreen = () => {
  return (
    <div className='about'>
        <div className='aboutContainer1'>
          <Typography>First, solve the problem. Then, write the code.</Typography>

        </div>
        <div className='aboutContainer2'>
          <div>
            <img src={avatar} alt='Djordje' className='aboutAvatar'/>
            <Typography variant='h4' style={{margin: '1vmax 0', color: 'black'}}>Đorđe</Typography>
            <Typography>Full Stack Developer</Typography>
            <Typography>Electrical Engineer - Computer Science and Informatics</Typography>
          </div>
          <div>
            <Typography className='description'>Even when I was younger, I showed interest in computers.
             Today I am determined to pursue information technology and
              I would like to build a career in the web industry</Typography>
          </div>

        </div>

    </div>
  )
}

export default Aboutscreen