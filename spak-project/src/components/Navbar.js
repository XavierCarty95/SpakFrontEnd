import React from 'react'
import {NavLink} from 'react-router-dom'



const Navbar = (props) => {
 
    return(
    <nav>
    <div className = "nav-wrapper red darken-4">
    <NavLink to="/" className="brand-logo" style={{marginLeft: "10px"}}>Springfield Alumni</NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {
         props.token?  <li onClick={props.logout}><NavLink to="/">Logout, {props.user.username}  </NavLink></li> : <li><NavLink to="/login">Sign In</NavLink></li>
        }
        
        { props.token? <li><NavLink to="/agenda">Agenda</NavLink></li> : null} 
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/history">History</NavLink></li>
        <li><NavLink to="/members">Members</NavLink></li>
      </ul>
  </div>
  </nav>
 )
}

export default Navbar