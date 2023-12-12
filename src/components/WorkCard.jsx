import React from 'react'
import { Link, NavLink } from 'react-router-dom'


import "./workCardstyle.css"

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="img" />
      <div className='projectCard-body'>
        <div className='projecttext'>
          <h2>{props.title}</h2>
          <p>{props.text.slice(0, 120)} <Link to={`/project-details/${props.idx}`} state={props.all} className='read'>Read More</Link></p>
        </div>
        <div className='buttonGroup'>
          <div className=''>
            <Link to={props.view} >
              <button className='workbtn '>Preview</button>
            </Link>
          </div>
          <div className='div2'>
            <Link to={props.src} >
              <button className='workbtn hello'>Source</button>
            </Link>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>

  )
}

export default WorkCard