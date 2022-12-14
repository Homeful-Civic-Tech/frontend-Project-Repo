import React from 'react'
import '../CSS/Navbar.css' 
import { Link } from 'react-router-dom'
import Logo from "../IMGs/logo.png"

function Navbar(){
  return (
    
  <nav className="navbar_nav">
    <h1 className='logo'>HomeFul</h1>
    {/* <img src={Logo} alt="" width="200px" height='50px'/> */}
    {/* <Link to="/">{Logo}</Link> */}
    <ul className="nav_list">
      <Link to="/">Home</Link>
      <Link to="/sign-up">Sign-in/Sign-up</Link>
    </ul>
  </nav>
    )
}

export default Navbar 