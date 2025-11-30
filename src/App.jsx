import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainNavBar from "./components/MainNavBar";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail";
import AboutMe from "./pages/AboutMe";
import Projects from "./components/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <MainNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:title" element={<ProjectDetail />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
