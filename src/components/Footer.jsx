import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitch } from "react-icons/fa";
import "./footerStyle.css";
const Footer = () => {
  return (
    <div>
         <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight : "2rem"}}/>
                    <div>
                    <p>Deari, Sylhet</p>
                    <p>Bangladesh</p>
                  </div>
                </div>
                <div className="phone">
                   <h4> <FaPhone size={20} style={{color:"#fff",marginRight : "2rem"}}/>
                     +8801319429522</h4>
                </div>
                <div className="email">
                   <h4> <FaMailBulk size={20} style={{color:"#fff",marginRight : "2rem"}}/>
                    joy600508@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About  Me</h4>
                <p>I am a front end web developer. I love JavaScript so it's only because of JavaScript that I've come this far. Connect with me via social media below or fill out the contact form!</p>
                <div className="social">
               <a target="_blank" href="https://www.facebook.com/anirban.dasjoy/" rel="noreferrer" > <FaFacebook size={30} style={{color:"#fff",marginRight : "1rem"}}/></a>
                <FaTwitch size={30} style={{color:"#fff",marginRight : "1rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff",marginRight : "1rem"}}/>
                </div>
            </div>

        </div>
        

        
    </div>
    <p style={{textAlign : "center", fontSize : ".7rem",marginBottom : ".7rem",marginTop : ".7rem", color: "#a3a1a1",lineHeight : "200%"}}>CopyRight by Anirban das joy @2023</p>
    </div>
    
  )
}

export default Footer