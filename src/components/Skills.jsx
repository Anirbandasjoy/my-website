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
    description: 'My Experience in javascripts is Junior.'
  },
  {
    name: 'React',
    icon: 'fab fa-react',
    description: 'My Experience in React is Intermediate.'
  },
  {
    name: 'Node.js',
    icon: 'fa-brands fa-node',
    description: 'My Experience in node.js is Junior.'
  },
  {
    name: 'Express.js',
    icon: 'fab fa-node-js',
    description: 'My Experience in Express.js is Junior.'
  },
  {
    name: 'MongoDB',
    icon: 'fab fa-envira',
    description: 'My Experience in MongoDB is Junior.'
  },
  {
    name: 'Figma',
    icon: 'fab fa-figma',
    description: 'My Experience in Figma is Junior.'
  }
];

const CardSkillSection = () => {
  return (
    <div>
      <div className='heading-card'>
        <h1>My Skills</h1>
        <p>Below are the technologies that I have more or less experience with</p>
        <p></p>
      </div>
      <div className='card-container'>

        {
          skills.map(skill => {
            return <div className='card-body'>
              <div className=''>
                <div>
                  <h1 className='card-heading'>{skill.name}</h1>
                </div>
                <div>
                  <h2 >{skill.description}</h2>
                </div>
              </div>
              <div>
                <i className={`icon ${skill.icon}`}></i>
              </div>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default CardSkillSection;







