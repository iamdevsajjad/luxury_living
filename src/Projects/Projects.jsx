import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      Image:
        "https://i.ibb.co/tpR0HV3/bernard-hermant-6ft-Zu-O-b64-unsplash-1.png",
      name: "villa on washington Avenue",
      location: "Dhaka, Bangladesh",
    },
    {
      Image: "https://i.ibb.co/hcwhqWt/Mask-Group.png",
      name: "Luxury villa in Rego park",
      location: "Dhaka, Bangladesh",
    },
    {
      Image: "https://i.ibb.co/tMBLp8g/Mask-Group-1.png",
      name: "Gorgeous house",
      location: "Dhaka, Bangladesh",
    },
  ];
  return (
    <div className=" my-28">
      <div className="FullBanner mx-auto container ">
        <div className="texts text-center w-3/5 mx-auto my-5">
          <h5 className="text-xl text-blue-950 font-semibold my-7 ">
            Projects
          </h5>
          <h2 className="text-4xl font-bold mb-20 text-blue-950">
            Discover the latest interior Design available Today.
          </h2>
        </div>
        <div className="projects flex justify-center">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
