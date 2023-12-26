import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import User from "./pages/User";
import Projects from "./pages/Projects";
import Preview from "./pages/Preview";
import Summary from "./pages/Summary";
import Experience from "./pages/Experience";
import Achievements from "./pages/Achievements";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import Skills from "./pages/Skills";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create/user" element={<User />} />
        <Route path="/create/summary" element={<Summary />} />
        <Route path="/create/experience" element={<Experience />} />
        <Route path="/create/projects" element={<Projects />} />
        <Route path="/create/achievements" element={<Achievements />} />
        <Route path="/create/education" element={<Education />} />
        <Route path="/create/certifications" element={<Certifications />} />
        <Route path="/create/skills" element={<Skills />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </div>
  );
}

export default App;
