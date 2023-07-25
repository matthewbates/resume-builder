import "./App.css";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Experience from "./components/Experience";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="App">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Education />
    </div>
  );
}
