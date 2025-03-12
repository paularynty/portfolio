import "./App.css";
import { Header } from "./components/index";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";

export default function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectName" element={<ProjectPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>
          <p>© Paula Rynty 2025. Website built with React and Typescript.</p>
        </footer>
    </Router>
  );
}
