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
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectName" element={<ProjectDetails />} />
        </Routes>
        <footer className="footer">
          <p>© Paula Rynty 2025. Website built with React and Typescript.</p>
        </footer>
      </div>
    </Router>
  );
}
