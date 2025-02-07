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
            Currently juggling programming studies at Hive Helsinki. May be
            spotted crafting, climbing, or playing retro games in her spare
            time.
          </p>
        </div>
      </div>
      <div className="Section-wrapper">
        <h1>Projects</h1>
        <div className="Projects-container">
          <Project
            name="Mikke!"
            description="Kanji learning and lookup web app"
            image_path={mikke}
          />
          <Project
            name="Lunchtime with Dragon"
            description="2D game made with C"
            image_path={so_long}
          />
          {/* <Project name="To-do list" description="To-do list app" /> */}
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
          <button onClick={() => window.open("mailto:paula.rynty@gmail.com")}>
            Email
          </button>
          <button
            onClick={() => window.open("https://linkedin.com/in/paularynty/")}
          >
            LinkedIn
          </button>
        </div>
      </section>
    </div>
  );
};
