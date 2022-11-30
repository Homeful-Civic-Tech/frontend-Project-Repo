import React from 'react'
import './Navbar.css' 

function Navbar(){
  return (
  <nav className="navbar_nav">
    <a href="#">logo</a>
    <ul>
      <a href="#">Home</a>
      <a href="#">About us</a>
      <a href="#">Signin/signup</a>
    </ul>
  </nav>
    )
}

export default Navbar 