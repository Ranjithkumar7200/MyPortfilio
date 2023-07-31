import React from 'react'
import { faCog, faXmark} from '@fortawesome/free-solid-svg-icons'
import { faMoon ,faDroplet} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Components/Css/Navbar.css'
function Navbar() {
  function back(){
    let text=document.querySelectorAll('.btn-txt');
    if(document.body.style.background ==='black'){
      document.body.style.background='blanchedalmond';
      document.body.style.color='black';
      text.forEach(text => {
        text.style.color = 'black';
    });
    }else{
      document.body.style.background='black';
      document.body.style.color='white';
      text.forEach(text => {
        text.style.color = 'white';
    });
    }
  }
  function colorOpen(){
    let setting=document.querySelector(".fa-cog");
    let back=document.querySelector(".fa-moon");
    let color=document.querySelector(".colors");
    setting.style.left="-50px";
    back.style.left="-50px";
    color.style.display='block'
    
  }
  function cancelColor(){
    let setting=document.querySelector(".fa-cog");
    let back=document.querySelector(".fa-moon");
    let color=document.querySelector(".colors");
    setting.style.left="0";
    back.style.left="0";
    color.style.display='none'
  }
  const yellow=()=>{
    console.log("yellow called");
    let icons = document.querySelectorAll(".icons-color");
    let arrow=document.querySelectorAll('.btn-icons');
    let border=document.querySelectorAll('.border-btn');
    let color=document.querySelector('.colors');
    
    color.style.border="1px solid yellow";
    icons.forEach(icon => {
        icon.style.color = 'yellow';
    });
  arrow.forEach(arrow => {
      arrow.style.backgroundColor='yellow';
      arrow.style.color='black'
  });
  border.forEach(border => {
    border.style.border='1px solid yellow';
});

}
function blue() {
  let icons = document.querySelectorAll(".icons-color");
  let arrow=document.querySelectorAll('.btn-icons');
    let border=document.querySelectorAll('.border-btn');
    let color=document.querySelector('.colors');
    
    color.style.border="2px solid blue"
  icons.forEach(icon => {
      icon.style.color = 'blue';
  });
  arrow.forEach(arrow => {
    arrow.style.backgroundColor='blue';
    arrow.style.color='white'
});
border.forEach(border => {
  border.style.border='1px solid blue';
});
  
}
function red() {
  let icons = document.querySelectorAll(".icons-color");
  let arrow=document.querySelectorAll('.btn-icons');
    let border=document.querySelectorAll('.border-btn');
    let color=document.querySelector('.colors');
    
    color.style.border="2px solid red"
  icons.forEach(icon => {
      icon.style.color = 'red';
  });
  arrow.forEach(arrow => {
    arrow.style.backgroundColor='red';
    arrow.style.color='white'
});
border.forEach(border => {
  border.style.border='1px solid red';
  border.style.hover="backgroundColor=red";
});
}
function skyblue() {
  let icons = document.querySelectorAll(".icons-color");
  let arrow=document.querySelectorAll('.btn-icons');
    let border=document.querySelectorAll('.border-btn');
    let color=document.querySelector('.colors');
    
    color.style.border="2px solid skyblue"
  icons.forEach(icon => {
      icon.style.color = 'skyBlue';
  });
  arrow.forEach(arrow => {
    arrow.style.backgroundColor='skyBlue';
    arrow.style.color='black'
});
border.forEach(border => {
  border.style.border='1px solid skyBlue';
});
}
function violet() {
  let icons = document.querySelectorAll(".icons-color");
  let arrow=document.querySelectorAll('.btn-icons');
    let border=document.querySelectorAll('.border-btn');
    let color=document.querySelector('.colors');
    
    color.style.border="2px solid violet"
  icons.forEach(icon => {
      icon.style.color = 'violet';
  });
  arrow.forEach(arrow => {
    arrow.style.backgroundColor='violet';
    arrow.style.color='black'
});
border.forEach(border => {
  border.style.border='1px solid violet';
});
}
function green() {
  let icons = document.querySelectorAll(".icons-color");
  let arrow=document.querySelectorAll('.btn-icons');
    let border=document.querySelectorAll('.border-btn');
    let color=document.querySelector('.colors');
    
    color.style.border="2px solid rgb(30, 231, 30)"
  icons.forEach(icon => {
      icon.style.color = 'rgb(30, 231, 30)';
  });
  arrow.forEach(arrow => {
    arrow.style.backgroundColor='rgb(30, 231, 30)';
    arrow.style.color='white'
});
border.forEach(border => {
  border.style.border='1px solid rgb(30, 231, 30)';
});
}

function darkmagenta() {
  let icons = document.querySelectorAll(".icons-color");
  let arrow=document.querySelectorAll('.btn-icons');
    let border=document.querySelectorAll('.border-btn');
    let color=document.querySelector('.colors');
    
    color.style.border="2px solid darkmagenta"
  icons.forEach(icon => {
      icon.style.color = 'darkmagenta';
  });
  arrow.forEach(arrow => {
    arrow.style.backgroundColor='darkmagenta';
    arrow.style.color='white'
});
border.forEach(border => {
  border.style.border='1px solid darkmagenta';
});
}
function lightslategrey() {
  let icons = document.querySelectorAll(".icons-color");
  let arrow=document.querySelectorAll('.btn-icons');
    let border=document.querySelectorAll('.border-btn');
    let color=document.querySelector('.colors');
    
    color.style.border="2px solid lightslategrey"
  icons.forEach(icon => {
      icon.style.color = 'lightslategrey';
  });
  arrow.forEach(arrow => {
    arrow.style.backgroundColor='lightslategrey';
    arrow.style.color='white'
});
border.forEach(border => {
  border.style.border='1px solid lightslategrey';
});
}
  return (
    <div className='navbar'>
      <div className='colors'>
        <div className='color-head'>
          <h4>Style</h4>
          <h4><FontAwesomeIcon className='color-cancel xmark-color' icon={faXmark} onClick={cancelColor}/></h4>
          
        </div>
       <p className='line'>_____________________</p> 
        <div className='color-options'>
          <p><FontAwesomeIcon className='color-drop yellow' icon={faDroplet} onClick={yellow}/></p>
          <p><FontAwesomeIcon className='color-drop blue' icon={faDroplet} onClick={blue}/></p>
          <p><FontAwesomeIcon className='color-drop red ' icon={faDroplet} onClick={red}/></p>
          <p><FontAwesomeIcon className='color-drop skyblue' icon={faDroplet} onClick={skyblue}/></p>
          <p><FontAwesomeIcon className='color-drop violet' icon={faDroplet} onClick={violet}/></p>
          <p><FontAwesomeIcon className='color-drop green' icon={faDroplet} onClick={green}/></p>
          <p><FontAwesomeIcon className='color-drop darkmagenta' icon={faDroplet} onClick={darkmagenta}/></p>
          <p><FontAwesomeIcon className='color-drop lightslategrey' icon={faDroplet} onClick={lightslategrey}/></p>
        </div>
      </div>
      <FontAwesomeIcon className='fa-cog icons-color' icon={faCog} onClick={colorOpen}/>
      <FontAwesomeIcon className='fa-moon icons-color' icon={faMoon} onClick={back}/>
    </div>
  )
}

export default Navbar