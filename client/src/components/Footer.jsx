import React from 'react';
import {Button, Link, Typography} from '@mui/material';
import {BsGithub} from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <div className='container1'>
            <Typography variant='h5'>About me</Typography>
            <Typography>
                Hey, my name is Đorđe Džino. I am an electrical engineer in the field of computer science and informatics.
            </Typography>
           <div className='myDiv'>
            <Link to='/contact' className='footerContactBtn'  >
                <Typography >Contact me</Typography>
            </Link>
            </div>
        </div>
        <div className='container2'>
            <Typography variant='h6'>Social Media</Typography>
            <a href='https://github.com/djolodjolovista' rel="noreferrer" target="_blank" >
            <BsGithub className='gitHub' />
            </a>
            
        </div>

    </div>
  )
}

export default Footer