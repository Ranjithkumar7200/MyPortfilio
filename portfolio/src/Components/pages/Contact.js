import React from 'react'
import '../Css/Contact.css'
import {BiLogoFacebook, BiLogoGmail, BiLogoInstagram, BiLogoLinkedin, BiLogoTelegram, BiPhoneCall} from 'react-icons/bi'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x5714vv', 'template_fvhdl1h', form.current, '9aSxgtymOjfZMsNYR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    };
  return (
    <>
      <div className='contact-head'><h1 className='contact-h1'>Get In <span className='icons-color'>Touch</span></h1></div>
    <div className='contact'>
      
      <div className='contact-container'>
        <div className='contact-details'>
          <h3 className='icons-color'>Don't be shy !</h3>
          <p className='contact-desc'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          <div className='contact-mail'>
            <BiLogoGmail className='mail-logo icons-color'/>
            <div>
              <h5>Mail me</h5>
              <p>ranjithkumarb8072@gmail.com</p>
            </div>
          </div>
          <div className='contact-call'>
            <div><BiPhoneCall className='call-logo icons-color'/></div>
            <div>
            <h5>Call me</h5>
            <p>(+91)7200645329</p>
            </div>
          </div>
          <div className='socialmedia'>
            <div className='socialmedia-icons'>
              <a href='https://instagram.com/mr.ranjith_._.0_0?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D' className='icons-color'><BiLogoInstagram className='instagram'/></a>
              <a href='https://www.linkedin.com/in/ranjith-kumar-5b994b267' className='icons-color'><BiLogoLinkedin className='linked-in'/></a>
              <a href='https://www.facebook.com/ranjith.vikki.581' className='icons-color'><BiLogoFacebook className='facebook'/></a>
              <a href='https://t.me/+JcqYahcxIQ9mMDA1' className='icons-color'><BiLogoTelegram className='telegram'/></a>
            </div>
          </div>
        </div>
        <div className='contact-massage'>
          <form className='contact-text-box' ref={form} onSubmit={sendEmail}>
            <div className='inputs'>
            <input type='text' placeholder='Your Name' id='name' name="user_name" required/>
            <input type='email' placeholder='Your Email' id='email' name="user_email" required/>
            <input type='text' placeholder='Your Subject' id='subject' name="subject" required/>
            <textarea type='text' placeholder='Your Message' id='textarea' name="message" required/>
            </div>
            <div className='download-btn border-btn send-btn'>
          
            <button className='download-text' typeof='submit'>
              <p className='do-text btn-txt'>Send</p>
              <p ><BiLogoTelegram className='send-msg btn-icons'/>
              </p>
              </button>
              
        </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact