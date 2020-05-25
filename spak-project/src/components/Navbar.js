import React from 'react'
import {NavLink} from 'react-router-dom'



const Navbar = () => {
 
    return(
    <nav>
    <div class = "nav-wrapper red darken-4">
    <NavLink to="/" class="brand-logo">Springfield Alumni</NavLink>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
         <li><NavLink to="/login">Sign In</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/history">History</NavLink></li>
        <li><NavLink to="/members">Members</NavLink></li>
      </ul>
  </div>
  </nav>
 )
}

export default Navbar