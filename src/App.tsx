import React from "react";
import "./App.css";
import { Header, Project } from "./components";

export default function App() {
  return (
    <div className="App">
      <Header />
      {/* learn react props! */}
      {/* <Project name = "2D game" description /> */}
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
      <div className="Projects">
        <h1>Projects</h1>
        <div className="Projects-container">
          <Project name="Mikke!" description="Kanji app made with React and TypeScript"/>
          <Project name="To-do list" description="To-do list app"/>
          <Project name="So_long" description="2D game made with C"/>
        </div>
      </div>
      <footer className="footer">
        <p>© Paula Rynty 2024</p>
      </footer>
    </div>
  );
}
