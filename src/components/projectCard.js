import React from "react";

const ProjectCard = props => {
  return (
    <div>
        <h2 className="projectName">{props["Project Name"]}</h2>
        <ul>
          <li>Type of Project: {props["Type of Project"]}</li>
          <li>Stage of Project: {props["What stage is your project in today?"]}</li>
          <li>Description: {props["Longer Description"]}</li>
        </ul>
    </div>
  );
};

export default ProjectCard;