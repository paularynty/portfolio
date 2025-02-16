import "./App.css";
// import { useRef } from "react";
import { Header } from "./components";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";

// const handleClick = (section: React.MutableRefObject<HTMLElement | null>) => {
//   section.current?.scrollIntoView({
//     behavior: "smooth",
//   });
// };

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectName" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="footer">
          <p>© Paula Rynty 2025. Website built with React and Typescript.</p>
        </footer>
      </div>
    </Router>
  );
}
