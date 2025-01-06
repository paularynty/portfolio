import React from "react";
import { Project, Skill } from "../components";

export const Home = () => {
  return (
    <div>
      <div className="Intro">
        <h1>Paula Rynty</h1>
        <div className="body-text">
          <p>
            From human resources specialist, through copywriting and design, to
            a frontend developer.
          </p>
          <br></br>
          <p>
            Currently juggling programming studies at Hive Helsinki, may be
            spotted crafting or café hopping (or both!) in her spare time.
          </p>
        </div>
      </div>
      <div className="Section-wrapper">
        <h1>Projects</h1>
        <div className="Projects-container">
          <Project
            name="Mikke!"
            description="Kanji app made with React and TypeScript"
          />
          <Project name="To-do list" description="To-do list app" />
          <Project name="So_long" description="2D game made with C" />
        </div>
      </div>
      <div className="Section-wrapper">
        <h1>Skills</h1>
        <div className="Skills-container">
          <Skill
            category="Programming"
            skills={[
              "React",
              "TypeScript",
              "JavaScript",
              "HTML",
              "CSS",
              "C",
              "Git",
              "Jest",
            ]}
          />
          <Skill
            category="Design"
            skills={[
              "Graphic design",
              "Web design",
              "UI/UX",
              "Copywriting",
              "Content creation",
            ]}
          />
          <Skill
            category="Soft skills"
            skills={[
              "Code review",
              "Teamwork",
              "Project management",
              "Time management",
            ]}
          />
        </div>
      </div>
    </div>
  );
};
