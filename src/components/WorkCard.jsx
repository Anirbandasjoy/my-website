import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaEye, FaSourcetree} from 'react-icons/fa'

import "./workCardstyle.css"

const WorkCard = (props) => {

  return (
    <div className="project-card">
   <h4 className="project-title">{props.title}</h4>
    <img  src={props.imgsrc} alt="img" />
   
    <div className="pro-details">
     {/* <p>{props.text}</p> */}

      <div className="pro-btns">
        <NavLink className="btn otherbtn" to={props.view}><FaEye /></NavLink>
        <NavLink className="btn otherbtn" to="facebook.com"><FaSourcetree /></NavLink>
      </div>
    </div>
</div>
    
  )
}

export default WorkCard