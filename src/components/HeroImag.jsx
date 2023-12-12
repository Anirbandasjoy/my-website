import React from 'react';
// import resume from "../../public/resume/resume.pdf"

// import myImg from '../img/anirban.jpg';
import myImg2 from '../../public/anirban.jpg';
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
          <img className='anirban' src={myImg2} alt="myImg" />
          <p>HI, I'AM ANIRBAN DAS JOY.</p>
        </div>

        <h1>Front-end React Developer</h1>
        <div >
          {/* <Link className='btn' to='/projects'>download_cv</Link> */}
          <a href='https://drive.google.com/uc?export=download&id=1uGTWWhW_VD4I8lwEUauJHw6aQPha_Rx0' className='btn btn-light' download>download_resume</a>
        </div>


      </div>
    </div>
  )
}

export default HeroImag