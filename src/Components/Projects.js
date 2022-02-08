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
           <div className='pdiv' ><img  src={require('../Assets/project1.png')} alt='Failed to Load' className='project'></img><h1 className='projectheader'><u>Portfolio Website</u></h1>
           <p id="projectinfo">Skills Used: React.js, Express.js, Node.js, MongoDB</p>
           <p id="projectinfo">Hosted on: <a className='link' href='https://zahaan.netlify.app/'>https://zahaan.netlify.app/</a></p>
           </div>
           <div className='pdiv' ><img  src={require('../Assets/project2.png')} alt='Failed to Load' className='project'></img><h1 className='projectheader'><u>Online Chatroom App</u></h1>
           <p id="projectinfo">Skills Used: React.js, Express.js, Node.js, Socket.IO</p>
           <p id="projectinfo">Hosted on: <a className='link' href='https://zahaanshapoorjee-chat-app.netlify.app/'>https://zahaanshapoorjee-chat-app.netlify.app/</a></p>
           </div>
        </div>
        <div className='thirdscroll'><Link to='section4'smooth={true} ><button className='scrollButton2'><FontAwesomeIcon icon={faAngleDoubleDown} size="2x" className='scrollicon'></FontAwesomeIcon></button></Link></div>
        <div className='social3 '><SocialMedia/> </div> 

    </div>)

}