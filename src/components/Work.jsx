import React from 'react'
// import Img1 from "../img/img1.jpg"
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'
import "./workCardstyle.css"
const Work = () => {

  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              idx={val.id}
              src={val.source}
              all={val}

            />
          )
        })}
      </div>
    </div>

  )
}

export default Work