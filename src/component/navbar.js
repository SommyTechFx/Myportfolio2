import React from 'react'
import {Link, NavLink } from 'react-router-dom'
import "./navbar.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'


function navbar({clicked, isClicked}) {

  const handleClicked = () => {
     isClicked(!clicked);
     
  }
  return (
    <div className='Nav'>
      <ul className='Navbar-wrapper'>
        
        <li className='NavLogo'><Link className= "Link" to= "/">  <img src = {require ('../images/logo3-Photoroom.png')} alt='pic' className='logo'/> </Link></li>

        <li className='NavElement'><NavLink className= "Link" to= "/Home.js">Home</NavLink></li>

        <li className='NavElement'><NavLink className= "Link" to= "/AboutUs.js">About Me</NavLink></li>

        <li className='NavElement'><NavLink className= "Link" to= "/ContactUs.js">Services</NavLink></li>

        <li className='NavElement'><NavLink className= "Link" to= "/Signin.js">Portfolio</NavLink></li>

        {/* <li className='Navbutton'><NavLink className= "Link" to= "/Signup.js"><span>Hire Me</span></NavLink></li> */}
      </ul>
      {!clicked ? (
        <GiHamburgerMenu onClick={handleClicked} className="icon" />
      ) : (
        <ImCross onClick={handleClicked} className="icon" />
      )}
    </div>
  )
}

export default navbar
