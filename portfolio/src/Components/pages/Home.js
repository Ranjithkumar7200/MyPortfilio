import React from 'react'
import image from '../assests/ranjithphoto.jpg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Css/Home.css'
import { useNavigate } from 'react-router-dom'
function Home() {
  const nav =useNavigate();
  function AboutBtn(){
    nav('/about')
  }
 
  return (
    <div className='home-containers'>
      <div className='photo'>
        <img src={image} alt='Photo' className='border-btn'/>
      </div>
      <div className='profile-details'>
        <div className='profile-name'>
          <h1 className='name'>- I'm RanjithKumar</h1>
          <h1 className='profile-job'>Software developer</h1>
        </div>
        <div className='profile-desc'>
          <p>I am a product-based software developer & front-end developer who strives to create user-friendly experiences. It is a pleasure for me to develop responsive web applications. My goal is to build great software that will make people's lives better. I specialize in helping product growth by analyzing user metrics.</p>
        </div>
        <div className='aboutme-btn border-btn'>
          <button className='about-text' onClick={AboutBtn}><p className='ab-text btn-txt'>about me</p><p ><FontAwesomeIcon className='arrow btn-icons' icon={faArrowRight}/></p></button>
        </div>
      </div>
    </div>
  )
}

export default Home