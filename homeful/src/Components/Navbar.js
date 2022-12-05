import React from 'react'
import '../CSS/Navbar.css' 
import { Link } from 'react-router-dom'

function Navbar(){
  return (
  <nav className="navbar_nav">
    <Link to="/">logo</Link>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/">About us</Link>
      <Link to="/sign-up">Sign-in/Sign-up</Link>
    </ul>
  </nav>
    )
}

export default Navbar 