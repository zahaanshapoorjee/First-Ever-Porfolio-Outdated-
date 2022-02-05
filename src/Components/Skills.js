import React from 'react'
import { Link } from 'react-scroll/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDoubleUp,faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from './SocialMedia';
export default function SkillList()
{
       return (
        <div className='daddy'>
         <div className='firstscrollup'><Link to='top'smooth={true} ><FontAwesomeIcon icon={faAngleDoubleUp} size="2x" className='firstscrollupicon'></FontAwesomeIcon></Link></div>   
        <h1 className='skillsText'>SKILLS</h1>
        <div className='parentSkillsDivContainer'> 
        {/* flex direction row ^  */}
               {/* items flex direction column */}
               <div className='parentSkillsDiv'>
                     <div className="skillListItems"><i className="devicon-python-plain" id='skillIcons'></i><p className='mySkills'>Python</p></div>
                     <div className="skillListItems"><i className="devicon-html5-plain" id='skillIcons'></i><p className='mySkills'>HTML</p></div>
                     <div className="skillListItems"><i className="devicon-css3-plain" id='skillIcons'></i><p className='mySkills'>CSS</p></div>
                     <div className="skillListItems"><i className="devicon-javascript-plain" id='skillIcons'></i><p className='mySkills'>JavaScript</p></div>
                     <div className="skillListItems"><i className="devicon-react-plain" id='skillIcons'></i><p className='mySkills'>React.js</p></div>
                     <div className="skillListItems"><i className="devicon-java-plain" id='skillIcons'></i><p className='mySkills'>Java</p></div>
                     <div className="skillListItems"><i className="devicon-express-original" id='skillIcons'></i><p className='mySkills'>Express.js</p></div>
                     <div className="skillListItems"><i className="devicon-nodejs-plain" id='skillIcons'></i><p className='mySkills'>Node.js</p></div>
                     <div className="skillListItems"><i className="devicon-mongodb-plain" id='skillIcons'></i><p className='mySkills'>MongoDB</p></div>
                     <div className="skillListItems"><i className="devicon-github-original" id='skillIcons'></i><p className='mySkills'>GitHub</p></div>
                     <div className="skillListItems"><i className="devicon-heroku-original" id='skillIcons'></i><p className='mySkills'>Heroku</p></div>
                     <div className="skillListItems"><i className="devicon-cplusplus-plain" id='skillIcons'></i><p className='mySkills'>C++</p></div>
                     </div> 
         </div>
         <div className='secondscroll'><Link to='section3'smooth={true} ><button className='scrollButton2'><FontAwesomeIcon icon={faAngleDoubleDown} size="2x" className='scrollicon'></FontAwesomeIcon></button></Link>

         </div>
         <div className='skillsNav'><SocialMedia/> </div> 
    </div>
    )
}