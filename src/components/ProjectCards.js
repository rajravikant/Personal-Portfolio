import React from 'react'
import ProjectSkill from './ProjectSkill';


export default function ProjectCards(props) {

  const viewCodeHandler = ()=>{
    
  }
  return (
    <div className="card-programs">
          <div className="clip-art"><img src={props.dt.art} alt="myhealth" /></div>
          <div className="content">
            <h3 className="title">{props.dt.title}</h3>
            <p className ="description">{props.dt.description}</p>
            <h4 className = "sk-head">Skills</h4>
            <div className="langs">
            <ProjectSkill data = {props.dt.skills}/>
            </div>
            <div className = "buttons">
              <button className="btn"><a href={props.dt.repo} target="_blank" rel="noopener noreferrer">View Code
</a></button>
              <button className="btn-visit"><a href={props.dt.website} target="_blank" rel="noopener noreferrer">Visit
</a></button>
            </div>
          </div>
        </div>
  )
}

