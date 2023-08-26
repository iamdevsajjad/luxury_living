import React from "react";
import { MdLocationPin } from "react-icons/md";

const ProjectCard = ({ project }) => {
  return (
    <div className=" text-blue-950 p-5 ">
      <img className="h-80 w-80 " src={project.Image} alt="" />
      <h2 className="text-center text-2xl font-bold">{project.name}</h2>
      <p className="flex items-center justify-center text-xl my-2 text-black">
        <div className="icon text-blue-950">
          <MdLocationPin />
        </div>
        {project.location}
      </p>
    </div>
  );
};

export default ProjectCard;
