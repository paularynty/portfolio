// import { useRef } from "react";
import { Project, Skill } from "../components";
import so_long from "../styles/images/so_long.png";
import mikke from "../styles/images/mikke.png";

export const Home = () => {
  return (
    <div>
      <div className="Intro">
        <h1>Paula Rynty</h1>
        <div className="body-text">
          <p>
            From human resources specialist, through copywriting and design, to
            a budding frontend developer.
            {/* <button
              onClick={() =>
                contact.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
            </button> */}
          </p>
          <br></br>
          <p>
            Full-time student at{" "}
            <a className="link" href="https://www.hive.fi/en/">
              Hive Helsinki
            </a>
            , juggling gamedev, computer science and other cool stuff in C
            language.
          </p>
          <br></br>
          <p>Part-time React, TypeScript, and UI/UX enjoyer.</p>
          <br></br>
          <p>Spare-time crafter, climber, and retro game lover.</p>
        </div>
      </div>
      <div className="Section-wrapper">
        <h1>Projects</h1>
        <div className="Projects-container">
          <Project
            name="Mikke!"
            description="React and TypeScript web app for Japanese language learners. Allows lookup of kanji (Japanese character) by English word/meaning and provides detailed information on the respective kanji."
            image_path={mikke}
          />
          <Project
            name="Lunchtime with Dragon"
            description="Top-down 2D game built with C, playable from the computer terminal. You play as a baby dragon, whose objective is to collect all of the fruits on the screen!"
            image_path={so_long}
          />
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
      <section className="Section-wrapper">
        <h1>Let's connect?</h1>
        <div className="contact">
          <button onClick={() => window.open("https://github.com/paularynty/")}>
            GitHub
          </button>
          <button
            onClick={() => window.open("https://linkedin.com/in/paularynty/")}
          >
            LinkedIn
          </button>
          <button onClick={() => window.open("mailto:paula.rynty@gmail.com")}>
            Email
          </button>
        </div>
      </section>
    </div>
  );
};
