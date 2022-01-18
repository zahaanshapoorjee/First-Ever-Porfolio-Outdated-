import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faYoutube,
    faLinkedin,
    faInstagram,
    faFacebook} from '@fortawesome/free-brands-svg-icons'
export default function SocialMedia()
{
    return (
        <div className="social-container">
            <div className="nav-bar"></div>
            <div id="socialIcons">
            <a href="https://www.youtube.com/channel/UCcpfcvB3qFEjwVaDA9fxb9A" target="_blank" rel="noreferrer" className='social-youtube'><FontAwesomeIcon icon={faYoutube} size="3x"></FontAwesomeIcon></a>
            <a href="https://www.instagram.com/zahaanxshah" target="_blank" rel="noreferrer" className='social-instagram'><FontAwesomeIcon icon={faInstagram} size="3x"></FontAwesomeIcon></a>
            <a href="https://www.linkedin.com/in/zahaan-shapoorjee-22a465193/" target="_blank" rel="noreferrer" className='social-linkedin'><FontAwesomeIcon icon={faLinkedin} size="3x"></FontAwesomeIcon></a>
            <a href="https://www.facebook.com/zahaan.shapoorjee/" target="_blank" rel="noreferrer" className='social-facebook'><FontAwesomeIcon icon={faFacebook} size="3x"></FontAwesomeIcon></a>
            </div>
        </div>
    )
}