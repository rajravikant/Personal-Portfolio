import React from 'react'
import cs from '../images/c-sharp.png';
import xm from '../images/xml.png';
import nt from '../images/net.png';
import wn from '../images/windows.png';

export default function ProjectC(props) {
  return (
    <div className="card-programs">
          <div className="clip-art"><img src={props.art} alt="myhealth" /></div>
          <div className="content">
            <h3 className="title">{props.title}</h3>
            <p className ="description">{props.descri}</p>
            <h4 className = "sk-head">Skills</h4>
            <div className="langs">
            
            <img src={cs} alt="cs"/>
            <img src={xm} alt="html"/>
            <img src={nt} alt="react"/>
            <img src={wn} alt="wnds"/>
            </div>
            <div className = "buttons">
              <button className="btn">View Code</button>
              <button className="btn-visit">Visit</button>
            </div>
          </div>
        </div>
  )
}
