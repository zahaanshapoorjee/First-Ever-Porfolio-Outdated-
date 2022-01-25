import React, { useRef } from 'react';
import { Link } from 'react-scroll/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init("user_CvZDaEUr3zVvwuQ85PqYh");

export default function ContactMe(){
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_traivfp', 'template_8wz0o0k', form.current, 'user_CvZDaEUr3zVvwuQ85PqYh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert('Message Sent Successfully!')
      form.current.reset()
  };

  return (
    <div className='daddy4'>
    <div className='fourthscrollup'><Link to='section3'smooth={true} ><FontAwesomeIcon icon={faAngleDoubleUp} size="2x" className='firstscrollupicon'></FontAwesomeIcon></Link></div>
    <div><h1 className='contactmeText'>CONTACT ME</h1></div> 
    <div>
    <form ref={form} onSubmit={sendEmail} className='contactform'>
    <label>Name</label>
     <input type="text" name="user_name" className='username'/><br></br>
     <label>Email</label>
    <input type="email" name="user_email" className='emailid' /><br></br>
    <label>Message</label>
    <textarea name="message" className='messagetome' />
    <input type="submit" value="Send" className='contact-form-submit-button'/>
    </form>
    </div>
</div>
  );
};