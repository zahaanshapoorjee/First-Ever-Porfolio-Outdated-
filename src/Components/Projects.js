import React from 'react'
import { Link } from 'react-scroll/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from './SocialMedia';
export default function Projects()
{
    return (<div className='daddy2'>
        <div className='firstscrollup'><Link to='section2'smooth={true} ><FontAwesomeIcon icon={faAngleDoubleUp} size="2x" className='firstscrollupicon'></FontAwesomeIcon></Link></div>
        <h1 className='projectsText'>PROJECTS</h1>
        <div className='projects'>
           <div className='p1div' ><img  src={require('../Assets/project1.png')} alt='Failed to Load' className='project1'></img><h1 className='project1header'><u>Zahaan.com</u></h1>
           <p id="project1info">Skills Used: HTML, CSS, JavaScript, React, Express, Node.js, MongoDB</p>
           </div>
        </div>
        <div className='thirdscroll'><Link to='section4'smooth={true} ><button className='scrollButton2'><FontAwesomeIcon icon={faAngleDoubleDown} size="2x" className='scrollicon'></FontAwesomeIcon></button></Link></div>
        <div className='social3 '><SocialMedia/> </div> 

    </div>)

}