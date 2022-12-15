import React from 'react'
import '../CSS/Navbar.css' 
import { Link } from 'react-router-dom'


function NavBarSignUp(){
  return (
    
  <nav className="navbar_nav">
    <h1 className='logo'>HomeFul</h1>
    {/* <img src={Logo} alt="" width="200px" height='50px'/> */}
    {/* <Link to="/">{Logo}</Link> */}
    <ul className="nav_list">
      <Link to="/">Home</Link>

    </ul>
  </nav>
    )
}

export default NavBarSignUp 