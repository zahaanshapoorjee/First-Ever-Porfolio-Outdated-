import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons';
import SocialMedia from './SocialMedia';
export default function AboutMe()
{

    const[AnimState,setAnimState]=useState(false)
    const changer=()=>{
        setAnimState(true)
    }
    useEffect(()=>{
        if(AnimState){
            console.log('EFFECTING')
            document.getElementById('firstmeter').style.animationPlayState='running'
            document.getElementById('firstmeter').style.width='70%'

            document.getElementById('secondmeter').style.animationPlayState='running'
            document.getElementById('secondmeter').style.width='85%'

            document.getElementById('thirdmeter').style.animationPlayState='running'
            document.getElementById('thirdmeter').style.width='75%'
            

            document.getElementById('fourthmeter').style.animationPlayState='running'
            document.getElementById('fourthmeter').style.width='60%'

            document.getElementById('fifthmeter').style.animationPlayState='running'
            document.getElementById('fifthmeter').style.width='55%'

            document.getElementById('sixthmeter').style.animationPlayState='running'
            document.getElementById('sixthmeter').style.width='85%'

            document.getElementById('seventhmeter').style.animationPlayState='running'
            document.getElementById('seventhmeter').style.width='40%'

            setAnimState(false)
            
        }
            
            
    },[AnimState])

const myInfo1 ="Hi! My name is Zahaan Shapoorjee, and I am an aspiring software developer currently studying at Ashoka University."
const myInfo2 = "I love playing football, video games, and listening to music.";
const myInfo3 = "I am interested in Cyber Security, Software Development, and Web Development.";
return (<div className="aboutme-container">
    <div><p className="aboutme">{myInfo1}<br></br>{myInfo2}<br></br>{myInfo3}</p></div>
    <div className='scroll1container'><Link to='section2'smooth={true} ><button onClick={() => changer()}className='scrollButton'><FontAwesomeIcon icon={faAngleDoubleDown} size="2x" className='scrollicon'></FontAwesomeIcon></button></Link></div>
    <div><SocialMedia/> </div> 
    
    
    </div>)
}

