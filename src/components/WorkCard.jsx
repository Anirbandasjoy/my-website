import React from 'react'
import { Link, NavLink } from 'react-router-dom'


import "./workCardstyle.css"

const WorkCard = (props) => {

  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="img" />
      <Link to={props.view} >
        <button className='workbtn'>Live demo</button>
      </Link>
    </div>

  )
}

export default WorkCard