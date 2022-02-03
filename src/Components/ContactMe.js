import React, { useRef,useState } from 'react';
import { Link } from 'react-scroll/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init("user_CvZDaEUr3zVvwuQ85PqYh");

export default function ContactMe(){
  const form = useRef();
  const[info,setinfo]=useState({name:'',email:'',message:''})
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(info)
    emailjs.sendForm('service_traivfp', 'template_8wz0o0k', form.current, 'user_CvZDaEUr3zVvwuQ85PqYh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert('Message Sent Successfully!')
      axios.post()
      setinfo({name:'',email:'',message:''})
      form.current.reset()
  };
  
  const handleNameChange=(e)=>{
    e.persist()
    setinfo((info)=>({
      ...info, name:e.target.value
    }))
  }
  const handleEmailChange=(e)=>{
    e.persist()
    setinfo((info)=>({
      ...info,email:e.target.value
    }))
  }
  const handleMessageChange=(e)=>{
    e.persist()
    setinfo((info)=>({
      ...info,message:e.target.value
    }))
  }

  return (
    <div className='daddy4'>
    <div className='fourthscrollup'><Link to='section3'smooth={true} ><FontAwesomeIcon icon={faAngleDoubleUp} size="2x" className='firstscrollupicon'></FontAwesomeIcon></Link></div>
    <div><h1 className='contactmeText'>CONTACT ME</h1></div> 
    <div>
    <form ref={form} onSubmit={sendEmail} className='contactform'>
    <label>Name</label>
     <input type="text" name="user_name" className='username' value={info.name} onChange={handleNameChange} /><br></br>
     <label>Email</label>
    <input type="email" name="user_email" className='emailid' value={info.email} onChange={handleEmailChange} /><br></br>
    <label>Message</label>
    <textarea name="message" className='messagetome' value={info.message} onChange={handleMessageChange}/>
    <input type="submit" value="Send" className='contact-form-submit-button'/>
    </form>
    </div>
</div>
  );
};