import React from "react";
import "./App.css";
import { Header } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProjectDetails } from "./pages/ProjectDetails";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* learn react props! */}
          {/* <Project name = "2D game" description /> */}
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectName" element={<ProjectDetails />} />
        </Routes>
        <footer className="footer">
          <p>© Paula Rynty 2025</p>
        </footer>
      </div>
    </Router>
  );
}
