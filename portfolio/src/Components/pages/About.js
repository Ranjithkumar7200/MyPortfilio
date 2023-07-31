import React from 'react'
import '../Css/About.css'
import resumepdf from '../assests/ranjithresume.pdf'
import { faDownload} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{DiMysql,DiBitbucket}from 'react-icons/di'
import { BiLogoCss3, BiLogoGit, BiLogoGithub, BiLogoHtml5, BiLogoJava, BiLogoJavascript, BiLogoReact, BiLogoRedux, BiLogoSpringBoot } from "react-icons/bi";
function About() {
  return (
    <>
    <div className='about-container'>
      <h1>About <span className='icons-color'>Me</span></h1>
      <div className='personal-info'>
      <h3>Personal Info</h3>
        <div className='personal-details'>
          <ul>
          
            <li>Name : <b>B RanjithKumar</b></li>
            <li>Freelancer : <b>Available</b></li>
            <li>State : <b>Tamilnadu</b></li>
            <li>Location : <b>Chennai</b></li>
          </ul>
          <ul>
            <li>age : <b>22</b></li>
            <li>Nationality : <b>India</b></li>
            <li>Mobile No. : <b>(+91)7200645329</b></li>
            <li>Languages : <b>Tamil,Telugu,English</b></li>
          </ul>
        
        </div>
        <div className='download-btn border-btn'>
          <a href={resumepdf} download="RanjithResume">
            <button className='download-text '>
              <p className='do-text btn-txt'>DownloadResume</p>
              <p ><FontAwesomeIcon className='download-icon btn-icons' icon={faDownload}/>
              </p>
              </button>
              </a>
        </div>
        <div className='my-skills'>
          <h2>My skills</h2>
          <div className='skill-icons'>
          <BiLogoHtml5 className='icons-color html program'/>
          <BiLogoCss3 className='icons-color css program'/>
          <BiLogoJavascript className='icons-color js program'/>
          <BiLogoReact className='icons-color react program'/>
          <BiLogoRedux className='icons-color redux program'/>
          <BiLogoGithub className='icons-color github program'/>
          <BiLogoGit className='icons-color git program'/>
          <DiBitbucket className='icons-color bigbucket program'/>
          <BiLogoJava className='icons-color java program'/>
          <BiLogoSpringBoot className='icons-color springboot program'/>
          <DiMysql className='icons-color mysql program'/>
          </div>
          
        </div>
        <h2>Internship & Education</h2>
        <div className='education'>
            <div className='intern'>
             <h4 className='btn-icons border-btn'>2023 JULY - 2023 SEP</h4>
             <p className='border-btn'><b>Software Trainee - </b>Ablest Technology</p>
             <p>Addressed and fixed complex bugs.Implemented and updated application modules under the direction of Senior Software Developers.Worked at an independent level,while also serving as an effective and enthusiastic collaborator.Developed complex features routinely.</p>
           </div>
            <div className='intern'>
              <h4 className='btn-icons border-btn'>2018- 2022</h4>
               <p className='border-btn'><b>Mechanical Engineering - </b>Anna University</p>
              <p>As I strongly learned the concepts of perform a full lifecycle product development (design, develop, test prototypes, manufacture and implement) Design systems and components that meet needs and requirements.Produce outline designs.Conduct experiments methodically, analyse data and interpret results.Test and evaluate theoretical designs.</p>
            </div>
           <div className='intern'>
              <h4 className='btn-icons border-btn'>2017- 2018</h4>
              <p className='border-btn'><b>HSC Board - </b>GOVT. HR SEC School</p>
              <p>I have strongly learned MS-Excel,MS-Power-point & HTML basics in my school.</p>
            </div>
         </div>
      </div>
    </div>
    </>
    
  )
}

export default About