import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';



import './NavbarStyle.css'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const hendelClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changecolor = () =>{
    if(window.scrollY > 100){
      setColor(true)
    }else{
      setColor(false)
    }
  }

  window.addEventListener("scroll",changecolor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to='/'>
        <h1>Anirban</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li> <Link to='/'>Home</Link></li>
        <li> <Link to='/about'>About</Link></li>
        <li> <Link to='/projects'>Portfolio</Link></li>
        <li> <Link to='/contact'>Contact</Link></li>
      </ul>
      <div className='hamburger' onClick={hendelClick}>
        {click ? ( <FaTimes size={20} style={{color:"#fff"}} />) : (<FaBars size={20} style={{color:"#fff"}} />)}
       
        
        
      </div>
    </div>
  )
}

export default Navbar