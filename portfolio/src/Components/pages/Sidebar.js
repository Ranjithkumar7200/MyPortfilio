import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import '../Css/Sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='home-btn'>
      <Link style={{textDecoration: 'none'}} to={'/'} >
        <div className='home-container'>
       <div className='fa-home'>
       <FontAwesomeIcon className='icons-color' icon={faHome} />
       </div> 
        <div className='details icons-color'>Home</div>
        </div>
       
      </Link>
      </div>
      <div className='user-btn'>
      <Link style={{textDecoration: 'none'}} to={'/about'} >
      <div className='user-container'>
       <div className='fa-user'>
       <FontAwesomeIcon className='icons-color' icon={faUser} />
       </div> 
        <div className='details icons-color'>About</div>
        </div>
      </Link>
      </div>
      <div className='file-btn'>
      <Link style={{textDecoration: 'none'}} to={'/portfilio'}>
      <div className='file-container'>
       <div className='fa-file'>
       <FontAwesomeIcon className='icons-color' icon={faFile} />
       </div> 
        <div className='details icons-color' >Portfilio</div>
        </div>
      </Link>
      </div>
      <div className='message-btn'>
      <Link style={{textDecoration: 'none'}} to={'/contactUs'}>
      <div className='message-container'>
       <div className='fa-message'>
       <FontAwesomeIcon className='icons-color' icon={faMessage} /> 
       </div> 
        <div className='details icons-color'>Contact</div>
        </div>
      </Link>
      </div>
      
      
    </div>
  );
}

export default Sidebar;
