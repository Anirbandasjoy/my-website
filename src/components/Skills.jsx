import React from 'react';
import './CardSkillSection.css';


const skills = [
  {
    name: 'HTML',
    icon: 'fab fa-html5',
    description: 'My Experience in javascripts is Expart'
    
  },
  {
    name: 'CSS',
    icon: 'fab fa-css3-alt',
    description: 'My Experience in CSS3 is Senior'
  },
  {
    name: 'BOOTSTRAP',
    icon: 'fa-brands fa-bootstrap',
    description: 'My ignorance in Bootstrap is Intermediate'
  },
  {
    name: 'Tailwind css',
    icon: 'fab fa-css3-alt',
    description: 'My ignorance in Tailwind css is Intermediate'
  },
  
  {
    name: 'JavaScript',
    icon: 'fa-brands fa-square-js',
    description: 'My Experience in javascripts is Senior.'
  },
  {
    name: 'React',
    icon: 'fab fa-react',
    description: 'My Experience in React is Intermediate.'
  },
  {
    name: 'Node.js',
    icon: 'fa-brands fa-node',
    description: 'My Experience in node.js is Intermediate.'
  },
  {
    name: 'Express.js',
    // icon: 'fa-brands fa-node',
    description: 'My Experience in node.js is Intermediate.'
  },
  {
    name: 'MongoDB Database',
    // icon: 'fa-brands fa-node',
    description: 'My Experience in node.js is Expart.'
  }
];

const CardSkillSection = () => {
  return (
    <div className="card-skill-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className='section-text'>Below are the technologies that I have more or less experience with</p>
        <div className="card-container">
          {skills.map((skill, index) => (
            <div key={index} className="card">
              <div className="icon-container">
                <i className={skill.icon}></i>
              </div>
              <h3 className="card-title">{skill.name}</h3>
              <p className="card-text">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSkillSection;





  

