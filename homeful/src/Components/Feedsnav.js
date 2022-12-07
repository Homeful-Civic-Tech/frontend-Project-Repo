import React from 'react'
import Logo from "../logo.png"
import { Link } from 'react-router-dom'
import '../CSS/Feedsnav.css'


function Navbar(){
  return (
  <nav className="navbar_nav">
    <img src={Logo} alt="" width="100px"/>
    {/* <Link to="/">{Logo}</Link> */}
    <ul className="nav_list">
      <Link to="/">Home</Link>
      <Link to="/">About us</Link>
      <Link to="/sign-up">Sign-in/Sign-up</Link>
    </ul>
  </nav>
    )
}

export default Navbar 