import React from 'react'
import { Link } from 'react-scroll/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons';
import SocialMedia from './SocialMedia';
export default function AboutMe()
{
const myInfo1 ="Hi! My name is Zahaan Shapoorjee, and I am an aspiring software developer currently studying at Ashoka University."
const myInfo2 = "I love playing football, video games, and listening to music.";
const myInfo3 = "I am interested in Cyber Security, Software Development, and Web Development.";
return (<div className="aboutme-container">
    <div><p className="aboutme">{myInfo1}<br></br>{myInfo2}<br></br>{myInfo3}</p></div>
    <div className='scroll1container'><Link to='section2'smooth={true} ><button className='scrollButton'><FontAwesomeIcon icon={faAngleDoubleDown} size="2x" className='scrollicon'></FontAwesomeIcon></button></Link></div>
    <div><SocialMedia/> </div> 
    
    
    </div>)
}

