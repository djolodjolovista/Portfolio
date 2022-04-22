import React, {useEffect} from 'react';
import './Home.css';
import * as THREE from 'three'; //javascript 3d library
import {Typography} from '@mui/material';
import TimeLine from '../components/TimeLine';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/javascript.png'
import php from '../images/php.png';
import mongo from '../images/mongodb.png';
import c_sharp from '../images/c_sharp.png';
import {
  SiReact, 
  SiJavascript, 
  SiNodedotjs, 
  SiExpress, 
  SiCss3, 
  SiHtml5,
  SiPhp, 
  SiC, 
  SiCsharp, 
  SiMysql, 
  SiGit, 
  SiGithub,
  SiMongodb} from 'react-icons/si';
//import {TimeLine} from '../components/TimeLine';



const Homescreen = () => {

    useEffect(() => {
     
      
      window.addEventListener('scroll', () =>{
        const skillBox = document.getElementById('homeSkillsBox')

        if(window.scrollY >= 1000){
          skillBox.style.animationName='homeSkillsBoxAnimationOn';
        }
        else{
          skillBox.style.animationName = 'homeSkillsBoxAnimationOff';
        }
      })
      
    }, [])
    

  return (
    <div className='home'>
        <canvas className='homeCanvas'> </canvas>
        <div className='homeContainer'>
           <Typography variant='h3'>TIMELINE</Typography>
           <TimeLine timelines={[1,2,3,4]}></TimeLine>
        </div>
        <div className='homeSkills'>
          <Typography variant='h3'>Skills</Typography>
          <div className='homeCubeSkills'>
            <div className='homeCubeSkillsFaces homeCubeSkillsFace1'>
            <img src={html} width="100px" height="100px" alt='Face1' />

            </div>
            <div className='homeCubeSkillsFaces homeCubeSkillsFace2'>
            <img src={css} width="100px" height="100px" alt='Face2' />

            </div>
            <div className='homeCubeSkillsFaces homeCubeSkillsFace3'>
            <img src={js} width="100px" height="100px" alt='Face3' />

            </div>
            <div className='homeCubeSkillsFaces homeCubeSkillsFace4'>
            <img src={php} width="100px" height="100px" alt='Face4' />

            </div>
            <div className='homeCubeSkillsFaces homeCubeSkillsFace5'>
            <img src={mongo} width="100px" height="100px" alt='Face5' />

            </div>
            <div className='homeCubeSkillsFaces homeCubeSkillsFace6'>
            <img src={c_sharp} width="100px" height="100px" alt='Face6' />

            </div>

          </div>
          <div className='cubeShadow'></div>
          <div className='homeSkillsBox' id='homeSkillsBox'>
            <SiC />
            <SiCsharp />
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
            <SiReact />
            <SiNodedotjs />
            <SiExpress />
            <SiPhp />
            <SiMongodb />
            <SiMysql />
            <SiGit />
            <SiGithub />

          </div>
        </div>
        
        
    </div>
  )
}

export default Homescreen