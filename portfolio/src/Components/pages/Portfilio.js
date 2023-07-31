import React from 'react'
import '../Css/Portfolio.css'
import atm from '../assests/atm.jpg'
import student from '../assests/student.png'
import ecommerce from '../assests/ecommerce.jpg'
import todo from '../assests/todo.jpg'
import tour from '../assests/tour.jpg'
import mywebsite from '../assests/portfilio.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
function Portfilio() {
  const open1 =()=>{
    let image=document.querySelectorAll('.image-1');
    let homeIcons=document.querySelectorAll('.sidebar');
  
   
    homeIcons.forEach(homeHide =>{
      homeHide.style.display = "none";
    })
    image.forEach(image => {
      image.style.display = 'flex';
  });
  }
  const close1 =()=>{
    let image=document.querySelectorAll('.image-1');
    let homeIcons=document.querySelectorAll('.sidebar');
    
    
    homeIcons.forEach(homeHide =>{
      homeHide.style.display = "flex";
    })
    image.forEach(image => {
      image.style.display = 'none';
  });
  }
  const open2 =()=>{
    let image=document.querySelectorAll('.image-2');
    let homeIcons=document.querySelectorAll('.sidebar');
    homeIcons.forEach(homeHide =>{
      homeHide.style.display = "none";
    })
    image.forEach(image => {
      image.style.display = 'flex';
  });
  }
  const close2 =()=>{
    let image=document.querySelectorAll('.image-2');
    let homeIcons=document.querySelectorAll('.sidebar');
    homeIcons.forEach(homeHide =>{
      homeHide.style.display = "flex";
    })
    image.forEach(image => {
      image.style.display = 'none';
  });
  }
  const open3 =()=>{
    let image=document.querySelectorAll('.image-3');
    let homeIcons=document.querySelectorAll('.sidebar');
    homeIcons.forEach(homeHide =>{
      homeHide.style.display = "none";
    })
    image.forEach(image => {
      image.style.display = 'flex';
  });
  }
  const close3 =()=>{
    let image=document.querySelectorAll('.image-3');
    let homeIcons=document.querySelectorAll('.sidebar');
    homeIcons.forEach(homeHide =>{
      homeHide.style.display = "flex";
    })
    image.forEach(image => {
      image.style.display = 'none';
  });
  }
  const open4 =()=>{
    let image=document.querySelectorAll('.image-4');
    let homeIcons=document.querySelectorAll('.sidebar');
    homeIcons.forEach(homeHide =>{
      homeHide.style.display = "none";
    })
    image.forEach(image => {
      image.style.display = 'flex';
  });
  }
  const close4 =()=>{
    let image=document.querySelectorAll('.image-4');
    let homeIcons=document.querySelectorAll('.sidebar');
    homeIcons.forEach(homeHide =>{
      homeHide.style.display = "flex";
    })
    image.forEach(image => {
      image.style.display = 'none';
  });
  }
  const open5 =()=>{
    let image=document.querySelectorAll('.image-5');
    let homeIcons=document.querySelectorAll('.sidebar');
    homeIcons.forEach(homeHide =>{
      homeHide.style.display = "none";
    })
    image.forEach(image => {
      image.style.display = 'flex';
  });
  }
  const close5 =()=>{
    let image=document.querySelectorAll('.image-5');
    let homeIcons=document.querySelectorAll('.sidebar');
    homeIcons.forEach(homeHide =>{
      homeHide.style.display = "flex";
    })
    image.forEach(image => {
      image.style.display = 'none';
  });
  }
  const open6 =()=>{
    let image=document.querySelectorAll('.image-6');
    let homeIcons=document.querySelectorAll('.sidebar');
    homeIcons.forEach(homeHide =>{
      homeHide.style.display = "none";
    })
    image.forEach(image => {
      image.style.display = 'flex';
  });
  }
  const close6 =()=>{
    let image=document.querySelectorAll('.image-6');
    let homeIcons=document.querySelectorAll('.sidebar');
    homeIcons.forEach(homeHide =>{
      homeHide.style.display = "flex";
    })
    image.forEach(image => {
      image.style.display = 'none';
  });
  }
  return (
    <>
    <div className='portfilio-container'>
      <div className='portfilio'>
        <h1 className='icons-color'>My Portfilio</h1>
      </div>
      <div className='projects'>
        <img src={atm} alt='atm' className='project-img' onClick={open1}/>
        <img src={student} alt='atm' className='project-img' onClick={open2}/>
        <img src={ecommerce} alt='atm' className='project-img' onClick={open3}/>
        <img src={todo} alt='atm' className='project-img' onClick={open4}/>
        <img src={tour} alt='atm' className='project-img' onClick={open5}/>
        <img src={mywebsite} alt='atm' className='project-img' onClick={open6}/>
      </div>
      <div className='image image-1'>
          <div className='project-view border-btn'>
            <div className='project-view-details'>
               <h3 className='icons-color project-name'>MINI ATM</h3>
               <img src={atm} alt='atm' className='project-img res-img'/>
               <h4 className='icons-color languages'>Languages Used</h4>
               <ul>
                <li>Java</li>
                <li>Jsp</li>
                <li>MY Sql</li>
                <li>Jdbc</li>
                <li>Sevlets</li>
               </ul>
            </div>
            
            <FontAwesomeIcon icon={faXmark} className='xmark-color' onClick={close1}/>
          </div>
        </div>
        <div className='image image-2'>
          <div className='project-view border-btn'>
            <div className='project-view-details'>
               <h3 className='icons-color project-name'>Stuedent Management</h3>
               <img src={student} alt='atm' className='project-img res-img'/>
               <h4 className='icons-color languages'>Languages Used</h4>
               <ul>
                <li>Java</li>
                <li>SpringBoot</li>
                <li>MY Sql</li>
                <li>ReactJs</li>
               </ul>
            </div>
            
            <FontAwesomeIcon icon={faXmark} className='xmark-color' onClick={close2}/>
          </div>
        </div>
        <div className='image image-3'>
          <div className='project-view border-btn'>
            <div className='project-view-details'>
               <h3 className='icons-color project-name'>E-Commerce Websites</h3>
               <img src={ecommerce} alt='atm' className='project-img res-img'/>
               <h4 className='icons-color languages'>Languages Used</h4>
               <ul>
                <li>Java</li>
                <li>SpringBoot</li>
                <li>MY Sql</li>
                <li>ReactJs</li>
               </ul>
            </div>
            
            <FontAwesomeIcon icon={faXmark} className='xmark-color' onClick={close3}/>
          </div>
        </div>
        <div className='image image-4'>
          <div className='project-view border-btn'>
            <div className='project-view-details'>
               <h3 className='icons-color project-name'>TO-DO List</h3>
               <img src={todo} alt='atm' className='project-img res-img'/>
               <h4 className='icons-color languages'>Languages Used</h4>
               <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Java Script</li>
               </ul>
            </div>
            
            <FontAwesomeIcon icon={faXmark} className='xmark-color' onClick={close4}/>
          </div>
        </div>
        <div className='image image-5'>
          <div className='project-view border-btn'>
            <div className='project-view-details'>
               <h3 className='icons-color project-name'>Tour Website</h3>
               <img src={tour} alt='atm' className='project-img res-img'/>
               <h4 className='icons-color languages'>Languages Used</h4>
               <ul>
               <li>HTML5</li>
                <li>CSS3</li>
                <li>Java Script</li>
               </ul>
            </div>
            
            <FontAwesomeIcon icon={faXmark} className='xmark-color' onClick={close5}/>
          </div>
        </div>
        <div className='image image-6'>
          <div className='project-view border-btn'>
            <div className='project-view-details'>
               <h3 className='icons-color project-name'>MY Website</h3>
               <img src={mywebsite} alt='atm' className='project-img res-img'/>
               <h4 className='icons-color languages'>Languages Used</h4>
               <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Java Script</li>
                <li>ReactJs</li>
               </ul>
            </div>
            
            <FontAwesomeIcon icon={faXmark} className='xmark-color' onClick={close6}/>
          </div>
        </div>
    </div>
    </>
  )
}

export default Portfilio