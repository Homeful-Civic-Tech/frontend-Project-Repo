import React from 'react'
import '../CSS/Navbar.css' 
import { Link } from 'react-router-dom'
import Logo from "../IMGs/logo.png"

function Navbar(){

  console.log("navbar here")
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