import React from 'react'
import ht from "../images/html-5.png";
import css from "../images/css-3.png";
import js from "../images/js.png";
import rc from "../images/reactjs.png";

export default function ProjectCards(props) {
  return (
    <div className="card-programs">
          <div className="clip-art"><img src={props.art} alt="myhealth" /></div>
          <div className="content">
            <h3 className="title">{props.title}</h3>
            <p className ="description">{props.descri}</p>
            <h4 className = "sk-head">Skills</h4>
            <div className="langs">
            
            <img src={ht} alt="html"/>
            <img src={css} alt="html"/>
            <img src={js} alt="html"/>
            <img src={rc} alt="react"/>
            </div>
            <div className = "buttons">
              <button className="btn">View Code</button>
              <button className="btn-visit">Visit</button>
            </div>
          </div>
        </div>
  )
}

ProjectCards.defaultProps = {
  descri: 'description of project',
};