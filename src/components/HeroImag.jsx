import React from 'react';
import { Link } from 'react-router-dom';

import myImg from '../img/anirban.jpg';
import IntroImg from '../img/bg.jpg';

import "./HeroImgstyle.css";

const HeroImag = () => {
  return (
    <div className="hero">

      <div className="mask">
        <img className="into-img" src={IntroImg} alt="intoImg" />
      </div>
      <div className="content">
        <div className="my-img">
          <img className='anirban' src={myImg} alt="myImg" />
          <p>HI, I'AM ANIRBAN DAS JOY.</p>
        </div>

        <h1>Front-end React Developer</h1>
        <div >
          {/* <Link className='btn' to='/projects'>download_cv</Link> */}
           <Link className='btn btn-light' to='/contact'>download_cv</Link>
        </div>


      </div>
    </div>
  )
}

export default HeroImag