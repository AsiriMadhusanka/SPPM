import React from 'react'
import './Footer.css';
import * as AiIcons from 'react-icons/ai'; // https://react-icons.github.io/react-icons/icons?name=ai
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
    
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>

          <div className='footer-link-items'>
            <h3>Company&nbsp;Name</h3>
            <Link to='/login'><AiIcons.AiOutlineLogout />&nbsp; Sign-Up</Link>
            <Link to='/'><AiIcons.AiOutlineHome />&nbsp; Home</Link>
          </div>

          <div className='footer-link-items'>
            <h3>&nbsp;</h3>
            <Link to='/Notice'><AiIcons.AiOutlineBell />&nbsp; Notice</Link>
            <Link to='/AboutUs'><AiIcons.AiOutlinePlusCircle />&nbsp; About Us</Link>
          </div>

          <div className='footer-link-items'>
            <h3>Contact&nbsp;Us</h3>
            <Link to='#'><AiIcons.AiOutlinePhone />&nbsp; +94 11 123 1234</Link>
            <Link to='#'><AiIcons.AiOutlineMail />&nbsp; company@email.lk</Link>
          </div>

          <div className='footer-link-items'>
            <h3>&nbsp;</h3>
            <Link to='#'><AiIcons.AiOutlineEnvironment />&nbsp; Location</Link>
          </div>
        
          <div className='footer-link-items'>
            <h3>Social&nbsp;Media</h3>
            <Link to='#'><AiIcons.AiOutlineInstagram />&nbsp; Instagram</Link>
            <Link to='#'><AiIcons.AiOutlineFacebook />&nbsp; Facebook</Link>
          </div>
          
          <div className='footer-link-items'>
            <h3>&nbsp;</h3>
            <Link to='#'><AiIcons.AiOutlineYoutube />&nbsp; Youtube</Link>
            <Link to='#'><AiIcons.AiFillTwitterSquare />&nbsp; Twitter</Link>
          </div>

        </div>
      </div>

      <h6 style={{color:"#ffff", marginTop:"10px"}}>©  Copyright 2022</h6>
    </div>



    </div>
  )
}
