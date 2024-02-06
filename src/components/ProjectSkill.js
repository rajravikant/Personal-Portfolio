import React from "react";

const ProjectSkill_item = (props) => {
  return (
        <>
        {props.data.map((item)=><img src={item} alt="img_here"></img>)}
        </>
  );
};

export default ProjectSkill_item;
