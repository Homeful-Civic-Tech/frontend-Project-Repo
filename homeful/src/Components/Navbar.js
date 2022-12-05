import React from 'react'
<<<<<<< HEAD
import './Navbar.css' 
=======
import '../CSS/Navbar.css' 
import { Link } from 'react-router-dom'
>>>>>>> 9ebc9438deb62bccf8b6cde7eca476e2c3ac7b84

function Navbar(){
  return (
  <nav className="navbar_nav">
<<<<<<< HEAD
    <a href="#">logo</a>
    <ul>
      <a href="#">Home</a>
      <a href="#">About us</a>
      <a href="#">Signin/signup</a>
=======
    <Link to="/">logo</Link>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/">About us</Link>
      <Link to="/sign-up">Sign-in/Sign-up</Link>
>>>>>>> 9ebc9438deb62bccf8b6cde7eca476e2c3ac7b84
    </ul>
  </nav>
    )
}

export default Navbar 