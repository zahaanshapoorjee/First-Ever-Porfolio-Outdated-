import React from 'react'
import { Link } from 'react-scroll/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDoubleUp,faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from './SocialMedia';
export default function SkillList()
{
    const c1style={
    'background-color':'white',
    height: '16.67%', 
    width: '100%',
    position: 'relative',
    'border-radius': '25px',
    'box-shadow': 'inset 0 -1px 1px rgba(255, 255, 255, 0.3)',
    'margin-bottom': '10%',
    top:'3%',
       }
    return (
        <div className='daddy'>
         <div className='firstscrollup'><Link to='top'smooth={true} ><FontAwesomeIcon icon={faAngleDoubleUp} size="2x" className='firstscrollupicon'></FontAwesomeIcon></Link></div>   
        <h1 className='skillsText'>SKILLS</h1>
        <div className='parentSkillsDiv'> 
        {/* flex direction row ^  */}
           <div className='skill'>
               {/* items flex direction column */}
                     <div className="skillListItems"><i className="devicon-python-plain"></i>  Python</div>
                     <div className="skillListItems"><i className="devicon-html5-plain"></i>  HTML</div>
                     <div className="skillListItems"><i className="devicon-css3-plain"></i>  CSS</div>
                     <div className="skillListItems"><i className="devicon-javascript-plain"></i>  JavaScript</div>
                     <div className="skillListItems"><i className="devicon-react-plain"></i>  React</div>
                     <div className="skillListItems"><i className="devicon-java-plain"></i>  Java</div>
                     <div className="skillListItems"><i className="devicon-cplusplus-plain"></i>  C++</div>
           </div>
           <div className='skill'>
               {/* meters flex direction column */}
               <div style={c1style}>
	            <span className='meter1' id="firstmeter"></span>
                </div>
                <div style={c1style}>
	            <span className='meter2' id="secondmeter"></span>
                </div>
                <div style={c1style}>
                <span className='meter3' id="thirdmeter"></span>
                </div>
                <div style={c1style}>
                <span className='meter4' id="fourthmeter"></span>
                </div>
                <div style={c1style}>
                <span className='meter5' id="fifthmeter"></span>
                </div>
                <div style={c1style}>
                <span className='meter6' id="sixthmeter"></span>
                </div>
                <div style={c1style}>
                <span className='meter7' id="seventhmeter"></span>
                </div>
            </div>
            
         </div>
         <div className='secondscroll'><Link to='section3'smooth={true} ><button className='scrollButton2'><FontAwesomeIcon icon={faAngleDoubleDown} size="2x" className='scrollicon'></FontAwesomeIcon></button></Link>

         </div>
         <div><SocialMedia/> </div> 
    </div>
    )
}