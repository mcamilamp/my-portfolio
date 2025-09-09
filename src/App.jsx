import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainNavBar from "./components/MainNavBar";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <>
      <Router>
        <MainNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:title" element={<ProjectDetail />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
