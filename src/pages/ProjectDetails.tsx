import React from "react";
import { useParams } from "react-router-dom";

export const ProjectDetails = () => {
  const { projectName } = useParams<{ projectName: string }>();

  const projects = {
    "mikke!": {
      name: "Mikke!",
      description: "Kanji app made with React and TypeScript.",
      details: "More details about Mikke! go here.",
    },
    "to-do-list": {
      name: "To-do List",
      description: "To-do list app.",
      details: "More details about the To-do List app go here.",
    },
    so_long: {
      name: "So_long",
      description: "2D game made with C.",
      details: "More details about So_long go here.",
    },
  };

  const project = projects[projectName as keyof typeof projects];

  if (!project) {
    return <h1>Could not find project.</h1>;
  }
  return (
    <div>
      <div className="Intro">
        <h1>{project.name}</h1>
        <div className="body-text">
          <p>{project.description}</p>
          <br></br>
          <p>{project.details}</p>
        </div>
      </div>
    </div>
  );
};
