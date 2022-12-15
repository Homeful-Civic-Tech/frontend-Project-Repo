import React from 'react'
import Logo from "../IMGs/logo.png"
import { Link } from 'react-router-dom'
import '../CSS/Navbar.css' 


function Navbar(){
  let username = localStorage.getItem("username")
  return (
  <nav className="navbar_nav">
     <h1 className='logo'>HomeFul</h1>
    {/* <img src={Logo} alt="" width="200px" height="50px"/> */}
    {/* <Link to="/">{Logo}</Link> */}
    <ul className="nav_list">
      <Link to="/">Home</Link>
      <Link to="/feeds/">Feeds</Link>
      <Link to="/Profile">{username}</Link>
      <Link onClick={()=>{
        localStorage.clear();
      }}to='/'>Log-out</Link>
    </ul>
  </nav>
    )
}

export default Navbar 