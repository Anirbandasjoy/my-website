import React from 'react'
import { Link } from "react-router-dom";







import img1 from "../img/img1.jpg"
import img4 from "../img/img4.jpg"




import "./AboutContentstyle.css";


const AboutContent = () => {
  return (
    <div>
        <div className="about">
            <div className="left">
                <h1>who i am </h1>
                <p>I am a front end web developer. I love JavaScript so it's only because of JavaScript that I've come this far. Connect with me via social media below or fill out the contact form!</p>
                <Link to="/contact">
                    <button className="btn">CONTACT</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={img1} className="img" alt="img" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={img4} className="img" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent