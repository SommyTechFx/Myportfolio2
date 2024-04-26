import React from 'react'
import './menu.css'
import { NavLink } from 'react-router-dom'
function menu() {
  return (
    <div className='Navbars'>
        <ul className='Navbar-wrapper'>
           <li className='Navbar-Element'> <NavLink className= 'Link' to = '/Home.js'> Home</NavLink></li>

           <li className='Navbar-Element'> <NavLink className= 'Link' to = '/Aboutus.js'>About Me </NavLink></li>

           <li className='Navbar-Element'> <NavLink className= 'Link' to = '/ContactUs.js'> Services</NavLink></li>

           <li className='Navbar-Element'> <NavLink className= 'Link' to = '/Signin.js'>Portfolio </NavLink></li>

           <li className='NavButton'> <NavLink className= 'Linkbtn' to = '/Signup.js'> Hire Me</NavLink></li>
        </ul>
      
    </div>
  )
}

export default menu
