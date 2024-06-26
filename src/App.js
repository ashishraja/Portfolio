import React from "react";
import "./index.css"
import {Routes,Route} from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Project from "./routes/projects";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return <>
  <ScrollToTop />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Project />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} /> 
  </Routes>
  </>
}

export default App;
