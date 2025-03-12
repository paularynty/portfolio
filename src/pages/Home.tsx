import { Project, Skill } from "../components/index";

export const Home = () => {
  return (
    <div>
      <div>
        <h1>Paula Rynty</h1>
        <p>
          🌱 From human resources specialist, through copywriting and design, to
          a budding frontend developer.
        </p>
        <br></br>
        <p>
          🐝 Full-time student at{" "}
          <a href="https://www.hive.fi/en/">Hive Helsinki</a>: juggling computer
          science, gamedev, and other cool stuff in C language.
        </p>
        <br></br>
        <p>💫 Aspiring React, TypeScript, and UI/UX enjoyer.</p>
        <br></br>
        <p>🎨 Spare-time crafter, climber, and retro game lover.</p>
      </div>
      <div>
        <h1>Projects</h1>
        <div>
          <Project
            name="Mikke!"
            description="React and TypeScript web app for Japanese language learners. Allows lookup of kanji (Japanese character) by English word/meaning and provides detailed information on the respective kanji."
          />
          <Project
            name="Lunchtime with Dragon"
            description="Top-down 2D game built with C, playable from the computer terminal. You play as a baby dragon, whose objective is to collect all of the fruits on the screen!"
          />
        </div>
      </div>
      <div>
        <h1>Skills</h1>
        <div>
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
      <section>
        <h1>Let's connect?</h1>
        <div>
          <a href="mailto:paula.rynty@gmail.com">Email</a>
          <a href="https://github.com/paularynty/">GitHub</a>
          <a href="https://linkedin.com/in/paularynty/">LinkedIn</a>
        </div>
      </section>
    </div>
  );
};
